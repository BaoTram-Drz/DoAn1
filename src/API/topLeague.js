import api from './index';

export const getLeague = async () => {
  try {
    const response = await api.get('/games/getLeague');
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};


