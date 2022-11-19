import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SaveIcon from "@material-ui/icons/Save";
import DescriptionIcon from "@material-ui/icons/Description";
import GridOnIcon from "@mui/icons-material/GridOn";
import GridOffIcon from "@mui/icons-material/GridOff";

import Editor from "@monaco-editor/react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Texteditor() {
  const MD_BREAKPOINT = 768;

  function handleChange(value) {
    setCode(value);
  }

  function handleRun() {
    alert("A name was submitted: " + code);
  }

  const [code, setCode] = useState("");
  const [grid, setGrid] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid grid-cols-1 grid-rows-2 sm:p-4 lg:p-8 mx-auto lg:grid-cols-2 lg:grid-rows-1 h-full max-w-screen-xl">
      <div className="px-2 lg:p-2">
        <Editor
          className="bg-slate-900 text-white border-2 border-slate-600 rounded w-full h-full resize-none"
          defaultValue="// Write some code here ..."
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={(v, _e) => {
            handleChange(v);
          }}
        />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex gap-2 justify-evenly items-center bg-slate-900 border-2 border-slate-600 rounded h-fit p-2">
          <button
            className="bg-cyan-900 text-white flex border-2 border-cyan-900 rounded p-2 hover:scale-105 active:scale-95"
            onClick={handleRun}
          >
            <PlayArrowIcon
              fontSize={windowSize.width >= MD_BREAKPOINT ? "large" : "small"}
            />
          </button>
          <button
            className="bg-cyan-900 text-white border-2 border-cyan-900 rounded flex items-center gap-1 p-2 text-xs sm:text-sm md:text-base hover:scale-105 active:scale-95"
            onClick={() => setGrid(!grid)}
          >
            Grid{" "}
            {grid ? (
              <GridOnIcon
                fontSize={windowSize.width >= MD_BREAKPOINT ? "large" : "small"}
              />
            ) : (
              <GridOffIcon
                fontSize={windowSize.width >= MD_BREAKPOINT ? "large" : "small"}
              />
            )}
          </button>
          <button className="bg-cyan-900 text-white border-2 border-cyan-900 rounded flex items-center gap-1 p-2 text-xs sm:text-sm md:text-base hover:scale-105 active:scale-95">
            Load{" "}
            <DescriptionIcon
              fontSize={windowSize.width >= MD_BREAKPOINT ? "large" : "small"}
            />
          </button>
          <button className="bg-cyan-900 text-white border-2 border-cyan-900 rounded flex items-center gap-1 p-2 text-xs sm:text-sm md:text-base hover:scale-105 active:scale-95">
            Save{" "}
            <SaveIcon
              fontSize={windowSize.width >= MD_BREAKPOINT ? "large" : "small"}
            />
          </button>
        </div>
        <canvas className="bg-slate-900 border-2 border-slate-600 rounded p-2 w-full h-full"></canvas>
      </div>
    </div>
  );
}
