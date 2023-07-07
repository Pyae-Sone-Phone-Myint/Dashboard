import React, { useRef, useState } from "react";
import Editor from "./Editor";
import "./edit.css";
import { nanoid } from "@reduxjs/toolkit";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
const MainEditor = () => {
  const [files, setFiles] = useState([]);
  const pond = useRef(null);
  const radio = [
    "Adventure",
    "Beach",
    "Discovery",
    "Mountain Biking",
    "Tent Camping",
  ];
  const check = [
    "Pick and Drop Services",
    "1 Meal Per Day",
    "Cruise Dinner & Music Event",
    "Visit 7 Best Places in the City with Group",
    "Additional Services",
    "Insurance",
    "Food & Drinks",
    "Visit 7 Tickets",
  ];

  return (
    <div className="edit-card my-6">
      <div className=" edit-card-body">
        <form action="" method="POST" id="tourCreateForm"></form>
        <div className="mb-2">
          <p className=" font-semibold text-2xl">Tour Information:</p>
        </div>
        <div className="">
          <label htmlFor="title" className=" mb-2">
            Title
          </label>
          <input
          form="tourCreateForm"
            type="text"
            id="title"
            required
            className="form-control-input w-full outline-none  mt-4 mb-6"
            placeholder=""
          />
        </div>
        <div className="">
          <label htmlFor="destination" className=" mb-2">
            Destination
          </label>
          <input
            type="text"
            form="tourCreateForm"
            id="destination"
            required
            className="form-control-input w-full outline-none  mt-4 mb-6"
            placeholder=""
          />
        </div>
        <div className=" flex gap-3">
          <div className=" w-full">
            <label htmlFor="price" className=" mb-2">
              Price ($)
            </label>
            <input
              type="number"
              form="tourCreateForm"
              id="price"
              required
              className="form-control-input w-full outline-none  mt-4 mb-6"
              placeholder=""
              min={10}
            />
          </div>
          <div className=" w-full">
            <label htmlFor="duration" className=" mb-2">
              Duration (Days)
            </label>
            <input
               form="tourCreateForm"
              type="number"
              id="duration"
              required
              min={1}
              className="form-control-input w-full outline-none  mt-4 mb-6"
              placeholder=""
            />
          </div>
        </div>
        
        <div className="">
          <label htmlFor="type" className=" mb-2">
            Tour Types
          </label>{" "}
          <br />
          <div className="my-2 flex flex-wrap gap-4">
            {radio.map((radio) => {
              return (
                <div key={nanoid()} className=" flex gap-2 my-1">
                  <input
                    type="radio"
                    form="tourCreateForm"
                    className=" checked:shadow-none"
                    name="type"
                    id={radio}
                  />
                  <label htmlFor={radio}>{radio}</label>
                </div>
              );
            })}
          </div>
        </div>
        <hr className=" my-4" />
        <div className="mb-2 mt-5">
          <p className=" font-semibold text-xl">Included Services:</p>
        </div>
        <div className="">
          {check.map((check) => {
            return (
              <div key={nanoid()} className=" flex gap-2 my-1">
                <input
                  type="checkbox"
                  form="tourCreateForm"
                  className=" focus:shadow-none checked:shadow-none"
                  name="includedServices[]"
                  id={check}
                />
                <label htmlFor={check}>{check}</label>
              </div>
            );
          })}
        </div>
        <hr className="my-4" />
        <div className="mb-2">
          <p className=" font-semibold text-xl">Additional Information:</p>
        </div>

        <div className=" flex gap-3 flex-wrap">
          <div className=" w-[48%] md:w-[30%] ">
            <label htmlFor="maxGuests" className=" mb-2">
              Max Guests
            </label>
            <input
              type="number"
              id="maxGuests"
              required
              form="tourCreateForm"
              className="form-control-input w-full outline-none  mt-4 mb-6"
              placeholder=""
              min={10}
            />
          </div>
          <div className="  w-[48%] md:w-[30%] ">
            <label htmlFor="minAge" className=" mb-2">
              Min Age
            </label>
            <input
              type="number"
              id="minAge"
              required
              form="tourCreateForm"
              className="form-control-input w-full outline-none  mt-4 mb-6"
              placeholder=""
              min={5}
            />
          </div>
          <div className=" w-full md:w-[30%]">
            <label htmlFor="location" className=" mb-2">
              Tour Location
            </label>
            <input
              type="text"
              id="location"
              required
              min={1}
              form="tourCreateForm"
              className="form-control-input w-full outline-none  mt-4 mb-6"
              placeholder=""
            />
          </div>
        </div>

        <hr className="my-4" />
        <div className="mb-2">
          <p className=" font-semibold text-xl">Tour Description:</p>
        </div>
        <div className="">
          <label htmlFor="exploreTours" className=" mb-2">
            Explore Tours
          </label>
          <textarea
            type="text"
            id="exploreTours"
            required
            form="tourCreateForm"
            rows={7}
            className="  form-control-textarea pt-3 w-full outline-none  mt-4 mb-6"
            placeholder=""
          ></textarea>
        </div>
        <div className="">
          <label htmlFor="advanceFacilities" className=" mb-2">
            Advance Facilities
          </label>
          <textarea
            type="text"
            id="advanceFacilities"
            required
            rows={7}
            form="tourCreateForm"
            className="  form-control-textarea pt-3 w-full outline-none  mt-4 mb-6"
            placeholder=""
          ></textarea>
        </div>
        <div className="">
          <label htmlFor="challenge" className=" mb-2">
            Challenge
          </label>
          <textarea
            type="text"
            id="challenge"
            required
            form="tourCreateForm"
            rows={7}
            className="  form-control-textarea pt-3 w-full outline-none  mt-4 mb-6"
            placeholder=""
          ></textarea>
        </div>
        <div className="my-3">
          <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={true}
            maxFiles={3}
            
            // server={'/api'}
            name="files" /* sets the file input name, it's filepond by default */
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
        </div>
        <div className="my-3">
        <Editor />
        </div>
        <div className=" my-4">
          <button type="submit"  form="tourCreateForm" className=" text-lg btn media-btn mb-6">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainEditor;
