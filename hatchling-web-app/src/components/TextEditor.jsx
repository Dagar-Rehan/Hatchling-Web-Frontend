import React, { useState } from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SaveIcon from '@material-ui/icons/Save';
import DescriptionIcon from '@material-ui/icons/Description';

export default function Texteditor() {
  function handleChange(event) {
    setCode(event.target.value);
  }

  function handleRun() {
    alert("A name was submitted: " + code);
  }

  const [code, setCode] = useState("");
  const [grid, setGrid] = useState(false);

  return (
    <div className="grid grid-cols-1 grid-rows-2 p-4 md:p-8 mx-auto md:grid-cols-2 md:grid-rows-1">
      <div>
        <div className="">
          <textarea
            rows="10"
            cols="10"
            className="bg-slate-900 text-white border-2 border-slate-900 rounded"
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </div>
      <div>
        <div className="gap-2 justify-center items-center">
          <button
            className="bg-transparent text-white flex border-2 border-transparent rounded"
            onClick={handleRun}
          >
            <PlayArrowIcon />
          </button>
          <button
            className="bg-slate-900 text-white border-2 border-slate-900 rounded p-2"
            onClick={() => setGrid(!grid)}
          >
            Grid{" "}
            <span className="text-slate-900 bg-white border-2 border-white rounded-full p-1">
              {grid ? "on" : "off"}
            </span>
          </button>
          <button className="bg-slate-900 text-white border-2 border-slate-900 rounded flex items-center p-2">
            Load{" "}
            <DescriptionIcon />
          </button>
          <button className="bg-slate-900 text-white border-2 border-slate-900 rounded flex items-center p-2">
            Save{" "}
            <SaveIcon />
          </button>
        </div>
        <canvas></canvas>
      </div>
    </div>
  );
}
