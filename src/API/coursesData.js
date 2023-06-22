import api from './index';

export const getLearns = async (courseName) => {
  try {
    const response = await api.post('/learn/getLearn', courseName );
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

export const getVideo = async (courseName) => {
  try {
    const response = await api.post('/learn/getVideo', courseName);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};