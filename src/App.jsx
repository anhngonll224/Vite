import { Link, Outlet, Route, Router } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import AppRouter from "./router/AppRouter";



function App() {
  return (
   <div className="layout-center">
      <div className="layout-max-width">
        {loading ? (
          <div className="loading-center" style={{ height: "100vh" }}>
            <Spin/>
          </div>
        ) : (
          <AppRouter />
        )}
      </div>
      {!!modalLoading && <Loading />}
    </div>
  );
}

export default App;
