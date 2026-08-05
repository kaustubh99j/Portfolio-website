import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader">
        <p style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40
        }}>
          
        </p>
        {progress.toFixed(2)}%
      </span>
    </Html>
  );
};

export default CanvasLoader;