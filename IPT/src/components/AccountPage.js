import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountPage = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    // другие поля пользователя
  });

  useEffect(() => {
    // Получение данных пользователя с сервера при первой загрузке компонента
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.put('/api/user', userData);
    if (response.status === 200) {
      // Сохранение данных пользователя прошло успешно
      console.log('User data updated successfully');
    } else {
      // Произошла ошибка при сохранении данных пользователя
      console.error('Error updating user data:', response.data);
    }
  } catch (error) {
    console.error('Error updating user data:', error);
  }
};


  return (
    <div>
      <h1>Личный кабинет</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        {/* другие поля пользователя */}
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default AccountPage;
