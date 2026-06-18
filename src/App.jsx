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

function App() {
  const [track, setTrack] = useState("/music/discovery.mp3");
  const [currentMusic, setCurrentMusic] = useState(null);

  return (
    <>
      <MusicPlayer track={track} />

      <NowPlaying music={currentMusic} />

      <AudioOrb music={currentMusic} />

      <ScrollProgress />

      <Hero />

      <Year2035
        setTrack={setTrack}
        setCurrentMusic={setCurrentMusic}
      />

      <Year2050
        setTrack={setTrack}
        setCurrentMusic={setCurrentMusic}
      />

      <Year2075
        setTrack={setTrack}
        setCurrentMusic={setCurrentMusic}
      />

      <Year2100
        setTrack={setTrack}
        setCurrentMusic={setCurrentMusic}
      />

      <Finale2126 />

      <FutureChoice />

      <TimelineGenerator />
    </>
  );
}

export default App;