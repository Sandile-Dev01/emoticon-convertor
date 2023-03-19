import React, { useState, useRef } from "react";
import "./main-page.css";

const Main = () => {
  const [message, setMessage] = useState("");
  const [convertedMessage, setConvertedMessage] = useState("");
  const [isNone, setNone] = useState(true);

  const van = () => {
    isNone(true) ? setNone("output_space") : setNone("vanish");
  };

  const emojiMapping = {
    GB: "Sboniso Mngomezulu from 035, thats my boi!",
    Issa: "Thats my nigga from 035, I call him 4PF",
    "Big Head": "My day one from 035, a blood.",
    Soni: "Sony Max a G from 035, one of my niggas",
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
    ":)": "🙂 Happy",
    ":-]": "😀 Happy",
    ":]": "😀 Happy",
    ":}": "😁 Happy",
    ":>": "😊 Smiley",
    "^m^": "🤭 Flattered",
    "(?_?)": "😵 Confused",
    "(・・?": "😕",
    "(^v^)": "😂✌️ Cheerful",
    '(-"-)': "😟 Worried",
    "(￣ー￣)": "😁 Grinning",
    o_0: "😳 Shock",
    "o.O": "😮 Suprised",
    o_O: "😳 Shock",
    ":O": "😮 Suprised",
    "(o.o)": "😮 Suprised",
    oO: "😮 Suprised",
    "(>_<)": "😣 Troubled",
    "(>_<)>": "😣 Troubled",
    "(>w<)": "😖 Troubled",
    "(';')": "👶 Baby",
    "(凸ಠ益ಠ)凸": "🖕😠🖕 Middle fingers",
    "": "",
    "(=_=)": "😩 Tired",
    ":D": "😄 Laughing",
    "x-D": "😆 Giggling",
    xD: "😂 Laughing with teary eyes",
    ":(": "☹️ Dissapointed",
    ":c": "😔 Sad",
    "(._.)": "😔 Sad",
    "(..)": "😔 Sad",
    ":||": "😖 Pouting",
    QQ: "🥺",
    ":'(": "😢 Sad with a tear",
    ":=(": "😭 Crying",
    qq: "😭 Crying",
    ">:(": "😠 Angry",
    ">:[": "😡 Super angry",
    ":-J": '😏 The "whatever Face"',
    ">.<": "😣 Undecided",
    ">_<": "😣 Undecided",
    "[̲̅$̲̅(̲̅1̲̅)̲̅$̲̅]": "💵💸 Money",
    "[̲̅$̲̅(̲̅5)̲̅$̲̅]": "💵💸 Money",
    "[̲̅$̲̅(̲̅1̲̅0)̲̅$̲̅]": "💵💸 Money",
    "[̲̅$̲̅(̲̅1̲̅00)̲̅$̲̅]": "💵💸 Money",
    ":x": "😘 Blowing a heart kiss",
    ":*": "😙 Blowing a kiss",
    ":#": "🤐 Sealed lips",
    "|;-)": "😪 Bored",
    "((+_+))": "🙄 Confused",
    "(+o+)": "😵 Confused",
    "(^_-)": "😉 Wink",
    "(^_^;)": "😅 Shy",
    "(・・;)": "😥 Embarrased",
    "(~_~;)": "😓 Nervous",
    "(-_q)": "🧐 Still speculating",
    "(-_-) zzz": "😴 Sleeping",
    ":E": "😬 Awkward",
    ":o": "😮 Wow",
    "://)": "😳 Embarrassed",
    ":$": "😖 Embarrassed",
    "%)": "😵‍💫 Drunk",
    ":###..": "🤢 Sick",
    "B-)": "😎 Cool",
    ":|": "😐 Straight face",
    ">:)": "😈 Evil",
    "<3": "❤️ Heart",
    "</3": "💔 Broken heart",
    "@};- @}->-- @}-;-'--@>-->--": "🌹 Rose",
    "=^_^=": "😾 Fuming cat",
    "(=^・^=)": "😹 Laughing cat",
    "(^^)/~~~": "👋 Waving",
    "(^.^)y-.o○": "🚬 Smoking",
    "ヽ(´ー｀)┌": "🤷 Shrug",
    "☆彡": "☄️ Shooting star",
    "☆ミ": "🌟 Congratulations star",
    "~:>": "🐔🐓 Chicken",
    "*<|:-)": "🎅 Santa Claus (Father Christmas)",
    "><>": "🐟 Fish",
    "<(((*>": "🐠 Orange fish",
    "o/": "🍻 Cheers",
    "(^^^)": "🦈 Shark",
    "V.v.V": "🦀 Crab",
    "((d[-_-]b))": "🎧 Listening to music",
    "( ^^)": "☕️ Cup of tea",
    "(::[]::)": "🩹 Bandage",
    "^5": "High five",
  };

  const convertToEmojis = (message) => {
    let words = message.split(" ");
    let convertedMessage = "";
    words.forEach((word) => {
      if (emojiMapping[word]) {
        convertedMessage += emojiMapping[word];
      } else {
        convertedMessage = "Sorry try another emoticon!";
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
    <div className="main_container">
      <div className="emoticon_conversion_space">
        <div className="insert_section">
          <input
            type="text"
            ref={inputRef}
            value={message}
            placeholder="Insert emoticon..."
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

        <p className={isNone ? "output_space" : "vanish"}>{convertedMessage}</p>
      </div>
    </div>
  );
};

export default Main;
