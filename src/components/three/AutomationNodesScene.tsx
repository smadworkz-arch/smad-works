import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_LABELS = ["WA", "AI", "CRM", "Cal", "HR", "Rev"];

function Nodes() {
  const group = useRef<THREE.Group>(null!);
  const nodes = useMemo(() => {
    const arr: { pos: THREE.Vector3; label: string }[] = [];
    const n = NODE_LABELS.length;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      arr.push({
        pos: new THREE.Vector3(Math.cos(a) * 2.4, Math.sin(a) * 1.4, Math.sin(a * 2) * 0.6),
        label: NODE_LABELS[i]!,
      });
    }
    return arr;
  }, []);

  const linePositions = useMemo(() => {
    const pts: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i]!.pos;
      const b = nodes[(i + 1) % nodes.length]!.pos;
      pts.push(a.x, a.y, a.z, b.x, b.y, b.z);
      // center connector
      pts.push(0, 0, 0, a.x, a.y, a.z);
    }
    return new Float32Array(pts);
  }, [nodes]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.25;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((c, i) => {
      if (i < nodes.length) {
        c.position.z = nodes[i]!.pos.z + Math.sin(t * 1.5 + i) * 0.15;
      }
    });
  });

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos.toArray()}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.6} roughness={0.3} />
        </mesh>
      ))}
      {/* center hub */}
      <mesh>
        <icosahedronGeometry args={[0.45, 0]} />
        <meshStandardMaterial color="#ffffff" emissive="#d4af37" emissiveIntensity={0.3} wireframe />
      </mesh>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#d4af37" transparent opacity={0.4} />
      </lineSegments>
    </group>
  );
}

function Pulses() {
  const ref = useRef<THREE.Points>(null!);
  const count = 40;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 0.5 + Math.random() * 2.2;
      arr[i * 3] = Math.cos(a) * r;
      arr[i * 3 + 1] = Math.sin(a) * r * 0.7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.15;
    ref.current.rotation.x += delta * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#ffffff" transparent opacity={0.7} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export function AutomationNodesScene() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-[#0f0f12]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(212,175,55,0.18),transparent_70%)]" />
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#d4af37" />
        <Nodes />
        <Pulses />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-4">
        {NODE_LABELS.map((l) => (
          <span key={l} className="rounded-full border border-gold/40 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold backdrop-blur">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
