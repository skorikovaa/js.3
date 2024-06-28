import axios from 'axios';

export const updateUserData = async (userData) => {
  try {
    const response = await axios.put('/api/users/update', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
