import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegistrationPageView from "./RegistrationPage/RegistrationPageView";
import Home from "./LandingPage/LandingPageView";
import Club from "./ClubPage/ClubPageView";

function AppView() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/club" element={<Club/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default AppView;
