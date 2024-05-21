import React, { useEffect } from "react";
import "./RotatingText.css"; // Import the CSS file for styling

const RotatingText = () => {
  useEffect(() => {
    let words = document.querySelectorAll(".word");
    words.forEach((word) => {
      let letters = word.textContent.split("");
      word.textContent = "";
      letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let rotateText = () => {
      let currentWord = words[currentWordIndex];
      let nextWord =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1];
      // rotate out letters of current word
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i * 80);
      });
      // reveal and rotate in letters of next word
      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });
      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    rotateText();
    const interval = setInterval(rotateText, 4000);

    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []);

  return (
    <div className="rotating-text">
      <p>
        VaultX offers exceptional services{" "}
        <span className="word alizarin">Share</span>
        <span className="word wisteria">Upload</span>
        <span className="word peter-river">Fetch</span>
      </p>
    </div>
  );
};

export default RotatingText;
