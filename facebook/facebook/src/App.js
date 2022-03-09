import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Route path="/" component={Body} />
        <Route path="/dashboard" component={Dashboard} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
