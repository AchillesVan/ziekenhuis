import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import { Heading, Text } from '@chakra-ui/react';

export default function AuthLanding() {
  const { error, isAuthenticated, isLoading } = useAuth0();

  if (error) {(
    <>
      <Heading>Login failed</Heading>
      <Text>There was an error logging in. Please try again.</Text>
      <LoginButton />
    </> 
  )}

  if (!isLoading && isAuthenticated) {
    return <Navigate to="/" />;
  }

  if(!isLoading && !isAuthenticated) {
    return (
      <>
        <Heading>Login required</Heading>
        <Text>You need to log in to access this page.</Text>
      </>
    )
  }

  return (
    <>
      <Heading>Signing in</Heading>
      <Text>Please wait while we sign you in!</Text>
    </>
  )
};