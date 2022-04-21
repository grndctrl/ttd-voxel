import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Box />
      </Canvas>
    </div>
  );
}
