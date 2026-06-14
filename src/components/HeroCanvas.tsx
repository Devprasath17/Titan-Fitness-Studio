import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function useIntersectionVisible(ref: React.RefObject<HTMLDivElement>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '200px', threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}

function useMouseRef() {
  const mouse = useRef<[number, number]>([0, 0]);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ];
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  return mouse;
}

function CameraRig({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.current[0] * 1.2 - camera.position.x) * 0.03;
    camera.position.y += (mouse.current[1] * 0.8 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function ParticleField({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const groupRef = useRef<THREE.Group>(null!);
  const count = 180;

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#f97316'),
      new THREE.Color('#dc2626'),
      new THREE.Color('#f59e0b'),
      new THREE.Color('#ffffff'),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.035 + mouse.current[0] * 0.04;
    groupRef.current.rotation.x = mouse.current[1] * 0.02;
  });

  return (
    <group ref={groupRef}>
      <points geometry={geometry}>
        <pointsMaterial
          vertexColors
          size={0.04}
          sizeAttenuation
          transparent
          opacity={0.65}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

function EnergyRing({
  radius,
  speed,
  tiltX,
  tiltZ,
  color,
  opacity = 0.35,
}: {
  radius: number;
  speed: number;
  tiltX: number;
  tiltZ: number;
  color: string;
  opacity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const geometry = useMemo(() => new THREE.TorusGeometry(radius, 0.01, 12, 64), [radius]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime * speed;
  });

  return (
    <mesh ref={meshRef} rotation={[tiltX, 0, tiltZ]} geometry={geometry}>
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

function FloatingOrb({
  position,
  size,
  color,
  speed,
}: {
  position: [number, number, number];
  size: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const baseY = position[1];
  const geometry = useMemo(() => new THREE.SphereGeometry(size, 16, 16), [size]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * speed + baseY) * 0.35;
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshBasicMaterial color={color} transparent opacity={0.14} />
    </mesh>
  );
}

function FloatingGeo({
  position,
  speed,
  axis,
}: {
  position: [number, number, number];
  speed: number;
  axis: 'x' | 'y' | 'z';
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const geometry = useMemo(() => new THREE.OctahedronGeometry(0.28, 0), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation[axis] = state.clock.elapsedTime * speed;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.35 + position[0]) * 0.25;
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshBasicMaterial color="#f97316" transparent opacity={0.18} wireframe />
    </mesh>
  );
}

function Scene() {
  const mouse = useMouseRef();

  return (
    <>
      <CameraRig mouse={mouse} />
      <ParticleField mouse={mouse} />
      <EnergyRing radius={4.8} speed={0.18} tiltX={Math.PI / 2.4} tiltZ={0.35} color="#f97316" />
      <EnergyRing radius={6.4} speed={-0.1} tiltX={Math.PI / 3.2} tiltZ={-0.55} color="#dc2626" opacity={0.26} />
      <FloatingOrb position={[-5.5, 1.8, -3.8]} size={1.2} color="#f97316" speed={0.52} />
      <FloatingOrb position={[6.8, -1.2, -5.8]} size={1.8} color="#dc2626" speed={0.34} />
      <FloatingGeo position={[-2.8, -1.8, -2.2]} speed={0.42} axis="y" />
      <FloatingGeo position={[4.2, 1.2, -3.0]} speed={-0.35} axis="x" />
    </>
  );
}

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionVisible(containerRef);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden>
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 13], fov: 58 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
          dpr={1}
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      )}
    </div>
  );
}
