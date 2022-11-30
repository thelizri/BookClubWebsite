import ExampleComponent from "../Presenter/ExamplePresenter";
import LoginScreenView from "./LoginScreenView";
import NavigationBarView from "./NavigationBarView";


function AppView() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBarView/>
      </header>
    </div>
  );
}

export default AppView;
