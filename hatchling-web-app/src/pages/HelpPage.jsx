import React, { useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SaveIcon from "@material-ui/icons/Save";
import DescriptionIcon from "@material-ui/icons/Description";
import GridOnIcon from "@mui/icons-material/GridOn";
import GridOffIcon from "@mui/icons-material/GridOff";
import NavBar from "../components/NavBar.jsx";

export default function HelpPage() {
  const [grid, setGrid] = useState(false);

  const run_button =
    "When you are finished typing your code and are ready to see it in action, this button will run your code";

  const save_button =
    "If you really like what you've programmed, you can save your code on your computer with a press of a button";

  const load_button =
    "You can load up any code you have saved on your computer by pressing the load button.";

  const grid_switch =
    "Characters on screen like to move from one place to another by counting their steps. To help see where a character can step to next, you can toggle the grid by pressing the grid button.";

  return (
    <>
      <NavBar />
      <div className="p-4 md:p-8 mx-auto">
        <h1 className="text-center">HelpPage</h1>
        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-2">
          <div className="m-2 md:m-0 p-2 md:p-4 border-2 border-slate-600 rounded hover:scale-105 bg-slate-900">
            <p className="text-bold text-xl text-center lg:text-2xl xl:text-3xl">
              The Run Button
            </p>
            <button className="bg-cyan-900 text-white flex border-2 border-cyan-900 rounded p-2 hover:scale-105 active:scale-95">
              <PlayArrowIcon color="white" fontSize="large" />
            </button>
            <p>{run_button}</p>
          </div>
          <div className="m-2 md:m-0 p-2 md:p-4 border-2 border-slate-600 rounded hover:scale-105 bg-slate-900">
            <p className="text-bold text-xl text-center lg:text-2xl xl:text-3xl">
              The Save Button
            </p>
            <button className="bg-cyan-900 text-white border-2 border-cyan-900 rounded flex items-center p-2 hover:scale-105 active:scale-95">
              Save <SaveIcon color="white" fontSize="large" />
            </button>
            <p>{save_button}</p>
          </div>
          <div className="m-2 md:m-0 p-2 md:p-4 border-2 border-slate-600 rounded hover:scale-105 bg-slate-900">
            <p className="text-bold text-xl text-center lg:text-2xl xl:text-3xl">
              The Load Button
            </p>
            <button className="bg-cyan-900 text-white border-2 border-cyan-900 rounded flex items-center p-2 hover:scale-105 active:scale-95">
              Load <DescriptionIcon color="white" fontSize="large" />
            </button>
            <p>{load_button}</p>
          </div>
          <div className="m-2 md:m-0 p-2 md:p-4 border-2 border-slate-600 rounded hover:scale-105 bg-slate-900">
            <p className="text-bold text-xl text-center lg:text-2xl xl:text-3xl">
              The Grid Switch
            </p>
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
            <p>{grid_switch}</p>
          </div>
        </div>
      </div>
    </>
  );
}
