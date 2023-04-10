import './App.css';
import Home from './pages/Home';
import Record from './pages/Record';
import AudioRecorder from './components/AudioRecorderCommon';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RecordMUI from './pages/RecordMUI';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home />}/>
          <Route path ="/record" element={<RecordMUI />}/>
          <Route path ="/audio_recorder" element={<AudioRecorder />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
