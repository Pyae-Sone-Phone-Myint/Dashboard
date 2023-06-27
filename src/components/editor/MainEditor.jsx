import React from "react";
import Editor from "./Editor";
import "./edit.css";
const MainEditor = () => {
  return (
    <div className="edit-card">
      <div className=" edit-card-body">
        <div className="">
          <label htmlFor="title" className=" mb-2">Title</label>
          <input
            type="text"
            id="title"
            required
            className="form-control-input w-full outline-none  mt-4 mb-6"
            placeholder=""
          />
        </div>
        <div className="">
          <button className=" btn media-btn mb-6">Add Media</button>
        </div>
        <Editor/>
      </div>
    </div>
  );
};

export default MainEditor;
