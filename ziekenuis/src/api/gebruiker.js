import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/gebruikers`;

const useGebruiker = () => {
  const  { getAccessTokenSilently } = useAuth0();

  const getByAuth0 = useCallback(async (Auth0id) => {
    const token = await getAccessTokenSilently();

    const res = await axios.get(baseUrl + '/' + Auth0id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }, [getAccessTokenSilently]);

  const createUser = useCallback(async (user) => {
    const token = await getAccessTokenSilently();

    const res = await axios.post(baseUrl + '/' + user.auth0id, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }, [getAccessTokenSilently]);

  const updateUser = useCallback(async (user) => {
    const token = await getAccessTokenSilently();

    const auth0id = user.auth0id.split('|')[1];

    const res = await axios.put(baseUrl + '/' + auth0id, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }, [getAccessTokenSilently]);

  return {
    getByAuth0,
    createUser,
    updateUser,
  };
}

export default useGebruiker;