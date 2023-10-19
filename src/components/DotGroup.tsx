import { SelectedPage } from "../types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  selectedPage: SelectedPage,
  setSelectedPagae : (value: SelectedPage) => void
}

const DotGroup = ({selectedPage, setSelectedPagae}: Props) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;


  return (
    <div className="fixed flex flex-col gap-6 top-[60%] right-7">
      <AnchorLink
        href="#intro"
        className={`${selectedPage === "intro" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
        onClick={() => setSelectedPagae(SelectedPage.Intro)}
      />
      <AnchorLink
        href="#skills"
        className={`${selectedPage === "skills" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
        onClick={() => setSelectedPagae(SelectedPage.Skills)}
      />
      <AnchorLink
        href="#projects"
        className={`${selectedPage === "projects" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
        onClick={() => setSelectedPagae(SelectedPage.Projects)}
      />
      <AnchorLink
        href="#aboutme"
        className={`${selectedPage === "aboutme" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
        onClick={() => setSelectedPagae(SelectedPage.AboutMe)}
      />
      <AnchorLink
        href="#contact"
        className={`${selectedPage === "contact" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
        onClick={() => setSelectedPagae(SelectedPage.Contact)}
      />
    </div>
  )
}

export default DotGroup