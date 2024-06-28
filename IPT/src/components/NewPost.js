import React, { useState } from "react";

const NewPost = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: "Новый пост",
      body: text
    };
    // Отправить запрос на создание нового поста
    // Ваш код здесь
  };

  return (
    <div>
      <h3>Добавить новый пост</h3>
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Введите текст поста"
        ></textarea>
        <button type="submit">Опубликовать</button>
      </form>
    </div>
  );
};

export default NewPost;
