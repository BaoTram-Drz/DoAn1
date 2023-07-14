import api from './index';

export const getInfo = async () => {
  try {
    const response = await api.get('/changeInfo/getInfo');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const saveChangeInfo = async (changeInfo) => {
  try {
    const response = await api.put('users/changeInfo', changeInfo);
    console.log(changeInfo)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};