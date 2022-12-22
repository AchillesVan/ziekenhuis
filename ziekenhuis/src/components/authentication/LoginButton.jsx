import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  
  const handleLogin = useCallback(

    async () => {
      loginWithRedirect();
    },
    [loginWithRedirect]
  );

  return (
    <Flex alignItems="center">
      <Button
        colorScheme="brand"
        variant="solid"
        onClick={handleLogin}><Text>Log in</Text></Button>
    </Flex>
    
  )
};

export default LoginButton;