import { useState } from "react";

import Hero from "./sections/Hero";
import Year2035 from "./sections/Year2035";
import Year2050 from "./sections/Year2050";
import Year2075 from "./sections/Year2075";
import Year2100 from "./sections/Year2100";
import Finale2126 from "./sections/Finale2126";
import FutureChoice from "./sections/FutureChoice";
import TimelineGenerator from "./sections/TimelineGenerator";

import ScrollProgress from "./components/ScrollProgress";
import MusicPlayer from "./components/MusicPlayer";
import NowPlaying from "./components/NowPlaying";
import AudioOrb from "./components/AudioOrb";
import Navbar from "./components/Navbar";


function App() {
  const [track, setTrack] = useState("/music/discovery.mp3");
  const [currentMusic, setCurrentMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
<>
  <Navbar />

  <MusicPlayer
    track={track}
    isPlaying={isPlaying}
  />

  <NowPlaying music={currentMusic} />

  <AudioOrb
    music={currentMusic}
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
  />

  <ScrollProgress />

  <Hero />

  <Year2035
    setTrack={setTrack}
    setCurrentMusic={setCurrentMusic}
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
  />

  <Year2050
    setTrack={setTrack}
    setCurrentMusic={setCurrentMusic}
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
  />

  <Year2075
    setTrack={setTrack}
    setCurrentMusic={setCurrentMusic}
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
  />

  <Year2100
    setTrack={setTrack}
    setCurrentMusic={setCurrentMusic}
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
  />
<Finale2126
  setTrack={setTrack}
  setCurrentMusic={setCurrentMusic}
  isPlaying={isPlaying}
  setIsPlaying={setIsPlaying}
/>
  

  <FutureChoice />

  <TimelineGenerator />
</>
  );
}

export default App;