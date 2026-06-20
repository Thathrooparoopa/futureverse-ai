import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import Discovery from "./sections/Discovery";
import Year2035 from "./sections/Year2035";
import Year2050 from "./sections/Year2050";
import Year2075 from "./sections/Year2075";
import Year2100 from "./sections/Year2100";
import Year2126 from "./sections/Year2126";

import FutureTerminal from "./sections/FutureTerminal";
import Manifesto from "./sections/Manifesto";
import Creators from "./sections/Creators";
import ProjectInfo from "./sections/ProjectInfo";
import FinalBrand from "./sections/FinalBrand";

function App() {
  return (
    <>
      <Hero />
      <Problem />
      <Discovery />

      <Year2035 />
      <Year2050 />
      <Year2075 />
      <Year2100 />
      <Year2126 />

      <FutureTerminal />
      <Manifesto />

      <Creators />
      <ProjectInfo />
      <FinalBrand />
    </>
  );
}

export default App;