import ExampleComponent from "../Presenter/ExamplePresenter";
import LoginScreenView from "./LoginScreenView";
import NavigationBarView from "./NavigationBarView";
import RegistrationPageView from "./RegistrationPageView";


function AppView() {
  return (
    <div className="App">
      <header className="App-header">
        <RegistrationPageView/>
      </header>
    </div>
  );
}

export default AppView;
