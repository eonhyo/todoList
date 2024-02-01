import React, { useState } from "react";
import "./App.css"
import TodoList from "./component/TodoList"
import "./reset.css"
import InputField from"./component/InputFiled"
import TodoListHeader from "./component/TodoListHeader"
import GlobalStyle from "./component/GlobalStyle"
import styled from "styled-components";

const STPage = styled.div`
    display: flex;
  justify-content: center;
`
const STLayout = styled.div`
  width: 1200px;
  height: 800px;`

function App() {
  const [header, setHeader] = useState("");
  const [contents, setContents] = useState("");
  const [todoList, setTodoList]= useState([]);
  const [date, setDate] = useState("");
  const [deadLineSort, setDeadLineSort] = useState("asc");


  // 제목 입력
  const changeHeader = (event) => {
    setHeader(event.target.value);
  };
  // 내용 입력
  const changeContents = (event) => {
    setContents(event.target.value);
  };
  // 마감날짜 입력
  const changeDate = (event) =>{
    setDate(event.target.value)
  }

  // 추가버튼 
  const clickAddHandler = () =>{   
    const addTodoList = {
      id : todoList.length+1 , header, contents, date,  isDone : false
    }
    setTodoList([...todoList, addTodoList])
    setHeader('');
    setContents('');
    setDate("");

  }

  // 삭제버튼
  const clickRemoveButtonHandler = (id)=> {
    
    if(todoList.isDone === true){
  const removeTodoListDone = todoList.filter((todoList) =>
     todoList.id !== id )
    setTodoList(removeTodoListDone)
    }
  
    if(todoList.isDone !== true){
    const removeTodoListWorking = todoList.filter((todoList) =>
    todoList.id !== id )
    setTodoList(removeTodoListWorking)
  }
}
  
//  완료 취소 버튼
 
const clickSetButtonHandler = (id) => {
  const updatedTodoList = todoList.map((item) =>
  item.id === id ? { ...item, isDone: !item.isDone } : item
  );
  setTodoList(updatedTodoList);
};

// 정렬 기능
const handleSortChange = (event) => {
  setDeadLineSort(event.target.value);
  sortTodoList(event.target.value);
};

const sortTodoList = (order) => {
  const sortedList = [...todoList].sort((a, b) => {
    if (order === "asc") {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });
  setTodoList(sortedList);
};
    
  

  return (<>
  <GlobalStyle/>
    <STPage>
    <STLayout>
      <TodoListHeader/>
   
 
   <InputField
            header={header}
            contents={contents}
            date={date}
            changeHeader={changeHeader}
            changeContents={changeContents}
            changeDate={changeDate}
            clickAddHandler={clickAddHandler}
          />
         

    

         <TodoList
        todoList={todoList}
        clickRemoveButtonHandler={clickRemoveButtonHandler}
        clickSetButtonHandler={clickSetButtonHandler}
        deadLineSort={deadLineSort} 
        handleSortChange={handleSortChange}
      />
    </STLayout>
    </STPage></>
  );
}


export default App;
