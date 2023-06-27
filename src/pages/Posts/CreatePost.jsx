import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import MainEditor from "../../components/editor/MainEditor";

const CreatePost = () => {
  const [statusShow, setStatusShow] = useState(false);
  const [visibilityShow, setVisibilityShow] = useState(false);
  const [publishShow, setPublishShow] = useState(false);
  const radio = ["Standard", "Aside", "Image", "Video", "Quote", "Link"];
  const check = ["Gear", "Stories", "Tips & Tricks", "Trips", "Uncategorized"];

  return (
    <div className=" flex min-h-screen px-5 md:px-0">
      <div className="flex w-full lg:flex-row flex-col gap-5">
        <div className="w-full md:w-[100%] lg:w-[75%] flex flex-col gap-10">
          <MainEditor />
        </div>
        <div className="w-full md:w-[100%] lg:w-[25%] flex flex-col gap-5">
          <div className="  shadow-xl rounded-xl bg-white">
            <h1 className=" py-5 rounded-t-xl px-8 tracking-[0.2rem] shadow">
              PUBLISH
            </h1>
            <div className=" flex px-8 justify-between py-8">
              <button className=" border border-gray-600 px-2 rounded py-1 hover:bg-gray-600 hover:text-white">
                Save Draft
              </button>
              <button className=" border border-gray-600 px-2 rounded py-1 hover:bg-gray-600 hover:text-white">
                Preview
              </button>
            </div>
            <hr className=" mx-8 border-gray-400" />
            <div className="px-8 select-none py-5 pb-10 flex flex-col gap-3">
              <div>
                <div className=" flex items-center gap-2">
                  <div className=" text-gray-600">Status: </div>
                  <div className=" font-bold text-gray-800">Draft</div>
                  <div>
                    <button
                      onClick={() => {
                        setStatusShow(!statusShow);
                      }}
                      className=" text-indigo-500 hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className={`my-2 ${statusShow ? "" : "hidden"}`}>
                  <select
                    className={`border w-full rounded px-2 py-1 text-gray-700`}
                    name="Draft"
                    id=""
                  >
                    <option value="Draft">Draft</option>
                    <option value="Pending Review">Pending Review</option>
                  </select>
                </div>
              </div>
              <div>
                <div className=" flex items-center gap-2">
                  <div className=" text-gray-600">Visibility: </div>
                  <div className=" font-bold text-gray-800">Public</div>
                  <div>
                    <button
                      onClick={() => {
                        setVisibilityShow(!visibilityShow);
                      }}
                      className=" text-indigo-500 hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className={`my-2 ${visibilityShow ? "" : "hidden"}`}>
                  <div className=" flex gap-2">
                    <input
                      type="radio"
                      className=" checked:shadow-none"
                      name="public"
                      id="public"
                    />
                    <label htmlFor="public">Public</label>
                  </div>
                  <div className=" flex gap-2">
                    <input
                      type="radio"
                      className=" checked:shadow-none"
                      name="public"
                      id="passwordProtected"
                    />
                    <label htmlFor="passwordProtected">
                      Password protected
                    </label>
                  </div>
                  <div className=" flex gap-2">
                    <input
                      type="radio"
                      className=" checked:shadow-none"
                      name="public"
                      id="Private"
                    />
                    <label htmlFor="Private">Private</label>
                  </div>
                </div>
              </div>
              <div>
                <div className=" flex items-center gap-2">
                  <div className=" text-gray-600">Publish: </div>
                  <div className=" font-bold text-gray-800">immediately</div>
                  <div>
                    <button
                      onClick={() => {
                        setPublishShow(!publishShow);
                      }}
                      className=" text-indigo-500 hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className={`my-2 ${publishShow ? "" : "hidden"}`}>
                  <div className=" flex items-center gap-2">
                    <input
                      type="date"
                      name=""
                      className=" appearance-none focus:outline-none py-1 px-2 rounded border"
                      placeholder="10/20/2017"
                      id=""
                    />
                    <span>at</span>
                    <input
                      type="number"
                      className=" appearance-none focus:outline-none border w-14 text-center py-1 rounded"
                      defaultValue={8}
                      name=""
                      id=""
                    />
                    <span>:</span>
                    <input
                      type="number"
                      className=" appearance-none focus:outline-none border w-14 text-center py-1 rounded"
                      defaultValue={0}
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-8 bg-[rgba(0,0,0,0.03)] py-4">
              <div className=" flex justify-end">
                <button className=" px-4 py-2 border bg-indigo-400 rounded text-white hover:bg-indigo-500">
                  Public
                </button>
              </div>
            </div>
          </div>
          <div className="  shadow-xl rounded-xl bg-white">
            <h1 className=" py-5 rounded-t-xl px-8 tracking-[0.2rem] shadow">
              FORMAT
            </h1>
            <div className=" px-8 py-10">
              {radio.map((radio) => {
                return (
                  <div key={nanoid()} className=" flex gap-2 my-1">
                    <input
                      type="radio"
                      className=" checked:shadow-none"
                      name="format"
                      id={radio}
                    />
                    <label htmlFor={radio}>{radio}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="  shadow-xl rounded-xl bg-white">
            <h1 className=" py-5 rounded-t-xl px-8 tracking-[0.2rem] shadow">
              CATEGORIES
            </h1>
            <div className=" py-8">
              <div className=" px-8 mb-5">
                {check.map((check) => {
                  return (
                    <div key={nanoid()} className=" flex gap-2 my-1">
                      <input
                        type="checkbox"
                        className=" focus:shadow-none checked:shadow-none"
                        name=""
                        id={check}
                      />
                      <label htmlFor={check}>{check}</label>
                    </div>
                  );
                })}
              </div>
              <button className="px-8 text-indigo-500 hover:underline">
                + Add New Category
              </button>
            </div>
          </div>
          <div className="  shadow-xl rounded-xl bg-white">
            <h1 className=" py-5 rounded-t-xl px-8 tracking-[0.2rem] shadow">
              TAGS
            </h1>
            <div className=" p-8">
              <div className="flex-wrap border w-full min-h-[80px] rounded gap-2 bg-[rgba(0,0,0,0.03)] flex items-start py-2 px-2">
                <div className=" px-3 py-1 bg-indigo-600 text-white border text-sm text-center rounded-full">
                  Tag1
                </div>
                <div className=" px-3 py-1 bg-indigo-600 text-white border text-sm text-center rounded-full">
                  Tag2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
