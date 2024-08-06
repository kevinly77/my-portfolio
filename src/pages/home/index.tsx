import stylex from "@stylexjs/stylex";
import React, { useEffect, useRef, useState } from "react";
import Circles from "../../assets/lots-of-circles.svg";
import CutBox from "../../assets/cut-box.svg";
const styles = stylex.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingInline: "2rem",
    gap: "2rem",
  },
  flag: {
    display: "flex",
    border: "4px solid #B00580",
    padding: "1rem",
    boxShadow: "0px 4px 25px #B00580",
    //padding: "5rem",
  },

  sidewaysName: {
    color: "#B00580",
    fontFamily: "Zen Dots",
    whiteSpace: "nowrap",
    writingMode: "vertical-lr",
    padding: "0",
    margin: "0",
    fontSize: "5em",
    //textShadow: "0px 4px 25px #B00580",
  },

  sidewaysJapanese: {
    WebkitTextStrokeWidth: "2px",
    WebkitTextStrokeColor: "#B00580",
    //textShadow: "0px 4px 25px #B00580",
    fontFamily: "Zen Dots",
    whiteSpace: "nowrap",
    writingMode: "vertical-lr",
    padding: "0",
    margin: "0",
    fontSize: "5em",
  },

  leftSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "fit-content",
    gap: "2rem",
  },

  rightSide: {
    color: "white",
  },

  description: {
    color: "white",
    fontFamily: "Rajdhani, sans-serif",
    fontSize: "2em",
    margin: "0",
    padding: "0",
  },

  descriptionWrapper: {
    padding: "1rem",
    border: "1px solid #B00580",
    backgroundImage: "url(../../assets/cut-box.svg)", // SVG as background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    boxSizing: "border-box",
  },
});
("../../assets/cut-box.svg");
export default function HomePage() {
  const rotatedH1Ref = useRef<HTMLHeadingElement | null>(null);
  const [containerSize, setContainerSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateContainerSize = () => {
      if (rotatedH1Ref.current) {
        const boundingBox = rotatedH1Ref.current.getBoundingClientRect();
        setContainerSize({
          width: boundingBox.width,
          height: boundingBox.height,
        });
      }
    };
    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);
  }, []);
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.leftSide)}>
        <div {...stylex.props(styles.flag)}>
          <h1 {...stylex.props(styles.sidewaysName)}>KEVIN LY</h1>
          <h1 {...stylex.props(styles.sidewaysJapanese)}>はじめまして</h1>
        </div>

        <img alt="circles" src={Circles} />
      </div>

      <div {...stylex.props(styles.rightSide)}>
        <div {...stylex.props(styles.descriptionWrapper)}>
          <p {...stylex.props(styles.description)}>
            Hey I’m Kevin and I like to code. I have a lot of experience doing
            it. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}
