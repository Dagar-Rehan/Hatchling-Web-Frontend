import grid_png from "../assets/grid_switch.png";
import load_png from "../assets/load_button.png";
import save_png from "../assets/save_button.png";
import run_png from "../assets/run_button.png";
import NavBar from "../components/NavBar.jsx";

export default function HelpPage() {
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
            <img
              src={run_png}
              alt="Run Button"
              className="border-2 border-transparent rounded"
            />
            <p>{run_button}</p>
          </div>
          <div className="m-2 md:m-0 p-2 md:p-4 border-2 border-slate-600 rounded hover:scale-105 bg-slate-900">
            <p className="text-bold text-xl text-center lg:text-2xl xl:text-3xl">
              The Save Button
            </p>
            <img
              src={save_png}
              alt="Save Button"
              className="border-2 border-transparent rounded"
            />
            <p>{save_button}</p>
          </div>
          <div className="m-2 md:m-0 p-2 md:p-4 border-2 border-slate-600 rounded hover:scale-105 bg-slate-900">
            <p className="text-bold text-xl text-center lg:text-2xl xl:text-3xl">
              The Load Button
            </p>
            <img
              src={load_png}
              alt="Load Button"
              className="border-2 border-transparent rounded"
            />
            <p>{load_button}</p>
          </div>
          <div className="m-2 md:m-0 p-2 md:p-4 border-2 border-slate-600 rounded hover:scale-105 bg-slate-900">
            <p className="text-bold text-xl text-center lg:text-2xl xl:text-3xl">
              The Grid Switch
            </p>
            <img
              src={grid_png}
              alt="Grid Switch"
              className="border-2 border-transparent rounded"
            />
            <p>{grid_switch}</p>
          </div>
        </div>
      </div>
    </>
  );
}
