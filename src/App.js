import "./App.css";
import Body from "./Components/Body";
import appstore from "./Utils/appstore";
import {Provider} from "react-redux";

function App() {
  return(
  <Provider store={appstore}>
    <Body/>
  </Provider>
  );
}

export default App;
