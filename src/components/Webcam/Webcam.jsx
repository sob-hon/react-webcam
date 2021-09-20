import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import "./Webcam.css";

const videoConstraints = {
  width: 440,
  height: 440,
  facingMode: "user",
};

export const WebcamCapture = () => {
  const [image, setImage] = useState("");
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  });

  return (
    <>
      {image == "" ? (
        <Webcam
          audio={false}
          height={440}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={440}
          videoConstraints={videoConstraints}
        />
      ) : (
        <img src={image} />
      )}
      <div>
        {image != "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
            className="webcam-btn"
          >
            Retake Image
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="webcam-btn"
          >
          </button>
        )}
      </div>
    </>
  );
};
