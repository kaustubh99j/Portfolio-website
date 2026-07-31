import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader">
        {progress.toFixed(0)}%
      </span>
    </Html>
  );
};

export default CanvasLoader;