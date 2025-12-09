import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
    const mountRef = useRef(null)
    const frameIdRef = useRef(null)

    useEffect(() => {
        const mount = mountRef.current
        if (!mount) return

        // Scene + camera
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.set(0, 0, 20)

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setPixelRatio(window.devicePixelRatio || 1)
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.domElement.style.display = 'block'
        renderer.domElement.style.position = 'fixed'
        renderer.domElement.style.top = '0'
        renderer.domElement.style.left = '0'
        renderer.domElement.style.zIndex = '-1'
        renderer.domElement.style.pointerEvents = 'none'

        mount.appendChild(renderer.domElement)

        // Lights
        const ambient = new THREE.AmbientLight(0xffffff, 0.6)
        scene.add(ambient)
        const dir = new THREE.DirectionalLight(0xffffff, 0.4)
        dir.position.set(5, 10, 7.5)
        scene.add(dir)

        // Rotating Torus
        const torusGeo = new THREE.TorusGeometry(8, 1.8, 16, 100)
        const torusMat = new THREE.MeshStandardMaterial({ color: 0x6f42c1, roughness: 0.4, metalness: 0.2, transparent: true, opacity: 0.25 })
        const torus = new THREE.Mesh(torusGeo, torusMat)
        torus.rotation.x = Math.PI / 2.6
        scene.add(torus)

        // Particle field
        const particlesCount = 800
        const positions = new Float32Array(particlesCount * 3)
        for (let i = 0; i < particlesCount; i++) {
            const r = THREE.MathUtils.randFloatSpread(60)
            positions[i * 3] = THREE.MathUtils.randFloatSpread(60)
            positions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(40)
            positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(60)
        }
        const particlesGeo = new THREE.BufferGeometry()
        particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const particlesMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, transparent: true, opacity: 0.8 })
        const particles = new THREE.Points(particlesGeo, particlesMat)
        scene.add(particles)

        // Scroll/parallax state (camera follows scroll a little for depth)
        let targetScroll = 0
        let currentScroll = 0
        const onScroll = () => {
            targetScroll = (window.scrollY || window.pageYOffset) / window.innerHeight * 2
        }
        window.addEventListener('scroll', onScroll, { passive: true })

        // Pointer-based parallax (mouse / touch) - smooth follow
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
        let targetMouseX = 0
        let targetMouseY = 0
        let currentMouseX = 0
        let currentMouseY = 0
        const onPointerMove = (e) => {
            if (prefersReduced) return
            const clientX = e.touches ? e.touches[0].clientX : e.clientX
            const clientY = e.touches ? e.touches[0].clientY : e.clientY
            // normalize to -1 .. 1
            const nx = (clientX / window.innerWidth) * 2 - 1
            const ny = (clientY / window.innerHeight) * 2 - 1
            targetMouseX = nx
            targetMouseY = ny
        }
        window.addEventListener('pointermove', onPointerMove)
        window.addEventListener('touchmove', onPointerMove, { passive: true })

        // Resize handler
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', onWindowResize)

        // Animation loop
        let frame = 0
        const animate = () => {
            frame++
            const t = frame * 0.002
            // smooth scroll follow
            currentScroll += (targetScroll - currentScroll) * 0.08

            // smooth pointer follow
            currentMouseX += (targetMouseX - currentMouseX) * 0.06
            currentMouseY += (targetMouseY - currentMouseY) * 0.06

            // camera positions: subtle movement so UI still readable
            camera.position.x = currentMouseX * 4
            camera.position.y = -currentScroll + currentMouseY * 1.8

            // torus offset for stronger depth
            torus.position.x = -currentMouseX * 6
            torus.position.y = -currentScroll * 1.2 + -currentMouseY * 3

            // particles respond slightly to pointer for parallax
            particles.position.x = currentMouseX * 10
            particles.position.y = -currentMouseY * 8

            torus.rotation.y += 0.0025
            torus.rotation.x += 0.001
            particles.rotation.y = t * 0.2
            particles.rotation.x = Math.sin(t) * 0.02
            renderer.render(scene, camera)
            frameIdRef.current = requestAnimationFrame(animate)
        }
        // initialize scroll value
        onScroll()
        frameIdRef.current = requestAnimationFrame(animate)

        // Cleanup on unmount
        return () => {
            cancelAnimationFrame(frameIdRef.current)
            window.removeEventListener('resize', onWindowResize)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('pointermove', onPointerMove)
            window.removeEventListener('touchmove', onPointerMove)
            mount.removeChild(renderer.domElement)
            particlesGeo.dispose()
            particlesMat.dispose()
            torusGeo.dispose()
            torusMat.dispose()
            renderer.dispose()
        }
    }, [])

    // The container sits in the DOM; the canvas is appended and positioned fixed behind content
    return <div ref={mountRef} aria-hidden="true" />
}
