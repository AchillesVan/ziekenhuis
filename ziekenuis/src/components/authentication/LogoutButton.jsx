import { useAuth0 } from '@auth0/auth0-react';
import { Button, Text } from '@chakra-ui/react';

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <Button
      colorScheme="brand"
      variant="solid"
      onClick={() => logout({
        returnTo: window.location.origin,
      })}
    >
      <Text>Log uit</Text>
    </Button>
  );
}

export default LogoutButton;