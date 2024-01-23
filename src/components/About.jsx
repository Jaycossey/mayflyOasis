import ParaContainer from "./aboutSection/ParaContainer";
import fetchText from "./utils/fetchText";
import Team from "./aboutSection/Team";
import teamArray from "./aboutSection/teamMemberArray";

// About MayflyOasis
const About = () => {
  const welcome = fetchText('src/assets/textFiles/aboutWelcome.txt');
  const mission = fetchText('src/assets/textFiles/mission.txt');
  const vision = fetchText('src/assets/textFiles/vision.txt');
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
                  p-10
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
      <ParaContainer text={welcome} />
      <ParaContainer text={mission} />
      <ParaContainer text={vision} />

      <div className="flex flex-wrap items-center justify-center gap-10">
        {teamArray.map((staff) => {
          return <Team name={staff.name} job={staff.job} quote={staff.quote} image={staff.image} />
        })}
      </div>
      
    </div>
  )
}

export default About;