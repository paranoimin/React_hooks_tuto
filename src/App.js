import React from "react";
import "./styles.css";
import ClassCounter from "./components/ClassCounter";
import HooksCounter from "./components/HookCounter";
import HooksCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";

export default function App() {
  return (
    <div className="App">
      {/*<ClassCounter />*/}
      {/*<HooksCounter/>*/}
      {/*<HooksCounterTwo/>*/}
      {/*<HookCounterThree/>*/}
      {/*<HookCounterFour/>*/}
      {/*<ClassMouse />*/}
      {/*<HookMouse/>*/}
      <MouseContainer/>
    </div>
  );
}
