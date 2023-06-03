import api from './index';

export const getCourses = async () => {
  try {
    const response = await api.get('/courses/getCourses');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createCourse = async (courseData) => {
  try {
    const response = await api.post('/courses', courseData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};