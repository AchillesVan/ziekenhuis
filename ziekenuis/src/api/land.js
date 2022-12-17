import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/landen`;

const useLand = () => {
  const  { getAccessTokenSilently } = useAuth0();

  const getAllLanden = useCallback(async () => {
    const token = await getAccessTokenSilently();

    const res = await axios.get(baseUrl + '/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }, [getAccessTokenSilently]);

  const getLandById = useCallback(async (id) => {
    const token = await getAccessTokenSilently();

    const res = await axios.get(baseUrl + '/' + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }, [getAccessTokenSilently]);

  return {
    getAllLanden,
    getLandById
  };
}

export default useLand;