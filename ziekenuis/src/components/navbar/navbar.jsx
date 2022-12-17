import "./NavBar.css";
import logo from "../../logo.svg"
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Text, Flex, Image } from "@chakra-ui/react";
import AuthenticationButton from "../authentication/AuthenticationButton";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <Flex justify="space-around" alignItems="center" gap="5" width="100%">
          <Link to="/"><Image src={logo} alt="ACHILLES ZIEKENHUIS" width="8rem"></Image></Link>     
          <CustomLink to="/"><Text as="b">Home</Text></CustomLink>  
          <CustomLink to="/dokters"><Text as="b">Voor patiënten</Text></CustomLink>
          <CustomLink to="/vacatures"><Text as="b">Vacatures</Text></CustomLink>
          <CustomLink to="/about"><Text as="b">Over ons</Text></CustomLink>  
          <AuthenticationButton></AuthenticationButton>
        </Flex>
      </nav>
    </>
  );
}

const CustomLink = ({to, children, ...props}) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>  
  );
}

export default NavBar;