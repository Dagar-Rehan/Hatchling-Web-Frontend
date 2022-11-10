import NavBar from "../components/NavBar.jsx"


export default function HelpPage() {

  const run_button = "This button runs your code!"

  const save_button = "If you really like what you've programmed, you can save your code on your computer with a press of a button"
  
  const load_button = "You can load up any code you have saved on your computer by pressing the load button."
  
  const grid_button = "Characters on screen like to move from one place to another by counting their steps. To help see where a character can step to next, you can toggle the grid by pressing the grid button."
  
  return (
    <>
      <NavBar />
      <body className="HelpPage-div">
        <h1 className="HelpPage-title">Help Page</h1>
        <div className="HelpPage-abstract">

      <h2>button1</h2>
        <p>{button1}</p>

      </div>
    </body>
  </>
  );
}