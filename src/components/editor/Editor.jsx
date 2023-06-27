import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolBar , { modules, formats } from "./QuillToolBar";

export const Editor = () => {
  const text = `<h2>Minas Tirith</h2>
  <p><br></p>
  <p>Pippin looked out from the shelter of Gandalf"s cloak. He wondered if he was awake or still sleeping, still in the swift-moving dream in which he had been wrapped so long since the great ride began. The dark world was rushing by and the wind sang loudly in his ears. He could see nothing but the wheeling stars, and away to his right vast shadows against the sky where the mountains of the South marched past. Sleepily he tried to reckon the times and stages of their journey, but his memory was drowsy and uncertain.</p>
  <p><br></p>
  <p>There had been the first ride at terrible speed without a halt, and then in the dawn he had seen a pale gleam of gold, and they had come to the silent town and the great empty house on the hill. And hardly had they reached its shelter when the winged shadow had passed over once again, and men wilted with fear. But Gandalf had spoken soft words to him, and he had slept in a corner, tired but uneasy, dimly aware of comings and goings and of men talking and Gandalf giving orders. And then again riding, riding in the night. This was the second, no, the third night since he had looked in the Stone. And with that hideous memory he woke fully, and shivered, and the noise of the wind became filled with menacing voices.</p>
  <p><br></p>
  <p>A light kindled in the sky, a blaze of yellow fire behind dark barriers Pippin cowered back, afraid for a moment, wondering into what dreadful country Gandalf was bearing him. He rubbed his eyes, and then he saw that it was the moon rising above the eastern shadows, now almost at the full. So the night was not yet old and for hours the dark journey would go on. He stirred and spoke.</p>
  <p><br></p>
  <p>"Where are we, Gandalf?" he asked.</p>
  <p><br></p>
  <p>"In the realm of Gondor," the wizard answered. "The land of Anórien is still passing by."</p>
  <p><br></p>
  <p>There was a silence again for a while. Then, "What is that?" cried Pippin suddenly, clutching at Gandalf"s cloak. "Look! Fire, red fire! Are there dragons in this land? Look, there is another!"</p>
  <p><br></p>
  <p>For answer Gandalf cried aloud to his horse. "On, Shadowfax! We must hasten. Time is short. See! The beacons of Gondor are alight, calling for aid. War is kindled. See, there is the fire on Amon Dîn, and flame on Eilenach; and there they go speeding west: Nardol, Erelas, Min-Rimmon, Calenhad, and the Halifirien on the borders of Rohan."</p>
  <p><br></p>

  <p>But Shadowfax paused in his stride, slowing to a walk, and then he lifted up his head and neighed. And out of the darkness the answering neigh of other horses came; and presently the thudding of hoofs was heard, and three riders swept up and passed like flying ghosts in the moon and vanished into the West. Then Shadowfax gathered himself together and sprang away, and the night flowed over him like a roaring wind.</p>`;
  const [state, setState] = useState({ value: text });
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
      />
    </div>
  );
};

export default Editor;