import React from 'react';
import BoxContents from './BoxContents'; 
import {STWorkingHead, STWorking, STSortByTodoList, STWorkingBox, STDone, STDoneBox} from "./css"



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
      {todoList.filter(item => !item.isDone).map((item) => (
        <>
          <BoxContents 
            item={item}
            clickRemoveButtonHandler={clickRemoveButtonHandler}
            clickSetButtonHandler={clickSetButtonHandler} />
      
        </>
      ))}
    </STWorkingBox>
    <STDone>Done!!!</STDone>
    <STDoneBox>
      {todoList.filter(item => item.isDone).map((item) => (
          <BoxContents 
            item={item}
            clickRemoveButtonHandler={clickRemoveButtonHandler}
            clickSetButtonHandler={clickSetButtonHandler} />
      ))}
    </STDoneBox>
  </>
  );
};

export default TodoList;