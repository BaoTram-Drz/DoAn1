import api from './index';

export const getLearns = async () => {
  try {
    const response = await api.get('/learn/getLearn');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const saveLearn = async (learnData) => {
  try {
    const response = await api.post('/learn', learnData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};