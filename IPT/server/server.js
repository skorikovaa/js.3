const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Роут для обновления данных пользователя
app.put('/api/users/update', async (req, res) => {
  try {
    const { login, password, email } = req.body;

    // Валидация данных (если необходимо)

    const updatedUser = await prisma.user.update({
      where: {
        // Условие для поиска пользователя (например, по id)
      },
      data: {
        login,
        password,
        email,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
