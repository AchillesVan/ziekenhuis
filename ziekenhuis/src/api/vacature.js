import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/vacatures`;

const useVacatures = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAll = useCallback(async () => {
    const token = await getAccessTokenSilently();
    
    const data = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }, [getAccessTokenSilently]);

  const getById = useCallback(async (Id) => {
    const token = await getAccessTokenSilently();
    
    const data = await axios.get(baseUrl + "/" + Id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }, [getAccessTokenSilently]);

  const createVacature = useCallback(async (vacature) => {
    const token = await getAccessTokenSilently();

    const response = await axios.post(baseUrl + '/', vacature, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }, [getAccessTokenSilently]);

  return {
    getAll,
    getById,
    createVacature,

  }
};

export default useVacatures;