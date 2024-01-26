import ParaContainer from "./aboutSection/ParaContainer";
import fetchText from "./utils/fetchText";
import Team from "./aboutSection/Team";
import teamArray from "./aboutSection/teamMemberArray";
// Temp data until I can get the fetch working asyncrobously
import aboutText from "./aboutSection/aboutText";
import ProfileCard from "./ProfileCard";

// About MayflyOasis
const About = () => {
  const about = aboutText;
  // async await || promises, might be worth checking them out asap, be a good challenge, will read up tonight and go from there.
  const welcome = fetchText('src/assets/textFiles/aboutWelcome.txt');
  const mission = fetchText('src/assets/textFiles/mission.txt');
  const vision = fetchText('src/assets/textFiles/vision.txt');
  // console.log(welcome, mission, vision);
  return (
    // Container for about section -- updated to fixed position to allow for navbar separation
    <div className="text-gray-800 
                  text-sm
                  md:p-8 
                  lg:p-16 
                  flex 
                  flex-col
                  w-screen 
                  mt-16
                  absolute
                  p-10
                  gap-10 
                  overflow-auto">

      {/* Text containers, takes text values as props */}
      <ParaContainer text={about.welcome} />
      <ParaContainer text={about.mission} />
      <ParaContainer text={about.vision} />

      {/* DevTeam member section */}
      <div className="flex 
                      flex-wrap 
                      items-center 
                      justify-center 
                      gap-10
                      w-3/4
                      m-auto">

        {teamArray.map((staff) => {
          return <ProfileCard artist={staff} />
        })}
      </div>
      
    </div>
  )
}

export default About;