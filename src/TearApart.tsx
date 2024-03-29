import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { numberState } from "./App";

export function TearApart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = useRecoilValue(numberState);

  const [revealState, setRevealState] = useState(0);

  useEffect(() => {
    setRevealState(0);
  }, [state.selectedNumber]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas size
    canvas.width = 350;
    canvas.height = 350;

    // Function to draw a circle with text
    const drawCircleWithText = (x: number, y: number, text: string) => {
      // Circle
      context.beginPath();
      context.arc(x, y, 50, 0, 2 * Math.PI);
      context.stroke();

      // Text
      context.font = "16px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(text, x, y);
    };

    // Central circle
    drawCircleWithText(canvas.width / 2, 50, `${state.selectedNumber}`);

    // Top left circle
    drawCircleWithText(
      50,
      150,
      revealState >= 2
        ? `${state.selectedNumber - (state.selectedNumber % 10)}`
        : "?"
    );

    // Bottom right circle
    drawCircleWithText(
      canvas.width - 50,
      150,
      revealState >= 1 ? `${state.selectedNumber % 10}` : "?"
    );

    // Draw lines
    context.moveTo(canvas.width / 2 - 45, 70); // Starting point near top left circle
    context.lineTo(87, 115); // End at the center circle
    context.moveTo(canvas.width / 2 + 45, 70); // Starting point near center circle
    context.lineTo(266, 115); // End at the bottom right circle
    context.stroke();
  }, [revealState, state.selectedNumber]);

  return (
    <canvas
      onClick={() => {
        setRevealState((revealState + 1) % 3);
      }}
      ref={canvasRef}
    ></canvas>
  );
}
