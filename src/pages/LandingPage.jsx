import Biographies from "../components/Biographies";
import ClassInfo from "../components/ClassInfo";
import MissionHero from "../components/MissionHero";
import SignUp from "../components/SignUp";

const LandingPage = () => {
  return (
    <>
      <MissionHero />
      <ClassInfo />
      <Biographies />
      <SignUp />
    </>
  );
};

export default LandingPage;
