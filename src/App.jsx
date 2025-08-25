import "./App.css";
import Navbar from "./Navbar/navbar";
import CardSection from "./Section/CardSection";
import DemoSection from "./Section/DemoSection";
import EmailSectionH from "./Section/EmailSectionH";
import EndSection from "./Section/EndSection";
import HeroSection from "./Section/HeroSection";
import ImageSliderF from "./Section/ImageSliderF";
import JourneySectionG from "./Section/JourneySectionG";
import ResponsiveNavbar from "./Section/ResponsiveNavbar";
import SectionB from "./Section/SectionB";
import SectionC from "./Section/SectionC";
import TrendingSectionnE from "./Section/TrendingSectionE";
import VideoHero from "./Section/VideoHero";
import VideoSectionE from "./Section/VideoSectionE";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <ResponsiveNavbar />
      <HeroSection />
      <SectionB />
      <CardSection />
      <SectionC />
      {/* <SectionD /> */}
      {/* <VideoSectionE /> */}
      <TrendingSectionnE />
      <ImageSliderF />

      <JourneySectionG />
      {/* <EmailSectionH /> */}
      {/* <QuestionSectionI /> */}
      <VideoHero />
      <DemoSection />
      <EndSection />
    </>
  );
}

export default App;
