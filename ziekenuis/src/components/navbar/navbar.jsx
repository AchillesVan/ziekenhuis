import "./NavBar.css";
import logo from "../../logo.svg"
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/"><img src={logo} alt="ACHILLES ZIEKENHUIS" className="site-logo"></img></Link>
        <ul>
          <li><CustomLink to="/">Home</CustomLink></li>   
          <li><CustomLink to="/dokters">Voor patiënten</CustomLink></li>
          <li><CustomLink to="/vacatures">Vacatures</CustomLink></li>
          <li><CustomLink to="/about">Over ons</CustomLink></li>   
        </ul>
      </nav>
    </>
  );
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>  
  );
}

export default NavBar;