import React, { useState, useEffect } from "react";

type ButtonProps = {
  children: string;
};

const GlowButtons: React.FC<ButtonProps> = ({ children }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [xp, setXp] = useState(0);
  const [yp, setYp] = useState(0);

  const syncPointer = (e: any) => {
    const pointerX = e.clientX;
    const pointerY = e.clientY;
    const newX = pointerX.toFixed(2);
    const newY = pointerY.toFixed(2);
    const newXP = (pointerX / window.innerWidth).toFixed(2);
    const newYP = (pointerY / window.innerHeight).toFixed(2);
    setX(parseFloat(newX));
    setY(parseFloat(newY));
    setXp(parseFloat(newXP));
    setYp(parseFloat(newYP));
  };

  const syncPointerRef = React.useRef(syncPointer);

  useEffect(() => {
    const currentSyncPointer = syncPointerRef.current;

    document.body.addEventListener("pointermove", currentSyncPointer);

    return () => {
      document.body.removeEventListener("pointermove", currentSyncPointer);
    };
  }, []);

  console.log("e");

  const buttonStyle: React.CSSProperties = {
    "--x": x - 10,
    "--y": y - 10,
    "--xp": xp - 10,
    "--yp": yp - 10,
    "--hue": `calc(0 + (var(--xp) * 500))`,
    "--bg": `hsl(0 0% 10%)`,
    "--glow": `radial-gradient(
          50% 50% at center,
          hsl(calc(0 + (var(--xp) * 300)) 80% 85%),
          hsl(calc(0 + (var(--xp) * 300)) 80% 70%),
          transparent
        )
        calc((var(--x) * 1px) - (var(--size) * 0.5))
        calc((var(--y) * 1px) - (var(--size) * 0.5)) / var(--size) var(--size) no-repeat fixed`,
    "--size": "100px",
  };

  return (
    <button style={buttonStyle as React.CSSProperties} className="glow_btn">
      <span>{children}</span>
    </button>
  );
};

export default GlowButtons;
