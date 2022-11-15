import Biographies from "../components/Biographies";
import ClassInfo from "../components/ClassInfo";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import SignUp from "../components/SignUp";

const LandingPage = () => {
  return (
    <>
      <HeroImage />
      <ClassInfo />
      <Biographies />
      <SignUp />
      <Footer />
    </>
  );
};

export default LandingPage;
