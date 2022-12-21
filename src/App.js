import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😎": "Smiling Face with Sunglasses",
  "😂": "Face with Tears of Joy",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🤯": "Exploding Head",
  "🚀": "Rocket",
  "❤️": "Red Heart",
  "💘": "Heart with Arrow",
  "🍑": "Peach",
  "🍔": "Hamburger"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! We don't have this emoji in our Database.";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> My Emoji Interpreter 😎</h1>

      <input onChange={emojiInputHandler} />

      <h2> Meaning : {meaning} </h2>

      <h3> Emojis we Know ⬇️ </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 * Things to notice
 * class --> className
 * style --> takes an object instead of
 */
