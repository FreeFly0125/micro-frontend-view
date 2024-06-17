import "./App.css";
import { DragElement } from "./Draggable";
import { ResizeElement } from "./Resizable";

function App() {
  return (
    <>
      <div>
        <DragElement />
      </div>
      <div style={{position: 'relative'}}>
        <ResizeElement />
      </div>
    </>
  );
}

export default App;
