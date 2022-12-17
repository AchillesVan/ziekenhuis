import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/agendaslots`;

const useAgendaslots = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAllByRiziv = useCallback(async (riziv) => {
    const token = await getAccessTokenSilently();
    
    const data = await axios.get(baseUrl + '/riziv/' + riziv, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }, [getAccessTokenSilently]);

  const getAllByDate = useCallback(async (date) => {
    const token = await getAccessTokenSilently();
    
    const data = await axios.get(baseUrl + '/date/' + date, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }, [getAccessTokenSilently]);

  const getAllByDateAndRiziv = useCallback(async (date, riziv) => {
    const token = await getAccessTokenSilently();

    const url = baseUrl + '/' + date + '/' + riziv;

    const data = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }); 

    return data;
  }, [getAccessTokenSilently]);

  const getByAuth0 = useCallback(async (Auth0Id) => {
    const token = await getAccessTokenSilently();
    
    const data = await axios.get(baseUrl + '/' + Auth0Id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }, [getAccessTokenSilently]);

  const createAgendaslot = useCallback(async (agendaslot) => {
    const token = await getAccessTokenSilently();

    const response = await axios.post(baseUrl + '/', agendaslot, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }, [getAccessTokenSilently]);

  return {
    getAllByRiziv,
    getAllByDate,
    getAllByDateAndRiziv,
    getByAuth0,
    createAgendaslot,
  }
};

export default useAgendaslots;