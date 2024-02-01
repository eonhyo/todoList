import React from 'react';
import BoxContents from './BoxContents'; 
import styled from 'styled-components';

const STWorkingHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 20px auto;
`
const STWorking= styled.p`
      font-size: 30px;
  font-style: italic;
`
const STSortByTodoList = styled.select`
    border-radius: 6px;
`

const STWorkingBox = styled.div`
      display: flex;
  margin-top: 10px;
`
const STDone = styled.p`
      margin: 20px auto 20px auto;
  font-size: 30px;
  font-style: italic;
`
const STDoneBox = styled.div`
      display: flex;
  margin-top: 10px;
`

const TodoList = ({ todoList, clickRemoveButtonHandler, clickSetButtonHandler, deadLineSort, handleSortChange }) => {
  return (
    <>
      <STWorkingHead>
        <STWorking>Working...</STWorking> 
        <STSortByTodoList
          value={deadLineSort}
          onChange={handleSortChange}
        >
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </STSortByTodoList>
      </STWorkingHead>
      <STWorkingBox>
        {todoList.map((item) => {
          return !item.isDone ? (
            <BoxContents 
              key={item.id}
              item={item}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
              clickSetButtonHandler={clickSetButtonHandler} />
          ) : null;
        })}
      </STWorkingBox>
      <STDone>Done!!!</STDone>
      <STDoneBox>
        {todoList.map((item) => {
          return item.isDone ? (
            <BoxContents 
              key={item.id}
              item={item}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
              clickSetButtonHandler={clickSetButtonHandler} />
          ) : null;
        })}
      </STDoneBox>
    </>
  );
};

export default TodoList;