import api from './index';

export const getGamesData = async (courseName) => {
  try {
    courseName = localStorage.getItem('productName');
    const response = await api.get('/games/getGamesData', {
      params: {
        courseName: courseName
      }
    } );
    console.log(courseName);
    console.log(response.data)
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