import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (e) => {
    console.log("onchanged");
    setText(e.target.value);
  };

  const textUpChange = (e) => {
    e.preventDefault();
    console.log("Text Upper Cased" + text);
    const newText = text.toUpperCase();
    setText(newText);
  };

  const textCopy = (e) => {
    e.preventDefault();

  }

  const textLoChange = (e) => {
    e.preventDefault();
    //console.log("Text Upper Cased" + text)
    const newText = text.toLowerCase();
    setText(newText);
  };

  const textSenChange = (e) => {
    e.preventDefault();
    let newText = text.toLowerCase();

    // let i;
    // for (i = 0; i < text.length; i++) {
    //   if (newText[i] !== " ") {
    //     newText = newText.replace(newText[i], newText[i].toUpperCase());
    //     break;
    //   }
    // }

    // for (let l = i; l < text.length; l++) {
    //   if (newText[l] === ".") {
    //     console.log(l);
    //     for (let k = l+1; k < text.length; k++) {
    //       if (newText[k] !== " ") {
    //         console.log(k);
    //         newText = newText.replace(newText[k], newText[k].toUpperCase());
    //         l = ++k;
    //         break;
    //       }
    //     }
    //   }
    // }

    console.log(newText);

    let flag = true;
    for (let i = 0; i < text.length; i++) {
      console.log(i, flag);
      if (flag && newText[i] >= "a" && newText[i] <= "z") {
        console.log(newText[i]);
        newText = newText.replace(newText[i], newText[i].toUpperCase());
        flag = false;
      }

      if (newText[i] === ".") {
        flag = true;
      }
    }

    console.log("Text Upper Cased" + text);
    console.log(newText[0]);

    setText(newText);
  };

  const calcTypeOfLetters = (str) => {
    const res = { Vowels: 0, Consonants: 0, space: 0 };
    const VOWELS = ["a", "e", "i", "o", "u"];
    const space = " ";

    for (let char of str) {
      if (VOWELS.includes(char.toLowerCase())) {
        res["Vowels"] = res["Vowels"] + 1;
      } else if (space.includes(char.toLowerCase())) {
        res[space] = res[space] + 1;
      } else {
        res["Consonants"] = res["Consonants"] + 1;
      }
    }

    return res;
  };

  const [text, setText] = useState("Enter the text here");
  const count = calcTypeOfLetters(text);
  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <h1>{props.text}</h1>
            <textarea
              className="form-control"
              id="mybox"
              value={text}
              onChange={handleOnChange}
              cols="30"
              rows="10"
            ></textarea>
            <button
              className="btn btn-primary mt-3 mx-2"
              onClick={textSenChange}
            >
              Sentencecase
            </button>
            <button className="btn btn-primary mt-3" onClick={textUpChange}>
              Uppercase
            </button>
            <button
              className="btn btn-primary mt-3 mx-2"
              onClick={textLoChange}
            >
              Lowercase
            </button>

            <button className="btn btn-primary mt-3 mx-2" onClick={textCopy}>
              Copy Text
            </button>
          </div>
        </form>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters,{" "}
          {count.Vowels} Vowels, {count.Consonants - count.space} Consonants
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
