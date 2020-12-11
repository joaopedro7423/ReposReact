import { Route } from "react-router-dom";
import Routes from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
