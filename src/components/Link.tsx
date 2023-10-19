import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../types"

type Props = {
  page: string;
  selectedPage: SelectedPage
  setSelectedPagae: (value: SelectedPage) => void
}

const Link = ({page, selectedPage, setSelectedPagae}: Props) => {
  const lowerCase = page.toLowerCase() as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCase}`}
      className={`${lowerCase === selectedPage ? 'text-yellow' : ''} hover:text-yellow transition duration-500`}
      onClick={() => setSelectedPagae(lowerCase)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link