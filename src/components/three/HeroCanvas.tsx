import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer, MeshDistortMaterial } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import * as THREE from 'three'
import { CoreFallback } from './CoreFallback'
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference'

/* -------------------------------------------------------------------------- */
/* Utilities                                                                  */
/* -------------------------------------------------------------------------- */

function mulberry32(seed: number) {
  return function random() {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function randomOnSphere(random: () => number, inner: number, outer: number) {
  const theta = random() * Math.PI * 2
  const phi = Math.acos(2 * random() - 1)
  const radius = inner + random() * (outer - inner)
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

/* -------------------------------------------------------------------------- */
/* Core glow                                                                  */
/* -------------------------------------------------------------------------- */

function CoreGlow() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const context = canvas.getContext('2d')
    if (context) {
      const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128)
      gradient.addColorStop(0, 'rgba(235, 252, 255, 0.95)')
      gradient.addColorStop(0.14, 'rgba(130, 228, 255, 0.65)')
      gradient.addColorStop(0.34, 'rgba(40, 123, 255, 0.28)')
      gradient.addColorStop(0.68, 'rgba(25, 80, 190, 0.08)')
      gradient.addColorStop(1, 'rgba(5, 7, 11, 0)')
      context.fillStyle = gradient
      context.fillRect(0, 0, 256, 256)
    }
    return new THREE.CanvasTexture(canvas)
  }, [])

  useEffect(() => () => texture.dispose(), [texture])

  return (
    <sprite scale={[5.8, 5.8, 1]} position={[0, 0, -0.9]}>
      <spriteMaterial
        map={texture}
        transparent
        opacity={0.62}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </sprite>
  )
}

/* -------------------------------------------------------------------------- */
/* Fresnel shell                                                              */
/* -------------------------------------------------------------------------- */

function FresnelShell() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColorA: { value: new THREE.Color('#287BFF') },
          uColorB: { value: new THREE.Color('#9DF0FF') },
        },
        vertexShader: /* glsl */ `
          varying vec3 vNormal;
          varying vec3 vViewDirection;
          void main() {
            vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
            vNormal = normalize(normalMatrix * normal);
            vViewDirection = -modelViewPosition.xyz;
            gl_Position = projectionMatrix * modelViewPosition;
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float uTime;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying vec3 vNormal;
          varying vec3 vViewDirection;
          void main() {
            float facing = max(dot(normalize(vNormal), normalize(vViewDirection)), 0.0);
            float fresnel = pow(1.0 - facing, 2.1);
            float pulse = 0.78 + 0.22 * sin(uTime * 1.1 + 1.5);
            vec3 color = mix(uColorA, uColorB, fresnel * 0.7 + 0.12);
            float alpha = (fresnel * 0.68 + 0.04) * pulse;
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  )

  useEffect(() => () => material.dispose(), [material])

  useFrame((state) => {
    material.uniforms.uTime.value = state.clock.elapsedTime
  })

  return (
    <mesh scale={1.13}>
      <sphereGeometry args={[0.84, 64, 64]} />
      <primitive object={material} attach="material" />
    </mesh>
  )
}

/* -------------------------------------------------------------------------- */
/* Neural web                                                                 */
/* -------------------------------------------------------------------------- */

function NeuralWeb() {
  const group = useRef<THREE.Group>(null!)

  const geometry = useMemo(() => {
    const random = mulberry32(7461)
    const nodes = Array.from({ length: 54 }, () => randomOnSphere(random, 1.12, 1.72))
    const vertices: number[] = []

    nodes.forEach((node, index) => {
      const nearest = nodes
        .map((other, otherIndex) => ({ index: otherIndex, distance: node.distanceTo(other) }))
        .filter((entry) => entry.index !== index)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 2)

      nearest.forEach(({ index: targetIndex }) => {
        const target = nodes[targetIndex]
        vertices.push(node.x, node.y, node.z, target.x, target.y, target.z)
      })
    })

    const pointArray = new Float32Array(nodes.length * 3)
    nodes.forEach((node, index) => {
      pointArray[index * 3] = node.x
      pointArray[index * 3 + 1] = node.y
      pointArray[index * 3 + 2] = node.z
    })

    return { lineVertices: new Float32Array(vertices), pointArray }
  }, [])

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.045
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.05
    }
  })

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[geometry.lineVertices, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4E9BFF"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[geometry.pointArray, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#8FDCFF"
          size={0.022}
          sizeAttenuation
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/* Orbiting metal shards                                                      */
/* -------------------------------------------------------------------------- */

type Shard = {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  geometry: 'octa' | 'tetra' | 'ico'
}

function OrbitingShards() {
  const group = useRef<THREE.Group>(null!)

  const shards = useMemo<Shard[]>(() => {
    const random = mulberry32(9917)
    return Array.from({ length: 15 }, (_, index) => {
      const angle = (index / 15) * Math.PI * 2 + random() * 0.4
      const radius = 2.05 + random() * 0.72
      const y = (random() - 0.5) * 1.9
      return {
        position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
        rotation: [random() * Math.PI, random() * Math.PI, random() * Math.PI],
        scale: 0.038 + random() * 0.07,
        geometry: (['octa', 'tetra', 'ico'] as const)[index % 3],
      }
    })
  }, [])

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = -state.clock.elapsedTime * 0.062
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.12) * 0.04
    }
  })

  return (
    <group ref={group}>
      {shards.map((shard, index) => (
        <mesh key={index} position={shard.position} rotation={shard.rotation} scale={shard.scale}>
          {shard.geometry === 'octa' && <octahedronGeometry args={[1, 0]} />}
          {shard.geometry === 'tetra' && <tetrahedronGeometry args={[1, 0]} />}
          {shard.geometry === 'ico' && <icosahedronGeometry args={[1, 0]} />}
          <meshStandardMaterial
            color="#C8D1DF"
            metalness={1}
            roughness={0.24}
            envMapIntensity={1.9}
            emissive="#16294A"
            emissiveIntensity={0.35}
          />
        </mesh>
      ))}
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/* Particles                                                                  */
/* -------------------------------------------------------------------------- */

function Particles() {
  const group = useRef<THREE.Group>(null!)

  const positions = useMemo(() => {
    const random = mulberry32(3411)
    const count = 760
    const array = new Float32Array(count * 3)

    for (let index = 0; index < count; index += 1) {
      // Bias toward the shell around the core for a neural dust effect.
      const node = randomOnSphere(random, 2.1, 6.2)
      array[index * 3] = node.x
      array[index * 3 + 1] = node.y
      array[index * 3 + 2] = node.z
    }

    return array
  }, [])

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.014
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.04
    }
  })

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#7EB6F4"
          size={0.022}
          sizeAttenuation
          transparent
          opacity={0.6}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/* Core rig                                                                   */
/* -------------------------------------------------------------------------- */

function CoreRig({ reduced, compact }: { reduced: boolean; compact: boolean }) {
  const root = useRef<THREE.Group>(null!)
  const rings = useRef<THREE.Group>(null!)
  const ringA = useRef<THREE.Mesh>(null!)
  const ringB = useRef<THREE.Mesh>(null!)
  const core = useRef<THREE.Mesh>(null!)
  const pointer = useRef({ x: 0, y: 0 })
  const scrollProgress = useRef(0)
  const { size } = useThree()

  useEffect(() => {
    const onScroll = () => {
      scrollProgress.current = Math.min(1, window.scrollY / Math.max(window.innerHeight, 1))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (reduced) return
    const onPointerMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [reduced])

  useFrame((state, delta) => {
    if (reduced || !root.current) return

    const time = state.clock.elapsedTime
    const ease = 1 - Math.exp(-2.6 * Math.min(delta, 0.1))

    root.current.rotation.y += (pointer.current.x * 0.3 - root.current.rotation.y) * ease
    root.current.rotation.x += (-pointer.current.y * 0.16 - root.current.rotation.x) * ease
    root.current.position.x += (pointer.current.x * 0.08 - root.current.position.x) * ease
    root.current.position.y = -0.04 + Math.sin(time * 0.5) * 0.045 - scrollProgress.current * 0.55
    const targetScale = (size.width < 380 ? 0.88 : 1) * (1 - scrollProgress.current * 0.12)
    root.current.scale.setScalar(THREE.MathUtils.lerp(root.current.scale.x, targetScale, ease))

    if (rings.current) rings.current.rotation.y = time * 0.06
    if (ringA.current) ringA.current.rotation.z = time * 0.1
    if (ringB.current) ringB.current.rotation.x = -0.45 + Math.sin(time * 0.22) * 0.08
    if (core.current) {
      core.current.rotation.y = time * 0.11
      core.current.rotation.x = Math.sin(time * 0.17) * 0.08

      // Gentle, breathing emissive pulse.
      const material = core.current.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = 1.65 + Math.sin(time * 0.8) * 0.22
    }
  })

  return (
    <group ref={root} position={[0, 0, 0]}>
      <CoreGlow />

      {/* Interior intelligence core */}
      <mesh ref={core}>
        <sphereGeometry args={[0.84, 64, 64]} />
        <MeshDistortMaterial
          color="#081327"
          emissive="#1A5CFF"
          emissiveIntensity={1.65}
          metalness={0.82}
          roughness={0.19}
          envMapIntensity={1.4}
          distort={reduced ? 0 : 0.2}
          speed={reduced ? 0 : 1.1}
        />
      </mesh>
      <FresnelShell />

      {/* Containment cage */}
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color="#4A8FFF"
          wireframe
          transparent
          opacity={0.115}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <NeuralWeb />

      {/* Metal orbit rings */}
      <group ref={rings}>
        <mesh rotation={[Math.PI / 2.25, 0.22, 0.1]} scale={[1, 1, 0.94]}>
          <torusGeometry args={[1.72, 0.009, 8, 220, Math.PI * 1.55]} />
          <meshStandardMaterial
            color="#D6DEEA"
            metalness={1}
            roughness={0.18}
            envMapIntensity={2.1}
            emissive="#203C69"
            emissiveIntensity={0.28}
          />
        </mesh>
        <mesh ref={ringA} rotation={[1.18, 0.6, 0.4]}>
          <torusGeometry args={[2.02, 0.0045, 6, 220]} />
          <meshStandardMaterial
            color="#6D8CB4"
            metalness={1}
            roughness={0.3}
            emissive="#287BFF"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh ref={ringB} rotation={[0.68, -0.3, 0.25]}>
          <torusGeometry args={[1.55, 0.005, 6, 200, Math.PI * 0.92]} />
          <meshStandardMaterial
            color="#9EDBFF"
            metalness={0.9}
            roughness={0.2}
            emissive="#51D8FF"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>

      <OrbitingShards />
      <Particles />
      <pointLight color="#287BFF" intensity={compact ? 9 : 14} distance={6} decay={2} />

      {/* Halo accent far behind */}
      <pointLight position={[0, 0, -2]} color="#123B86" intensity={8} distance={8} />
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/* Scene                                                                      */
/* -------------------------------------------------------------------------- */

export default function HeroCanvas() {
  const reduced = useReducedMotionPreference()
  const [webgl, setWebgl] = useState<boolean | null>(null)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const context =
        canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')
      setWebgl(Boolean(context))
      if (context && 'getExtension' in context) {
        const loseContext = (context as WebGLRenderingContext).getExtension('WEBGL_lose_context')
        loseContext?.loseContext()
      }
    } catch {
      setWebgl(false)
    }

    const media = window.matchMedia('(max-width: 767px)')
    const onChange = () => setCompact(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  if (webgl !== true) {
    return <CoreFallback />
  }

  return (
    <Canvas
      className="!absolute !inset-0"
      dpr={compact ? [1, 1.35] : [1, 1.7]}
      camera={{ position: [0, 0, 6.4], fov: 40, near: 0.1, far: 40 }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: false,
      }}
      frameloop={reduced ? 'demand' : 'always'}
      onCreated={({ gl }) => {
        gl.setClearColor('#05070B', 1)
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 1.08
        gl.outputColorSpace = THREE.SRGBColorSpace
      }}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 5, 4]} intensity={2.1} color="#EAF2FF" />
        <directionalLight position={[-4, -3, 2]} intensity={1.1} color="#4A86FF" />
        <pointLight position={[3.5, 2.5, 1.5]} intensity={30} color="#51D8FF" distance={12} decay={2} />

        <Environment resolution={compact ? 128 : 256} frames={1}>
          <Lightformer
            form="ring"
            intensity={2.4}
            color="#287BFF"
            scale={7}
            position={[0, 2.5, -3]}
            rotation={[0, 0, 0]}
          />
          <Lightformer
            form="rect"
            intensity={2.8}
            color="#E9F3FF"
            scale={[9, 1.6, 1]}
            position={[0, 5, 1]}
            rotation={[-Math.PI / 3, 0, 0]}
          />
          <Lightformer
            form="rect"
            intensity={1.6}
            color="#51D8FF"
            scale={[3, 4, 1]}
            position={[-5, 0, 2]}
            rotation={[0, Math.PI / 3, 0]}
          />
          <Lightformer
            form="rect"
            intensity={1.1}
            color="#C8D1DF"
            scale={[2, 5, 1]}
            position={[5, -1, 1]}
            rotation={[0, -Math.PI / 3, 0]}
          />
        </Environment>

        <CoreRig reduced={reduced} compact={compact} />
      </Suspense>

      {!compact && !reduced && (
        <EffectComposer multisampling={0}>
          <Bloom
            intensity={0.85}
            luminanceThreshold={0.32}
            luminanceSmoothing={0.24}
            mipmapBlur
            radius={0.72}
          />
        </EffectComposer>
      )}
    </Canvas>
  )
}
