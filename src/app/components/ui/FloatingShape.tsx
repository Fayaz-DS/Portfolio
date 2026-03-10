'use client';

import { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

type NavigatorWithDeviceMemory = Navigator & { deviceMemory?: number };

useGLTF.preload('/models/female_hand.glb');

const makeHandMat = (lowEnd: boolean) =>
  lowEnd
    ? new THREE.MeshStandardMaterial({
        color: new THREE.Color('#cce8ff'),
        roughness: 0.05,
        metalness: 0.7,
        transparent: true,
        opacity: 0.65,
      })
    : new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#cce8ff'),
        roughness: 0.0,
        metalness: 0.0,
        transmission: 1.0,
        thickness: 2.5,
        ior: 1.5,
        envMapIntensity: 2.0,
        transparent: true,
        side: THREE.DoubleSide,
      });

function OrbitalRings({ lowEnd }: { lowEnd: boolean }) {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  const r3 = useRef<THREE.Mesh>(null);
  const seg = lowEnd ? 64 : 140;

  useFrame((_, dt) => {
    if (r1.current) r1.current.rotation.y += dt * 1.20;
    if (r2.current) r2.current.rotation.x += dt * 0.80;
    if (r3.current) {
      r3.current.rotation.z += dt * 0.55;
      r3.current.rotation.x += dt * 0.28;
    }
  });

  return (
    <group>
      <mesh ref={r1}>
        <torusGeometry args={[0.70, 0.024, 8, seg]} />
        <meshStandardMaterial color="#ff55cc" emissive="#ff22aa" emissiveIntensity={1.2}
          roughness={0.1} metalness={0.4} transparent opacity={0.85} />
      </mesh>
      <mesh ref={r2} rotation={[Math.PI / 2, 0.5, 0]}>
        <torusGeometry args={[0.92, 0.016, 8, seg]} />
        <meshStandardMaterial color="#cc44ff" emissive="#9911dd" emissiveIntensity={0.9}
          roughness={0.1} metalness={0.4} transparent opacity={0.60} />
      </mesh>
      <mesh ref={r3} rotation={[0.65, 0, 1.0]}>
        <torusGeometry args={[1.10, 0.010, 6, seg]} />
        <meshStandardMaterial color="#5599ff" emissive="#3366ee" emissiveIntensity={0.7}
          roughness={0.1} metalness={0.4} transparent opacity={0.40} />
      </mesh>
    </group>
  );
}

function Hand({
  scrollRef,
  lowEnd,
}: {
  scrollRef: React.MutableRefObject<number>;
  lowEnd: boolean;
}) {
  const { scene }    = useGLTF('/models/female_hand.glb');
  const { viewport } = useThree();
  const group        = useRef<THREE.Group>(null);
  const rotY         = useRef(0);
  const driftT       = useRef(0);
  const lastScroll   = useRef(0);
  const scrollVel    = useRef(0);
  const isMobile     = useRef(false);

  useEffect(() => {
    isMobile.current =
      window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
  }, []);

  const handScene = useMemo(() => {
    const clone = scene.clone(true);
    const mat   = makeHandMat(lowEnd);
    clone.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(m => m.dispose());
          mesh.material = [mat];
        } else {
          (mesh.material as THREE.Material).dispose();
          mesh.material = mat;
        }
        mesh.castShadow    = false;
        mesh.receiveShadow = false;
      }
    });
    return clone;
  }, [scene, lowEnd]);

  useFrame((_, dt) => {
    if (!group.current) return;

    const raw = isMobile.current
      ? 0
      : Math.abs(scrollRef.current - lastScroll.current);
    lastScroll.current = scrollRef.current;
    scrollVel.current += (raw * 320 - scrollVel.current) * 0.14;

    const speed = 0.15 + scrollVel.current * 3.0;

    rotY.current   += speed * dt;
    driftT.current += speed * 0.038 * dt;

    group.current.rotation.y = rotY.current;
    group.current.rotation.x = Math.sin(rotY.current * 0.28) * 0.20;
    group.current.rotation.z = Math.cos(rotY.current * 0.17) * 0.12;

    const hw = viewport.width  / 2;
    const hh = viewport.height / 2;
    group.current.position.x = Math.sin(driftT.current)        * hw * 0.80 + (-hw * 0.50);
    group.current.position.y = Math.cos(driftT.current * 0.50) * hh * 0.18 + (-hh * 1.4);
  });

  return (
    <group ref={group}>
      <primitive object={handScene} scale={1.1} />
      <group position={[0, 3, 0.3]}>
        <mesh>
          <sphereGeometry args={[0.26, 32, 32]} />
          <meshStandardMaterial
            color="#ffffff" emissive="#ff44cc"
            emissiveIntensity={3.5} transparent opacity={0.95} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.42, 24, 24]} />
          <meshStandardMaterial
            color="#ff66dd" emissive="#cc22aa" emissiveIntensity={1.6}
            transparent opacity={0.28} side={THREE.BackSide} />
        </mesh>
        <pointLight color="#ff44cc" intensity={4.0} distance={4.0} decay={2} />
        <OrbitalRings lowEnd={lowEnd} />
      </group>
    </group>
  );
}

function GradientEnv() {
  const { scene, gl } = useThree();
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    sceneRef.current = scene;
  }, [scene]);

  useEffect(() => {
    const targetScene = sceneRef.current;
    if (!targetScene) return;

    const W = 256, H = 128;
    const data = new Uint8Array(W * H * 4);

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const t = y / (H - 1);
        const r = Math.round(THREE.MathUtils.lerp(245, 43, t));
        const g = Math.round(THREE.MathUtils.lerp(246, 46, t));
        const b = Math.round(THREE.MathUtils.lerp(247, 51, t));
        const i = (y * W + x) * 4;
        data[i] = r; data[i+1] = g; data[i+2] = b; data[i+3] = 255;
      }
    }

    const tex = new THREE.DataTexture(data, W, H, THREE.RGBAFormat);
    tex.mapping    = THREE.EquirectangularReflectionMapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;

    const pmrem  = new THREE.PMREMGenerator(gl);
    pmrem.compileEquirectangularShader();
    const envMap = pmrem.fromEquirectangular(tex).texture;

    targetScene.environment = envMap;

    return () => {
      if (sceneRef.current === targetScene) {
        targetScene.environment = null;
      }
      envMap.dispose();
      tex.dispose();
      pmrem.dispose();
    };
  }, [gl]);

  return null;
}

export function FloatingShapeBackground() {
  const scrollRef = useRef(0);

  const [isLowEnd] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const cores  = navigator.hardwareConcurrency ?? 8;
    const mem    = (navigator as NavigatorWithDeviceMemory).deviceMemory ?? 4;
    const touch  = window.matchMedia('(pointer: coarse)').matches;
    return cores <= 4 || mem <= 2 || touch;
  });

  const [canRender3D] = useState<boolean>(() => {
    if (typeof document === 'undefined') return true;
    const probe = document.createElement('canvas');
    const gl =
      probe.getContext('webgl2', { alpha: true }) ??
      probe.getContext('webgl', { alpha: true });

    const attrs = gl?.getContextAttributes?.() ?? null;
    return Boolean(gl && attrs);
  });

  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onVis = () => setVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      scrollRef.current =
        el.scrollTop / Math.max(el.scrollHeight - el.clientHeight, 1);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible || !canRender3D) return null;

  return (
    <Canvas
      dpr={isLowEnd ? 1 : [1, 2]}
      camera={{ position: [0.6, 0.4, 5], fov: 45 }}
      gl={{
        alpha: true,
        antialias: isLowEnd,
        powerPreference: isLowEnd ? 'low-power' : 'high-performance',
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.2;
      }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      {!isLowEnd && <GradientEnv />}

      <directionalLight position={[7, 13,  6]} intensity={2.5} color="#aaccff" />
      <directionalLight position={[-6, -4, -3]} intensity={0.8} color="#cc88ff" />
      <pointLight position={[0, 0, -8]} intensity={1.4} color="#8866ff" />
      <ambientLight intensity={0.20} color="#334488" />

      <Hand scrollRef={scrollRef} lowEnd={isLowEnd} />

      {!isLowEnd && (
        <EffectComposer>
          <Bloom intensity={1.4} luminanceThreshold={0.55} luminanceSmoothing={0.7} mipmapBlur />
        </EffectComposer>
      )}
    </Canvas>
  );
}
