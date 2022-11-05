import "./navbar.css";
import logo from "../../logo.svg"
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-logo"><img src={logo} height="75rem" alt="ACHILLES ZIEKENHUIS"></img></Link>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/dokters">Voor patiënten</CustomLink>
          <CustomLink to="/vacatures">Vacatures</CustomLink>
          <CustomLink to="/about">Over ons</CustomLink>   
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

export default Navbar;