import React from 'react';
import { useParams } from 'react-router-dom';

function TodoDetails({ todoList }) {
  // URL로부터 todoId 파라미터 값을 가져옵니다.
  let { todoId } = useParams();
  
  // todoList 배열에서 해당 ID를 가진 투두 아이템을 찾습니다.
  const todo = todoList.find(todo => todo.id === parseInt(todoId, 10));

  // 찾은 투두 아이템의 상세 정보를 표시합니다.
  // 해당 아이템이 존재하지 않는 경우, 적절한 메시지를 보여줍니다.
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