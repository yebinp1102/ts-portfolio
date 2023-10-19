import {useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { SelectedPage } from "./types";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";
import LineGradient from "./components/LineGradient";
import Footer from "./components/Footer";


function App() {
  // menu의 각 item을 누르면 해당 컴포넌트로 자동 스크롤하기 위해 사용되는 value
  const [selectedPage, setSelectedPagae] = useState<SelectedPage>(SelectedPage.Intro);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPagae(SelectedPage.Intro)
      }else setIsTopOfPage(false);
    } 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)

  },[])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPagae={setSelectedPagae}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPagae={setSelectedPagae}
          />
        )}
        <Intro 
          setSelectedPagae={setSelectedPagae}
        />
      </div>
      <LineGradient width="w-full" />

      <div className="w-5/6 mx-auto md:h-full">
        <Skills />
      </div>
      <LineGradient width="w-full" />

      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient width="w-full" />

      <div className="w-5/6 mx-auto md:h-full">
        <AboutMe />
      </div>
      <LineGradient width="w-full" />


      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <LineGradient width="w-full" />
      
      <Footer />
    </div>
  )
}

export default App
