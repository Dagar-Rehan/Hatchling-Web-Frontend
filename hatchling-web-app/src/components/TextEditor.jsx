import React, { useEffect, useState, useRef } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@material-ui/icons/Description";
import GridOnIcon from "@mui/icons-material/GridOn";
import GridOffIcon from "@mui/icons-material/GridOff";

import Editor from "@monaco-editor/react";
import faker from "../utils/faker";
import Character from "../Character_Information/Character"
import Character_Location from "../Character_Information/Character_Location"
import Message from "../Character_Information/Message";

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
    let output = faker(code);
    parseJsonOutput(output);
    console.log(output, code);
  }

  function parseJsonOutput(output) {
    var information = JSON.parse(output);
    characters_list.length = 0;
    locations_list.length = 0;
    messages_list.length = 0;
    var i = 0;

    for (i = 0; i < information.characters.length; i++) {
      const char = information.characters[i];
      characters_list.push(new Character(char.id, char.hair_color, char.eye_color, char.skin_color, char.outfit));
    }

    for (i = 0; i < information.locations.length; i++) {
      const loc = information.locations[i];
      locations_list.push(new Character_Location(loc.character_id, loc.x, loc.y, loc.order));
    }

    for (i = 0; i < information.messages.length; i++) {
      const mes = information.messages[i];
      messages_list.push(new Message(mes.character_id, mes.message, mes.order));
    }
  }

  function onLoadButtonClick() {
    inputFile.current.click();
  }

  function handelInputFile(event) {
    var load_file = false;
    const fileUploaded = event.target.files[0];

    const fileSplit = fileUploaded.name.split(".");

    if (fileSplit[1] === INPUT_FILE_EXTENSION && fileSplit.length === 2) {
      if (
        window.confirm(
          `Are you sure you want to upload file ${fileUploaded.name} ?`
        )
      ) {
        load_file = true;
      }

      if (load_file) {
        var reader = new FileReader();
        reader.onload = function (event) {
          setCode(event.target.result);
        };
        reader.readAsText(fileUploaded);
      }
    } else {
      alert(`Please select a file with the extension .${INPUT_FILE_EXTENSION}`);
    }
  }

  function onDownloadButtonClick() {
    const fileName = prompt("Enter File Name");

    if (fileName === "" || fileName.replace(/\s/g, "").length === 0) {
      alert(`Please enter a valid file name.`);
      return;
    } else {
      var blob = new Blob([code], { type: "text/plain" });
      let link = document.createElement("a");

      if (fileName.includes(`.${INPUT_FILE_EXTENSION}`)) {
        link.setAttribute("download", fileName);
      } else {
        link.setAttribute("download", fileName + `.${INPUT_FILE_EXTENSION}`);
      }

      link.href = window.URL.createObjectURL(blob);
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      }, 100);
    }
  }

  const [code, setCode] = useState("");
  const [grid, setGrid] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowDimensions());
  const inputFile = useRef(null);
  const INPUT_FILE_EXTENSION = "hac";

  const characters_list = [];
  const locations_list = [];
  const messages_list = [];

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid grid-cols-1 grid-rows-2 sm:p-4 lg:p-8 mx-auto lg:grid-cols-2 lg:grid-rows-1 h-[calc(100vh-7em)] max-h-screen max-w-screen-xl">
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
          <input
            type="file"
            id="file-input"
            ref={inputFile}
            onChange={handelInputFile}
            style={{ display: "none" }}
            accept={`.${INPUT_FILE_EXTENSION}`}
          />
          <button
            onClick={onLoadButtonClick}
            className="bg-cyan-900 text-white border-2 border-cyan-900 rounded flex items-center gap-1 p-2 text-xs sm:text-sm md:text-base hover:scale-105 active:scale-95"
          >
            Load{" "}
            <DescriptionIcon
              fontSize={windowSize.width >= MD_BREAKPOINT ? "large" : "small"}
            />
          </button>
          <button
            onClick={onDownloadButtonClick}
            className="bg-cyan-900 text-white border-2 border-cyan-900 rounded flex items-center gap-1 p-2 text-xs sm:text-sm md:text-base hover:scale-105 active:scale-95"
          >
            Download{" "}
            <DownloadIcon
              fontSize={windowSize.width >= MD_BREAKPOINT ? "large" : "small"}
            />
          </button>
        </div>
        <div className="bg-slate-900 border-2 border-slate-600 rounded p-2 w-full h-full">
          <div
            className={`${
              grid ? "grid" : "hidden"
            } grid-cols-3 grid-rows-3 gap-1 items-center justify-items-center w-full h-full z-50 transition-all ease-in-out duration-300 pointer-events-none select-none`}
          >
            <div className="m-1 p-1 outline-4 outline-dashed outline-cyan-900 w-full h-full flex justify-center items-center">
              <div className="opacity-50 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                0
              </div>
            </div>
            <div className="m-1 p-1 outline-4 outline-dashed outline-cyan-900 w-full h-full flex justify-center items-center">
              <div className="opacity-50 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                1
              </div>
            </div>
            <div className="m-1 p-1 outline-4 outline-dashed outline-cyan-900 w-full h-full flex justify-center items-center">
              <div className="opacity-50 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                2
              </div>
            </div>
            <div className="m-1 p-1 outline-4 outline-dashed outline-cyan-900 w-full h-full flex justify-center items-center">
              <div className="opacity-50 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                3
              </div>
            </div>
            <div className="m-1 p-1 outline-4 outline-dashed outline-cyan-900 w-full h-full flex justify-center items-center">
              <div className="opacity-50 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                4
              </div>
            </div>
            <div className="m-1 p-1 outline-4 outline-dashed outline-cyan-900 w-full h-full flex justify-center items-center">
              <div className="opacity-50 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                5
              </div>
            </div>
            <div className="m-1 p-1 outline-4 outline-dashed outline-cyan-900 w-full h-full flex justify-center items-center">
              <div className="opacity-50 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                6
              </div>
            </div>
            <div className="m-1 p-1 outline-4 outline-dashed outline-cyan-900 w-full h-full flex justify-center items-center">
              <div className="opacity-50 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                7
              </div>
            </div>
            <div className="m-1 p-1 outline-4 outline-dashed outline-cyan-900 w-full h-full flex justify-center items-center">
              <div className="opacity-50 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                8
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
