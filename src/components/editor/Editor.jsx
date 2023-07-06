import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolBar , { modules, formats } from "./QuillToolBar";

export const Editor = () => {
  const [state, setState] = useState({ value: null });
  const handleChange = value => {
    setState({ value });
  };
  return (
    <div className="text-editor">
      <QuillToolBar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
        className=" min-h-[45px]"
        
      />
    </div>
  );
};

export default Editor;