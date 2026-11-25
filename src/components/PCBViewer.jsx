import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Center,
  Environment,
  Lightformer,
} from "@react-three/drei";

function PCBModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);

  // Treat materials as non-metal so that it appears brighter
  useMemo(() => {
    scene.traverse((obj) => {
      const m = obj.material;
      if (m && m.metalness === 1 && m.roughness === 1) {
        m.metalness = 0;
        m.roughness = 0.6;
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={8} />;
}

export default function PCBViewer({
  modelPath,
  fullWidth = false,
  brightness = 0.55,
}) {
  const fill = brightness * brightness;

  return (
    //keeps box centered onpage
    <div
      style={{
        display: "flex",
        justifyContent: fullWidth ? "flex-start" : "center",
        marginTop: fullWidth ? "0.5rem" : "2rem",
      }}
    >
      {/* Inner div controls size and background of the actual box */}
      <div
        style={{
          height: fullWidth ? "460px" : "600px",
          width: fullWidth ? "100%" : "65%",
          maxWidth: "900px",
          minWidth: fullWidth ? 0 : "400px",
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
          <ambientLight intensity={0.8 * fill} />
          <hemisphereLight args={["#ffffff", "#b0b4bc", 0.8 * fill]} />
          <directionalLight
            position={[3, 3, 5]}
            intensity={1.4 * brightness}
            color="#fff2e5"
          />
          <directionalLight
            position={[-4, 2, -3]}
            intensity={0.6 * brightness}
          />

          <Environment resolution={256}>
            <Lightformer
              form="rect"
              intensity={3 * fill}
              position={[0, 5, 2]}
              rotation-x={Math.PI / 2}
              scale={[10, 10, 1]}
            />
            <Lightformer
              form="rect"
              intensity={1.5 * fill}
              position={[-5, 1, 1]}
              rotation-y={Math.PI / 2}
              scale={[6, 4, 1]}
            />
            <Lightformer
              form="rect"
              intensity={1.5 * fill}
              position={[5, 1, 1]}
              rotation-y={-Math.PI / 2}
              scale={[6, 4, 1]}
            />
            <Lightformer
              form="rect"
              intensity={1 * fill}
              position={[0, 0, 6]}
              scale={[8, 4, 1]}
            />
          </Environment>
          <Suspense fallback={null}>
            <Center>
              <PCBModel modelPath={modelPath} />
            </Center>
          </Suspense>

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
  );
}
