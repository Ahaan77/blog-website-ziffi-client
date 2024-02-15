import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { init } from './Backgroud/Init';
import Topbar from './Components/Topbar';

function App() {

  useEffect(() => {
    return init();
  }, []);

  return (
    <div>
      <Topbar />
      <div className='w-full h-screen'>
        <canvas
          style={{
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%"
          }}
          id="canvas"
        ></canvas>
      </div>
    </div>
  );
}

export default App;
