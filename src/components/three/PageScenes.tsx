import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GOLD = "#d4af37";

function SceneShell({ children, dpr = [1, 1.5] as [number, number], cam = 5 }: { children: React.ReactNode; dpr?: [number, number]; cam?: number }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12] shadow-[0_40px_120px_-40px_rgba(212,175,55,0.35)]">
      <Canvas dpr={dpr} camera={{ position: [0, 0, cam], fov: 45 }}>
        <ambientLight intensity={0.35} />
        <pointLight position={[6, 6, 6]} intensity={1.2} color={GOLD} />
        <pointLight position={[-6, -3, -4]} intensity={0.4} color="#ffffff" />
        {children}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(60%_60%_at_50%_100%,rgba(212,175,55,0.15),transparent_70%)]" />
    </div>
  );
}

/* ---- Operations: Kanban pipeline flowing ---- */
export function OperationsPipelineScene() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!group.current) return;
    group.current.children.forEach((c, i) => {
      c.position.x += dt * 0.6;
      if (c.position.x > 3) c.position.x = -3;
      c.position.y = Math.sin(c.position.x * 1.2 + i) * 0.15;
    });
  });
  const cards = useMemo(() => Array.from({ length: 9 }, (_, i) => ({ x: -3 + i * 0.75, y: (i % 3 - 1) * 1.2 })), []);
  return (
    <SceneShell>
      <group ref={group}>
        {cards.map((c, i) => (
          <mesh key={i} position={[c.x, c.y, 0]}>
            <boxGeometry args={[0.6, 0.4, 0.08]} />
            <meshStandardMaterial color={i % 3 === 0 ? GOLD : "#1a1a1e"} emissive={i % 3 === 0 ? GOLD : "#000"} emissiveIntensity={0.3} metalness={0.7} roughness={0.3} />
          </mesh>
        ))}
      </group>
      {[-1.2, 0, 1.2].map((y) => (
        <mesh key={y} position={[0, y, -0.2]}>
          <boxGeometry args={[7, 0.02, 0.02]} />
          <meshBasicMaterial color={GOLD} transparent opacity={0.2} />
        </mesh>
      ))}
    </SceneShell>
  );
}

/* ---- QA: floating glitch cubes ---- */
export function QABugHuntScene() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.children.forEach((c, i) => {
      c.rotation.x = clock.elapsedTime * (0.3 + i * 0.05);
      c.rotation.y = clock.elapsedTime * (0.2 + i * 0.03);
    });
  });
  const cubes = useMemo(() => Array.from({ length: 14 }, (_, i) => {
    const a = (i / 14) * Math.PI * 2;
    return { pos: [Math.cos(a) * 1.8, Math.sin(a) * 1.8, (i % 2) * 0.5 - 0.25] as [number, number, number], caught: i % 3 === 0 };
  }), []);
  return (
    <SceneShell>
      <group ref={group}>
        {cubes.map((c, i) => (
          <Float key={i} speed={2} rotationIntensity={2} floatIntensity={1}>
            <mesh position={c.pos}>
              <boxGeometry args={[0.35, 0.35, 0.35]} />
              <meshStandardMaterial color={c.caught ? GOLD : "#ff3355"} emissive={c.caught ? GOLD : "#ff3355"} emissiveIntensity={0.6} wireframe={!c.caught} />
            </mesh>
          </Float>
        ))}
      </group>
      <mesh>
        <torusGeometry args={[2.3, 0.02, 16, 100]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.4} />
      </mesh>
    </SceneShell>
  );
}

/* ---- Academic: paper stack + citation constellation ---- */
export function AcademicPapersScene() {
  const stars = useMemo(() => Array.from({ length: 40 }, () => [
    (Math.random() - 0.5) * 4,
    (Math.random() - 0.5) * 4,
    (Math.random() - 0.5) * 2,
  ] as [number, number, number]), []);
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => { if (g.current) g.current.rotation.y = clock.elapsedTime * 0.15; });
  return (
    <SceneShell>
      <group ref={g}>
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={i} position={[0, -0.8 + i * 0.12, 0]} rotation={[0, i * 0.15, 0]}>
            <boxGeometry args={[1.6, 0.05, 2]} />
            <meshStandardMaterial color={i === 5 ? GOLD : "#f5f5f0"} metalness={0.4} roughness={0.5} />
          </mesh>
        ))}
        {stars.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color={GOLD} />
          </mesh>
        ))}
      </group>
    </SceneShell>
  );
}

/* ---- AI Content: generative grid ---- */
export function GenerativeGridScene() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current) return;
    g.current.children.forEach((c, i) => {
      const s = 0.6 + Math.sin(clock.elapsedTime * 2 + i * 0.4) * 0.3;
      c.scale.set(s, s, s);
    });
  });
  const tiles = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let x = -2; x <= 2; x++) for (let y = -2; y <= 2; y++) arr.push([x * 0.7, y * 0.7, 0]);
    return arr;
  }, []);
  return (
    <SceneShell>
      <group ref={g}>
        {tiles.map((p, i) => (
          <mesh key={i} position={p}>
            <boxGeometry args={[0.5, 0.5, 0.08]} />
            <meshStandardMaterial color={i % 4 === 0 ? GOLD : "#111"} emissive={i % 4 === 0 ? GOLD : "#000"} emissiveIntensity={0.4} metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
      </group>
    </SceneShell>
  );
}

/* ---- AI Course Content: unfolding book/modules ---- */
export function CourseModuleScene() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current) return;
    g.current.children.forEach((c, i) => {
      c.rotation.y = Math.sin(clock.elapsedTime * 0.6 + i * 0.5) * 0.6;
    });
  });
  return (
    <SceneShell>
      <group ref={g}>
        {[-1.2, -0.4, 0.4, 1.2].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]}>
            <boxGeometry args={[0.6, 1.6, 0.05]} />
            <meshStandardMaterial color={i === 1 ? GOLD : "#f5f5f0"} metalness={0.5} roughness={0.4} />
          </mesh>
        ))}
      </group>
    </SceneShell>
  );
}

/* ---- AI Video Course: film strip ---- */
export function FilmStripScene() {
  const g = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!g.current) return;
    g.current.rotation.z += dt * 0.3;
  });
  return (
    <SceneShell>
      <group ref={g}>
        <mesh>
          <torusGeometry args={[1.6, 0.35, 16, 64]} />
          <meshStandardMaterial color="#0e0e10" metalness={0.9} roughness={0.3} />
        </mesh>
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 1.6, Math.sin(a) * 1.6, 0.18]}>
              <boxGeometry args={[0.28, 0.28, 0.05]} />
              <meshStandardMaterial color={i === 0 ? GOLD : "#1a1a1e"} emissive={i === 0 ? GOLD : "#000"} emissiveIntensity={0.6} />
            </mesh>
          );
        })}
      </group>
    </SceneShell>
  );
}

/* ---- AI Automation Course: circuit grid ---- */
export function CircuitScene() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => { if (g.current) g.current.rotation.y = clock.elapsedTime * 0.2; });
  const nodes = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) arr.push([i * 0.7, j * 0.7, 0]);
    return arr;
  }, []);
  return (
    <SceneShell>
      <group ref={g}>
        {nodes.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.8} />
          </mesh>
        ))}
        {nodes.map((p, i) => (
          i < nodes.length - 5 && (
            <mesh key={"l" + i} position={[p[0], p[1] + 0.35, 0]}>
              <boxGeometry args={[0.02, 0.7, 0.02]} />
              <meshBasicMaterial color={GOLD} transparent opacity={0.4} />
            </mesh>
          )
        ))}
      </group>
    </SceneShell>
  );
}

/* ---- Lead Gen: magnet + particles pulled to funnel ---- */
export function MagnetParticlesScene() {
  const g = useRef<THREE.Group>(null);
  const particles = useMemo(() => Array.from({ length: 60 }, () => ({
    p: new THREE.Vector3((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 2),
  })), []);
  useFrame((_, dt) => {
    if (!g.current) return;
    g.current.children.forEach((c, i) => {
      const target = new THREE.Vector3(0, 0, 0);
      const dir = target.clone().sub(c.position).normalize();
      c.position.addScaledVector(dir, dt * 0.8);
      if (c.position.length() < 0.3) c.position.copy(particles[i].p);
    });
  });
  return (
    <SceneShell>
      <mesh>
        <coneGeometry args={[0.6, 1.2, 32, 1, true]} />
        <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.2} side={THREE.DoubleSide} />
      </mesh>
      <group ref={g}>
        {particles.map((pt, i) => (
          <mesh key={i} position={pt.p.toArray()}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color={GOLD} />
          </mesh>
        ))}
      </group>
    </SceneShell>
  );
}

/* ---- Lead Conversion: funnel morph ---- */
export function FunnelScene() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => { if (g.current) g.current.rotation.y = clock.elapsedTime * 0.4; });
  return (
    <SceneShell>
      <group ref={g}>
        {[1.6, 1.2, 0.8, 0.4].map((r, i) => (
          <mesh key={i} position={[0, 1.2 - i * 0.7, 0]}>
            <torusGeometry args={[r, 0.05, 16, 64]} />
            <meshStandardMaterial color={i === 3 ? GOLD : "#f5f5f0"} emissive={i === 3 ? GOLD : "#000"} emissiveIntensity={i === 3 ? 0.8 : 0} metalness={0.6} roughness={0.4} />
          </mesh>
        ))}
        <mesh position={[0, -1.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={1} />
        </mesh>
      </group>
    </SceneShell>
  );
}

/* ---- Logo & Creative: rotating logo mark ---- */
export function LogoMarkScene() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current) return;
    g.current.rotation.y = clock.elapsedTime * 0.6;
    g.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.2;
  });
  return (
    <SceneShell>
      <group ref={g}>
        <mesh>
          <torusKnotGeometry args={[0.9, 0.28, 128, 32]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0.15} />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.8, 32, 32]} />
          <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.08} />
        </mesh>
      </group>
    </SceneShell>
  );
}

/* ---- Video Studio: cinematic timeline ---- */
export function VideoStudioScene() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => { if (g.current) g.current.rotation.y = Math.sin(clock.elapsedTime * 0.4) * 0.3; });
  return (
    <SceneShell>
      <group ref={g}>
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[-1.75 + i * 0.5, 0, 0]}>
            <boxGeometry args={[0.42, 0.7, 0.05]} />
            <meshStandardMaterial color={i === 3 ? GOLD : "#1a1a1e"} emissive={i === 3 ? GOLD : "#000"} emissiveIntensity={0.6} metalness={0.7} roughness={0.3} />
          </mesh>
        ))}
        <mesh position={[0, -0.6, 0.1]}>
          <boxGeometry args={[4.4, 0.02, 0.02]} />
          <meshBasicMaterial color={GOLD} />
        </mesh>
        <mesh position={[0, -0.6, 0.15]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={1} />
        </mesh>
      </group>
    </SceneShell>
  );
}
