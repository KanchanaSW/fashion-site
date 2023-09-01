import Navbar from "@/scenes/navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"

import Benefits from "@/scenes/benefits"
import OurClasses from "@/scenes/ourClasses"
import ContactUs from "@/scenes/contactUs"
import Footer from "@/scenes/footer"
import Catalogue from "@/scenes/catalogue"

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Catalogue)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Catalogue);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-white">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Catalogue setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
