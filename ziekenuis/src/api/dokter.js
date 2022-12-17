import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/dokters`;

const useDokter = () => {
  const  { getAccessTokenSilently } = useAuth0();

  const getAll = useCallback(async () => {
    const token = await getAccessTokenSilently();

    const res = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }, [getAccessTokenSilently]);

  const getAllAfdelingen = useCallback(async () => {
    const token = await getAccessTokenSilently();

    const res = await axios.get(baseUrl + '/afdelingen', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return Object.values(res.data);
  }, [getAccessTokenSilently]);

  const getAllByAfdeling = useCallback(async (afdeling) => {
    const token = await getAccessTokenSilently();

    const res = await axios.get(baseUrl + '/' + afdeling, {
      headers: {
        Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
  }, [getAccessTokenSilently]);

  return {
    getAll,
    getAllAfdelingen,
    getAllByAfdeling,
  };
};

export default useDokter;