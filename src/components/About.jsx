import ParaContainer from "./aboutSection/ParaContainer";
import fetchText from "./utils/fetchText";
import teamArray from "./aboutSection/teamMemberArray";
// Temp data until I can get the fetch working asyncronously
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
    <div className="absolute flex flex-col w-screen gap-10 p-10 mt-16 overflow-auto text-sm text-gray-800 md:p-8 lg:p-16">

      {/* Text containers, takes text values as props */}
      <ParaContainer text={about.welcome} />
      <ParaContainer text={about.mission} />
      <ParaContainer text={about.vision} />

      {/* DevTeam member section */}
      <div className="flex flex-wrap items-center justify-center w-3/4 gap-10 m-auto">

        {teamArray.map((staff) => {
          return <ProfileCard artist={staff} />
        })}
      </div>
      
    </div>
  )
}

export default About;