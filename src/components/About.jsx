import ParaContainer from "./aboutSection/ParaContainer";

// About MayflyOasis
const About = () => {
  return (
    // Container for about section -- updated to fixed position to allow for navbar separation
    <div className="text-gray-800 
                  md:p-8 
                  lg:p-16 
                  flex 
                  flex-col
                  w-screen 
                  mt-16
                  absolute
                  p-20
                  gap-10 
                  overflow-auto
                  bg-white">

      {/* About us title */}
      <p className="mb-4 
                  text-4xl 
                  font-semibold 
                  underline 
                  underline-offset-4">
              Hello Mayflies!
      </p>

      {/* Text containers, takes text values as props */}
      <ParaContainer text={"Welcome"} />
      <ParaContainer text={"About"} />
      <ParaContainer text={"Our Mission"} />
      
    </div>
  )
}

export default About;