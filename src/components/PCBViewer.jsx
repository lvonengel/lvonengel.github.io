import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Center } from "@react-three/drei"

function PCBModel({ modelPath }) {
  const { scene } = useGLTF(modelPath)
  return <primitive object={scene} scale={8} />
}

export default function PCBViewer({modelPath}) {
    return (
        //keeps box centered onpage
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
        }}
        >
            {/* Inner div controls size and background of the actual box */}
            <div
                style={{
                height: "600px",
                width: "65%",
                maxWidth: "900px",
                minWidth: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f0f2f5",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                }}
            >
                <Canvas
                camera={{ position: [0, 0, 2], fov: 35 }}
                style={{ filter: "brightness(0.9) contrast(0.95)" }}
                >
                <ambientLight intensity={0.4} />
                <directionalLight position={[3, 3, 5]} intensity={0.6} color="#fff2e5" />
                <Environment preset="city" background={false} blur={0.5} />

                <Center>
                    <PCBModel modelPath={modelPath}/>
                </Center>

                <OrbitControls
                    enableZoom
                    minDistance={1}
                    maxDistance={2}
                    target={[0, 0, 0]}
                    enableDamping
                    dampingFactor={0.08}
                    zoomSpeed={0.8}
                    autoRotate
                    autoRotateSpeed={0.4}
                />
                </Canvas>
            </div>
        </div>
    )
}
