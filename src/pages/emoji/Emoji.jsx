import React, { useState, useRef } from "react";
import "./emoji.css";

const Emoji = () => {
  const [message, setMessage] = useState("");
  const [convertedMessage, setConvertedMessage] = useState("");

  const emojiMapping = {
    Sandile: 'Sandile "Mcxty" Ndimande is the developer of this App!',
    sandile: 'Sandile "Mcxty" Ndimande is the developer of this App!',
    "Sandile Ndimande":
      'Sandile "Mcxty" Ndimande is the developer of this App!',
    "sandile ndimande":
      'Sandile "Mcxty" Ndimande is the developer of this App!',
    Ndimande: 'Sandile "Mcxty" Ndimande is the developer of this App!',
    ndimande: 'Sandile "Mcxty" Ndimande is the developer of this App!',
    Mcxty: 'Sandile "Mcxty" Ndimande is the developer of this App!',
    mcxty: 'Sandile "Mcxty" Ndimande is the developer of this App!',
    "Sandile Mcxty": 'Sandile "Mcxty" Ndimande is the developer of this App!',
    Sandile_Mcxty: 'Sandile "Mcxty" Ndimande is the developer of this App!',
    "🙂": "Mild happy",
    "😀": "Happy",
    "😁": "Happy",
    "😊": "Smiley",
    "🤭": "Flattered",
    "😵": "Confused",
    "😕": "Really now?",
    "😂✌️": "Cheerful",
    "✌️": "Peace",
    "😟": "Worried",
    "😁": "Fake smile",
    "😳": " Shocked",
    "😮": " Suprised",
    "😖": "Troubled",
    "👶": "Baby",
    "🖕": "F*ck off!",
    "😩": "Tired",
    "😄": "Laughing",
    "😆": "Giggling",
    "😂": "Laughing with teary eyes",
    "☹️": "Dissapointed",
    "😔": "Sad",
    "😖": "Pouting",
    "🥺": "Teary eyes",
    "😢": "Sad with a tear",
    "😭": "Crying",
    "😠": " Angry",
    "😡": " Super angry",
    "😏": ' The "whatever Face"',
    "😣": "Undecided",
    "💸": "Money",
    "😘": "Blowing a heart kiss",
    "😙": "Blowing a kiss",
    "🤐": "Sealed lips",
    "😪": "Bored",
    "🙄": "Duh...",
    "😵": "Confused",
    "😉": "Wink",
    "😅": "Shy",
    "😥": "Embarrased",
    "😓": "Nervous",
    "🧐": "Still speculating",
    "😴": "Feeling sleepy",
    "😬": "Awkward",
    "😮": "Wow",
    "😳": "Super shocked",
    "😖": "Embarrassed",
    "😵‍💫": "Drunk",
    "🤢": "Sick",
    "😎": " Cool",
    "😐": " Straight face (Not in the mood)",
    "😈": "Evil",
    "❤️": " Heart",
    "💔": "Broken heart",
    "🌹": " Rose",
    "😾": "Fuming",
    "😹": "Laughing",
    "👋": "Waving",
    "🚬": "Smoke",
    "🤷": "Shrug",
    "☄️": "Shooting star",
    "🌟": "Congratulations star",
    "~:>": "🐔🐓 Chicken",
    "🎅": "Father Christmas",
    "🍻": "Cheers",
    "🦈": "Shark",
    "🎧": "Listening to music",
    "☕️": "Cup of tea",
    "🩹": "Bandage",
    "^5": "High five",
    "☠️": "Ghost",
    "💃": "Ingenile",
    "🕺": "Ingenile",
    "🐍": "Snake",
    "🤞": "I swear",
    "🙏": "I appreciate",
    "🤝": "Handshake",
    "🤘": "Too easy",
    "🤳": "Selfie",
    "👍": "Sharp",
    "🐸": "Ugly",
    "💰": "The bag",
    "👀": "I see ya",
    "👐": "Hands off",
    "🔌": "Plug",
    "🎥": "Film",
    "🥳": "Celebration",
    "💯": "1 hunnid",
    "🙅‍♂️": "Naaa",
    "🙆‍♂️": "For real?",
    "🤔": "Really?",
    "🚩": "Red flag",
    "🤑": "Moola",
    "🤥": "Long nose",
    "🤯": "Mind blown",
    "💫": "Mind gone",
    "🚮": "Rubbish",
    "🤴": "King",
    "💢": "Smack",
    "💩": "Sh*t",
    "🤛": "Ma brada",
    "👊": "Awe",
    "🤰": "Pregnant",
    "🧑‍💻": "IT nist",
    "👷": "At work",
    "✊": "Up!",
    "🤠": "Cowboy",
    "🕳": "",
    "🐐": "Lionel Messi",
    "🏌‍♂️": "Golfer",
    "🥀": "Witted rose",
    "🌹": "Rose",
    "👣": "I am gone",
    "🍟": "Fried chips",
    "🍕": "Slappin pizza",
    "🎂": "Cake",
    "🍺": "Beer",
    "💈": "Barbershop",
    "🌍": "World",
    "💇‍♂️": "",
    "🤜": "Ma nigga",
    "🍔": "Burger",
    "🧊": "Ice cold",
    "♨️": "Hot as hell",
    "🌝": "Ohh...k",
    "📈": "Bullish",
    "📉": "Bearish",
    "⚽️": "Umthenis",
    "🥇": "Numero uno",
    "🏅": "Superstar",
    "🍪": "Cookie",
    "🎶": "Music",
    "👥": "Fam",
    "🤗": "Flattered",
    "🤧": "Nnaa",
    "🍩": "Doughnut",
    "🏥": "Hospital",
    "🏦": "",
    "🌪": "Storm",
    "🌧": "Raining",
    "🎯": "Spot on",
    "🎱": "8th Ball",
    "🎮": "Game",
    "🥼": "Labcoat",
    "🦺": "Welele",
    "👟": "Kicks",
    "💉": "Vaccine",
    "💊": "Perc",
    "🩸": "blood",
    "🇿🇦": "Mzansi",
    "🇮🇹": "Italy",
    "🇦🇷": "Argentina",
    "🇵🇹": "Portugal",
    "🇯🇵": "Japan",
    "🇫🇷": "France",
    "🇪🇸": "Spain",
    "🇨🇲": "Cameroon",
    "🇨🇦": "Canada",
    "🇧🇷": "Brazil",
    "🇩🇪": "Germany",
  };

  const convertToEmojis = (message) => {
    let words = message.split(" ");
    let convertedMessage = "";
    words.forEach((word) => {
      if (emojiMapping[word]) {
        convertedMessage += emojiMapping[word];
      } else {
        convertedMessage = "Sorry try another emoji!";
      }
    });
    setConvertedMessage(convertedMessage);
  };

  //Clearing the input
  const inputRef = useRef(null);

  function clearInput() {
    inputRef.current.value = "";
  }

  //Turning input to X

  return (
    <div className="main_contain">
      <div className="emoticon_conversion_space">
        <div className="insert_section">
          <input
            type="text"
            ref={inputRef}
            value={message}
            placeholder="Insert emoji..."
            className="insert_space"
            onChange={(event) => setMessage(event.target.value)}
          />

          <button className="clear_input_btn" onClick={clearInput}>
            X
          </button>
        </div>

        <div>
          <input
            type="submit"
            value="Convert"
            className="convert_btn"
            onClick={() => convertToEmojis(message)}
          />

          <input
            type="submit"
            value="Clear"
            onClick={() => {
              setConvertedMessage("");
            }}
            className="clear_btn"
          />
        </div>

        <div className="output_space">{convertedMessage}</div>
      </div>
    </div>
  );
};

export default Emoji;
