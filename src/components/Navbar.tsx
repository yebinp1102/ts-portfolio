import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import { SelectedPage } from "../types"
import Link from "./Link"
import { Bars3Icon } from "@heroicons/react/20/solid"
import { XMarkIcon } from "@heroicons/react/24/outline"

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage,
  setSelectedPagae : (value: SelectedPage) => void
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPagae}: Props) => {
  const flexBetween = `flex items-center justify-between`
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className={`${isTopOfPage ? "" : "bg-red"} w-full z-40 fixed top-0 py-6 transition duration-500`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>

          {/* logo */}
          <div className="text-2xl w-full font-playfair tracking-widest font-bold">
            YEBIN
          </div>

          {/* menu */}
          {
            isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full text-lg`}>
                <Link page={"Intro"} selectedPage={selectedPage} setSelectedPagae={setSelectedPagae} />
                <Link page={"Skills"} selectedPage={selectedPage} setSelectedPagae={setSelectedPagae} />
                <Link page={"Projects"} selectedPage={selectedPage} setSelectedPagae={setSelectedPagae} />
                <Link page={"AboutMe"} selectedPage={selectedPage} setSelectedPagae={setSelectedPagae} />
                <Link page={"Contact"} selectedPage={selectedPage} setSelectedPagae={setSelectedPagae} />
              </div>
            ) : (
              <button 
                onClick={() => setIsToggled(!isToggled)}
                className="bg-red rounded-full p-2"
              >
                <Bars3Icon
                  className="h-6 w-6"
                />
              </button>
            )
          }

          {
            !isAboveMediumScreens && isToggled && (
              <div className="w-[300px] h-full z-40 bg-primary-300 fixed right-0 bottom-0">
                <button
                  className="w-full flex justify-end p-12"
                  onClick={() => setIsToggled(!isToggled)}
                >
                  <XMarkIcon className="w-6 h-6 text-black" />
                </button>

                <div className={`flex flex-col w-full text-2xl gap-10 ml-[20%] `}>
                  <Link page={"Intro"} selectedPage={selectedPage} setSelectedPagae={setSelectedPagae} />
                  <Link page={"Skills"} selectedPage={selectedPage} setSelectedPagae={setSelectedPagae} />
                  <Link page={"Projects"} selectedPage={selectedPage} setSelectedPagae={setSelectedPagae} />
                  <Link page={"AboutMe"} selectedPage={selectedPage} setSelectedPagae={setSelectedPagae} />
                  <Link page={"Contact"} selectedPage={selectedPage} setSelectedPagae={setSelectedPagae} />
                </div>
              </div>
            )
          }

        </div>
      </div>
    </nav>
  )
}

export default Navbar