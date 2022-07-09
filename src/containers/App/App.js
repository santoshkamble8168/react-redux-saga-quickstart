/*libraries*/
import { BrowserRouter, Routes, Route } from "react-router-dom"
/*custom config*/

/*routes*/
import ROUTES from "../../utils/routes";
import Home from "../Home";
import About from "../About";
import NotFound from "../NotFound";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path={ROUTES.HOME} element={ <Home/> } />
          <Route exact path={ROUTES.ABOUT} element={ <About/> } />
          <Route path={'*'} element={ <NotFound/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;