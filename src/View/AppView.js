// import ExampleComponent from "../Presenter/ExamplePresenter";
// import LoginScreenView from "./LoginScreenView";
import NavigationBarView from "./NavigationBarView";
// import RegistrationPageView from "./RegistrationPageView";
import LandingPageView from "./LandingPageView";

function AppView() {
  return (
    <div>
      <NavigationBarView />
      <LandingPageView />
    </div>
  );
}

export default AppView;
