/*eslint-disable */

import { Header, AboutUs, Footer, ContactUs, Projects, Testimonials, WhyUs } from "./components"
import Loader from "./components/loader/Loader"
import { useState, useEffect } from "react"

const App = () => {

  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000); // Set the loading state to false after 2 seconds (adjust as needed)
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ): (
        <div>
          <Header />
          <WhyUs />
          <Projects />
          <AboutUs />
          <Testimonials />
          <ContactUs />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App