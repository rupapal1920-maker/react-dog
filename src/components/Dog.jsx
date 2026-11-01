import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Wolf = () => {
    const wolf = useRef(null)

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#section-1',
                endTrigger: '#section-3',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
        })

        timeline
            .to(wolf.current.position, { z: -0.75, y: 0.1 })
            .to(wolf.current.rotation, { x: Math.PI / 15 })
            .to(wolf.current.rotation, { y: -Math.PI }, 'third')
            .to(wolf.current.position, { x: -0.5, z: 0.6, y: -0.05 }, 'third')
    }, [])

    return (
        <group ref={wolf} position={[0.25, -0.2, 0]} rotation={[0, Math.PI / 3.9, 0]}>
            <mesh scale={[0.72, 0.45, 1.05]}>
                <sphereGeometry args={[0.5, 16, 12]} />
                <meshStandardMaterial color="#68747b" roughness={0.82} />
            </mesh>
            <mesh position={[0, 0.35, 0.56]} scale={[0.42, 0.42, 0.48]}>
                <sphereGeometry args={[0.5, 16, 12]} />
                <meshStandardMaterial color="#7f8d92" roughness={0.78} />
            </mesh>
            <mesh position={[0, 0.23, 0.94]} scale={[0.25, 0.2, 0.34]}>
                <sphereGeometry args={[0.5, 12, 8]} />
                <meshStandardMaterial color="#b0b6b4" roughness={0.86} />
            </mesh>
            {[-1, 1].map((side) => (
                <mesh key={side} position={[side * 0.17, 0.42, 0.92]} scale={[0.045, 0.06, 0.025]}>
                    <sphereGeometry args={[1, 12, 8]} />
                    <meshStandardMaterial color="#101417" roughness={0.35} />
                </mesh>
            ))}
            <mesh position={[0, 0.23, 1.25]} scale={[0.1, 0.08, 0.08]}>
                <sphereGeometry args={[1, 12, 8]} />
                <meshStandardMaterial color="#171b1d" roughness={0.45} />
            </mesh>
            {[-1, 1].map((side) => (
                <group key={side} position={[side * 0.23, 0.67, 0.48]} rotation={[0, 0, side * -0.18]}>
                    <mesh>
                        <coneGeometry args={[0.2, 0.48, 4]} />
                        <meshStandardMaterial color="#56636a" roughness={0.8} />
                    </mesh>
                </group>
            ))}
            {[-1, 1].map((side) => (
                <group key={side}>
                    <mesh position={[side * 0.3, -0.43, 0.35]} scale={[0.14, 0.5, 0.14]}>
                        <cylinderGeometry args={[0.5, 0.62, 1, 10]} />
                        <meshStandardMaterial color="#59666d" roughness={0.85} />
                    </mesh>
                    <mesh position={[side * 0.3, -0.43, -0.38]} scale={[0.14, 0.5, 0.14]}>
                        <cylinderGeometry args={[0.5, 0.62, 1, 10]} />
                        <meshStandardMaterial color="#59666d" roughness={0.85} />
                    </mesh>
                </group>
            ))}
            <mesh position={[0, 0.05, -0.98]} rotation={[0.35, 0, 0]} scale={[0.16, 0.16, 0.72]}>
                <coneGeometry args={[0.45, 1, 8]} />
                <meshStandardMaterial color="#59666d" roughness={0.82} />
            </mesh>
            <directionalLight position={[0, 5, 5]} color="#ffffff" intensity={4} />
            <ambientLight intensity={1.2} />
        </group>
    )
}

export default Wolf
