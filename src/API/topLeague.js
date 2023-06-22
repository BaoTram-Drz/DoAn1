import api from './index';

export const getLeague = async () => {
  try {
    const response = await api.get('/league/getLeague');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
