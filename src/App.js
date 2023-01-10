import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Login /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

export default AppWrapper;
