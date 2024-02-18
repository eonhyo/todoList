import React from 'react';
import { useParams } from 'react-router-dom';

function TodoDetails({ todoList }) {

  let { todoId } = useParams();

  const todo = todoList.find(todo => todo.id === parseInt(todoId, 10));

  return todo ? (
    <div>
      <h2>{todo.header}</h2>
      <p>{todo.contents}</p>
      <p>마감 날짜: {todo.date}</p>
      <p>완료 여부: {todo.isDone ? '완료' : '미완료'}</p>
    </div>
  ) : (
    <div>해당 투두 아이템을 찾을 수 없습니다.</div>
  );
}

export default TodoDetails;