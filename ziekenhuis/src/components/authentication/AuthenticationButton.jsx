import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Avatar, Box, Flex, } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AuthenticationButton() {
  const { isAuthenticated, user } = useAuth0();

  if(isAuthenticated) {
    const { name, picture, givenName } = user;

    return (
      <>
        <Flex alignItems="center" gap="2" minWidth="max-content">        
          <Link to="/profile">
            <Flex alignItems="center">
              <Box p="2">
                <Avatar src={picture} alt={givenName} borderRadius="full" />
              </Box>
              {name}
            </Flex>
          </Link>
          <Box p="2">
            <LogoutButton />
          </Box> 
        </Flex>
      </>
    );
  }

  return <LoginButton />;
}