import grid_png from "../components/grid_switch.png";
import load_png from "../components/load_button.png";
import save_png from "../components/save_button.png";
import run_png from "../components/run_button.png";
import "../AboutPage.css";
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
      <body className="AboutPage-div">
        <h1 className="AboutPage-title">HelpPage</h1>

        <div className="AboutPage-abstract">
          <h2>
            <img src={run_png} alt="Run Button" className="run_button" />
            -Run Button
          </h2>
          <p>{run_button}</p>

          <h2>
            <img src={save_png} alt="Save Button" className="save_button" />
            -The Save Button
          </h2>
          <p>{save_button}</p>

          <h2>
            <img src={load_png} alt="Load Button" className="load_button" />
            -Load Button
          </h2>
          <p>{load_button}</p>

          <h2>
            <img src={grid_png} alt="Grid Switch" className="grid_switch" />
            -Grid Switch
          </h2>

          <p>{grid_switch}</p>
        </div>
      </body>
    </>
  );
}
