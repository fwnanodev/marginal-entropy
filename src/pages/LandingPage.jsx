import Biographies from "../components/Biographies";
import ClassInfo from "../components/ClassInfo";
import { DonateButtonUrl } from "../components/DonageButtonUrl";
import MissionHero from "../components/MissionHero";
import SignUp from "../components/SignUp";

const LandingPage = () => {
  return (
    <>
      <MissionHero />
      <ClassInfo />
      <Biographies />
      <DonateButtonUrl />
      <SignUp />
    </>
  );
};

export default LandingPage;
