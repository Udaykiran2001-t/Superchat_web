import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";

const MicButton = ({ darkmode }) => {
  const [isListening, setIsListening] = useState(false);

  const handleMicInput = (event) => {
    event.preventDefault();
    if (!isListening) {
      console.log("Starting voice input...");
      startListening();
    } else {
      console.log("Stopping voice input...");
      stopListening();
    }
    setIsListening(!isListening);
  };

  const startListening = () => {
    // Implement speech recognition logic here
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Transcript:", transcript);
      alert(`You said: ${transcript}`);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended.");
    };
  };

  const stopListening = () => {
    // Stop logic if needed
    console.log("Stopping microphone...");
  };

  return (
    <button
      className={`absolute right-12 p-3 rounded-full ${
        darkmode ? "bg-black text-white" : "bg-gray-100 text-gray-700"
      }`}
      onClick={(event) => handleMicInput(event)}
    >
      <FaMicrophone />
    </button>
  );
};

export default Functionofmic;
