import React, { useState } from "react";
import Header from "./components/Header/index";
import ColorInput from "./components/ColorInput/index";
import { inputTypes } from "./util/enum";
import "./App.css";

const App = () => {
  const setTheme = (H, inputType) => {
    // Convert hex to RGB first
    let r = 0,
      g = 0,
      b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    window.document.documentElement.style.setProperty(
      `--${inputType}-color-h`,
      h
    );
    window.document.documentElement.style.setProperty(
      `--${inputType}-color-s`,
      s + "%"
    );
    window.document.documentElement.style.setProperty(
      `--${inputType}-color-l`,
      l + "%"
    );
  };

  return (
    <div>
      <Header label={"Color Contrast"} />
      <h2>Pure CSS Color Theming 🎨</h2>
      <div className="box-container">
        <div className="box-container">
          <div className="box primary">
            <p>Primary (Base)</p>
          </div>
          <div className="box primary-light">
            <p>Primary Light</p>
            <p />
          </div>
          <div className="box primary-dark">
            <p>Primary Dark</p>
          </div>
          <div className="box primary-complement">
            <p>Primary Complement</p>
          </div>
          <div className="box primary-triad-1">
            <p>Primary Triad 1</p>
          </div>
          <div className="box primary-triad-2">
            <p>Primary Triad 2</p>
          </div>
        </div>
        <div className="box-container">
          <div className="box secondary">Secondary (Base)</div>
          <div className="box secondary-light">Secondary Light</div>
          <div className="box secondary-dark">Secondary Dark</div>
          <div className="box secondary-complement">Secondary Complement</div>
          <div className="box secondary-triad-1">
            <p>Secondary Triad 1</p>
          </div>
          <div className="box secondary-triad-2">
            <p>Secondary Triad 2</p>
          </div>
        </div>
      </div>
      <fieldset className="controls">
        <legend>Select Base Values:</legend>

        <ColorInput
          onChange={(event) => setTheme(event.target.value, inputTypes[0])}
          label={"Primary"}
        />
        <ColorInput
          onChange={(event) => setTheme(event.target.value, inputTypes[1])}
          label={"Secondary"}
        />
      </fieldset>
    </div>
  );
};

export default App;
