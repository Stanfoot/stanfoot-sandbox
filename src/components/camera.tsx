"use client";

import { useEffect, useRef } from "react";
import frame from "../../public/frame.png";

export default function Camera() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");

    const frameElem = document.createElement("img");
    frameElem.src = frame.src;

    const videoElem = document.createElement("video");
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoElem.srcObject = stream;
      videoElem.play();
    });

    videoElem.addEventListener("play", () => {
      const loop = () => {
        if (!context || !canvasRef.current) return;
        const { width, height } = canvasRef.current!;
        context.drawImage(videoElem, 0, 0, width, height);
        context.drawImage(frameElem, 0, 0, width, height);
        requestAnimationFrame(loop);
      };
      loop();
    });
  }, []);

  const handleClick = () => {
    const data = canvasRef.current?.toDataURL("image/png");
    if (!data) return;
    const aElem = document.createElement("a");
    aElem.href = data;
    aElem.download = "photo.png";
    aElem.click();
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="mb-2"
        width="640"
        height="480"
      ></canvas>
      <button
        className="border-2 rounded-md p-2"
        onClick={handleClick}
        type="button"
      >
        📸 撮影
      </button>
    </>
  );
}
