import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { addToPaste, updateToPaste } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  const CreatePaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }
    if(pasteId){
      //update
      dispatch(updateToPaste(paste));
    }else {
      //create
      dispatch(addToPaste(paste));
    }

    //after updattion or creation

    setTitle('')
    setValue('')
    setSearchParams({})
  };

  return (
    <center>
      <div>
        <input
          className="p-2 m-4 rounded-3 border border-secondary-subtle input"
          type="text"
          placeholder="Enter Title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="btn p-2 m-4 btn-outline-success button"
          onClick={CreatePaste}
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div>
        <textarea
          placeholder="Enter Content Here..."
          rows={20}
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          className="m-4 mt-2 p-2 rounded-3 border border-secondary-subtle text-area"
        ></textarea>
      </div>
    </center>
  );
};

export default Home;
