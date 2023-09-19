
// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import "./HomePage.css"
function HomePage() {

  return (
    <div className="HomePage--content">
      <NavBar />
      <div className="HomePage--outlet">
     <Outlet/>
     </div>
    </div>
  );
}

export default HomePage;
