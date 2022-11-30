import ExampleComponent from "../Presenter/ExamplePresenter";
import LoginScreenView from "./LoginScreenView";


function AppView() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginScreenView/>
      </header>
    </div>
  );
}

export default AppView;
