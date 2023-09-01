import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"


type Props = {
    children:React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
    <AnchorLink 
        className="rounded-md bg-black text-white px-10 py-2 hover:bg-gray-200 hover:text-black "
        onClick={() => setSelectedPage(SelectedPage.Lifestyle)}
        href={`#${SelectedPage.Lifestyle}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton