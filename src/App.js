import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { Provider } from "react-redux";
import store from "./redux/store";
import Message from "./components/Message";

//TODO
//Delete WEbPhotos and photography FOlder
function AppWrapper() {
  return (
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        {/* <Route path={`${NavPages.contact}`} element={<ContactMe />}></Route>
        <Route path={`${NavPages.gallery}`} element={<Gallery />}></Route> */}
      </Routes>
      <Message />
    </div>
  );
}

export default AppWrapper;
