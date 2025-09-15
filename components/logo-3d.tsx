"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { TextureLoader } from "three"
import { Suspense } from "react"
import * as THREE from "three"

interface Logo3DProps {
  logoSrc: string
  alt: string
  className?: string
}

function LogoMesh({ logoSrc }: { logoSrc: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [texture, setTexture] = useState<THREE.Texture | null>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") return

    const loader = new TextureLoader()

    // Add a timeout to prevent hanging
    const loadTimeout = setTimeout(() => {
      console.warn(`Texture loading timeout for: ${logoSrc}`)
      setHasError(true)
    }, 10000) // 10 second timeout

    loader.load(
      logoSrc,
      (loadedTexture) => {
        clearTimeout(loadTimeout)
        try {
          // Optimize texture for crisp rendering and fix orientation
          loadedTexture.generateMipmaps = false
          loadedTexture.minFilter = THREE.LinearFilter
          loadedTexture.magFilter = THREE.LinearFilter
          loadedTexture.format = THREE.RGBAFormat
          loadedTexture.flipY = true // Fix the inversion by setting flipY to true
          loadedTexture.wrapS = THREE.ClampToEdgeWrapping
          loadedTexture.wrapT = THREE.ClampToEdgeWrapping
          setTexture(loadedTexture)
          setHasError(false)
        } catch (error) {
          console.warn("Error processing texture:", error)
          setHasError(true)
        }
      },
      undefined,
      (error) => {
        clearTimeout(loadTimeout)
        console.warn("Error loading texture:", logoSrc, error)
        setHasError(true)
      },
    )

    return () => {
      clearTimeout(loadTimeout)
    }
  }, [logoSrc])

  // Animate the logo
  useFrame((state) => {
    if (meshRef.current && !hasError && texture) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05

      // Smooth hover transitions
      if (hovered) {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          Math.sin(state.clock.elapsedTime * 1.5) * 0.05,
          0.1,
        )
        meshRef.current.scale.lerp(new THREE.Vector3(1.08, 1.08, 1.08), 0.1)
      } else {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0, 0.1)
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  if (hasError || !texture) return null

  // Calculate aspect ratio to maintain logo proportions
  const aspectRatio = texture.image?.width && texture.image?.height ? texture.image.width / texture.image.height : 1
  const width = aspectRatio > 1 ? 2.5 : 2.5 * aspectRatio
  const height = aspectRatio > 1 ? 2.5 / aspectRatio : 2.5

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[0, 0, 0]}
    >
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial
        map={texture}
        transparent={true}
        alphaTest={0.1}
        side={THREE.FrontSide} // Use FrontSide instead of DoubleSide for better performance
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  )
}

function LogoScene({ logoSrc }: { logoSrc: string }) {
  return (
    <>
      {/* Optimized lighting for crisp logo rendering */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 5]} intensity={0.6} />
      <pointLight position={[0, 0, 3]} intensity={0.4} color="#ffffff" />

      {/* The logo mesh */}
      <LogoMesh logoSrc={logoSrc} />
    </>
  )
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
      <div className="animate-pulse bg-gray-200 w-3/4 h-3/4 rounded"></div>
    </div>
  )
}

export default function Logo3D({ logoSrc, alt, className = "" }: Logo3DProps) {
  const [hasCanvasError, setHasCanvasError] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Don't render on server
  if (!isClient) {
    return (
      <div className={`w-full h-full ${className}`}>
        <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
          <img
            src={logoSrc || "/placeholder.svg"}
            alt={alt}
            className="w-full h-full object-contain p-4 max-w-[80%] max-h-[80%]"
          />
        </div>
      </div>
    )
  }

  if (hasCanvasError) {
    return (
      <div className={`w-full h-full ${className}`}>
        <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
          <img
            src={logoSrc || "/placeholder.svg"}
            alt={alt}
            className="w-full h-full object-contain p-4 max-w-[80%] max-h-[80%]"
            onError={(e) => {
              console.warn("Fallback image failed to load:", logoSrc)
              e.currentTarget.style.display = "none"
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
        dpr={[1, 2]} // Optimize for high DPI displays
        performance={{ min: 0.5 }} // Performance optimization
        onError={() => {
          console.warn("Canvas error, falling back to regular image")
          setHasCanvasError(true)
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <LogoScene logoSrc={logoSrc} />
        </Suspense>
      </Canvas>
    </div>
  )
}
