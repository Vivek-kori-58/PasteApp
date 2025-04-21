import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

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
      <button className="btn p-2 m-4 btn-outline-success button">
        {pasteId ? "Update My Paste" : "Create My Paste"}
      </button>
    </div>
    <div>
      <textarea placeholder="Enter Content Here..." rows="20" className="m-4 mt-2 p-2 rounded-3 border border-secondary-subtle text-area"></textarea>
    </div>
   </center>
  );
};

export default Home;
