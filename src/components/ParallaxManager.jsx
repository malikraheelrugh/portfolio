import { useEffect, useRef } from 'react'
import { initParallax } from '../utils/parallax'

export default function ParallaxManager() {
    const ctrlRef = useRef(null)

    useEffect(() => {
        const controller = initParallax()
        ctrlRef.current = controller
        return () => controller && controller.destroy && controller.destroy()
    }, [])

    return null
}
