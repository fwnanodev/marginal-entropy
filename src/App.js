import { Routes, Route } from "react-router-dom";
import SignUpConfirmation from "./components/SignUpConfirmation";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="sign-up-confirmation" element={<SignUpConfirmation />} />
      </Route>
    </Routes>
  );
};

function App() {
  return <NavRoutes />;
}

export default App;
