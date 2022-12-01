// import ExampleComponent from "../Presenter/ExamplePresenter";
// import LoginScreenView from "./LoginScreenView";
import NavigationBarView from "./NavigationBarView"; // Change to presenter!
// import RegistrationPageView from "./RegistrationPageView";
import LandingPagePresenter from "../Presenter/LandingPagePresenter";

function AppView() {
  return (
    <div>
      <NavigationBarView />
      <LandingPagePresenter />
    </div>
  );
}

export default AppView;
