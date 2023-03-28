import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  CanvasSnipperPlugin,
  addBasePlugins,
  mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const WebGiViewer = () => {
  const canvasRef = useRef(null);

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin);

    // or use this to add all main ones at once.
    await addBasePlugins(viewer);

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    await viewer.addPlugin(CanvasSnipperPlugin);

    viewer.renderer.refreshPipeline();

    await manager.addFromPath("scene.glb");
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
    // await viewer.addPlugin(GBufferPlugin);
    // await viewer.addPlugin(new ProgressivePlugin(32));
    // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm));
    // await viewer.addPlugin(GammaCorrectionPlugin);
    // await viewer.addPlugin(SSRPlugin);
    // await viewer.addPlugin(SSAOPlugin);
    // await viewer.addPlugin(BloomPlugin);
  }, []);
  useEffect(() => {
    setupViewer();
  }, []);
  return (
    <div className="web-gi absolute overflow-hidden top-[50vh] bg-transparent">
      <canvas
        id="web-gi-canvas"
        ref={canvasRef}
        className="w-[50vw] relative top-[-5rem] h-screen flex flex-row justify-start py-10 px-10 items-center bg-transparent"
      />
    </div>
  );
};

export default WebGiViewer;
