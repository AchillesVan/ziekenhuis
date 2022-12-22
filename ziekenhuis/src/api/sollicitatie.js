import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/sollicitaties`;

const useSollicitaties = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createSollicitatie = useCallback(async (sollicitatie) => {
    const token = await getAccessTokenSilently();

    const response = await axios.post(baseUrl + '/', sollicitatie, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }, [getAccessTokenSilently]);

  return {
    createSollicitatie,

  }
};

export default useSollicitaties;