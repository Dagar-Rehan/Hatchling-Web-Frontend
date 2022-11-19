import React, { useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SaveIcon from "@material-ui/icons/Save";
import DescriptionIcon from "@material-ui/icons/Description";
import GridOnIcon from "@mui/icons-material/GridOn";
import GridOffIcon from "@mui/icons-material/GridOff";

import Editor from "@monaco-editor/react";

export default function Texteditor() {
  function handleChange(value) {
    setCode(value);
  }

  function handleRun() {
    alert("A name was submitted: " + code);
  }

  const [code, setCode] = useState("");
  const [grid, setGrid] = useState(false);

  return (
    <div className="grid grid-cols-1 grid-rows-2 p-4 md:p-8 mx-auto md:grid-cols-2 md:grid-rows-1">
      <div className="p-2">
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
      <div className="p-2 grid grid-cols-1 auto-rows-auto gap-2">
        <div className="flex gap-2 justify-evenly items-center bg-slate-900 border-2 border-slate-600 rounded">
          <button
            className="bg-cyan-900 text-white flex border-2 border-cyan-900 rounded p-2 hover:scale-105 active:scale-95"
            onClick={handleRun}
          >
            <PlayArrowIcon color="white" fontSize="large" />
          </button>
          <button
            className="bg-cyan-900 text-white border-2 border-cyan-900 rounded p-2 hover:scale-105 active:scale-95"
            onClick={() => setGrid(!grid)}
          >
            Grid{" "}
            {grid ? (
              <GridOnIcon color="white" fontSize="large" />
            ) : (
              <GridOffIcon color="white" fontSize="large" />
            )}
          </button>
          <button className="bg-cyan-900 text-white border-2 border-cyan-900 rounded flex items-center p-2 hover:scale-105 active:scale-95">
            Load <DescriptionIcon color="white" fontSize="large" />
          </button>
          <button className="bg-cyan-900 text-white border-2 border-cyan-900 rounded flex items-center p-2 hover:scale-105 active:scale-95">
            Save <SaveIcon color="white" fontSize="large" />
          </button>
        </div>
        <canvas className="bg-slate-900 border-2 border-slate-600 rounded p-2 w-full h-full"></canvas>
      </div>
    </div>
  );
}
