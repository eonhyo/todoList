import React, { useState } from "react";
import "./App.css"

function App() {
  const [header, setHeader] = useState("");
  const [contents, setContents] = useState("");
  const [todoList, setTodoList]= useState([]);


  // 제목 입력
  const changeHeader = (event) => {
    setHeader(event.target.value);
  };
  // 내용 입력
  const changeContents = (event) => {
    setContents(event.target.value);
  };

  // 추가버튼 
  const clickAddHandler = () =>{   
    const addTodoList = {
      id : todoList.length+1 , header, contents, isDone : false
    }
    setTodoList([...todoList, addTodoList])
    setHeader('');
    setContents('');
  }

  // Working 삭제버튼
  const clickRemoveButtonHandler = (id)=> {
    
    if(todoList.isDone === true){
  const removeTodoList = todoList.filter((todoList) =>
    todoList.id !== id )
    setTodoList(removeTodoList)
    }
  
    if(todoList.isDone !== true){
    const removeTodoList2 = todoList.filter((todoList) =>
    todoList.id !== id )
    setTodoList(removeTodoList2)
  }}
  
//  완료 취소 버튼
 
const clickSetButtonHandler = (id) => {
  const updatedTodoList = todoList.map((todo) =>
    todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
  );
  setTodoList(updatedTodoList);
};
    
  

  return (
    <div className="page">
    <div className="layout">
      <div className="header"><h1>My Todo List</h1> <h2>React</h2>
      </div>
   
   <div className="navBar">
    <div className="inputBar">   
      <input
       placeholder="제목"
        type="text"
        value={header}
        onChange={(event) => changeHeader(event)}
      ></input>
    
      <input
        placeholder="내용"
        type="text"
        value={contents}
        onChange={(event) => changeContents(event)}
      ></input>
      </div>
      <button className="addBtn" onClick={clickAddHandler}>추가하기</button>
      </div>

    

      <div>
        <div className="working">Working...</div>
      <div className="workingBox">
      {todoList.map((item)=>{
        return !item.isDone ? (
          <div className="todoList" key={item.id}>
          <div >
          <div className="todoListHeader">{item.header}</div>

          <div className="todoListContents">{item.contents}</div>   
          <div className="todoListButton"> 
          <button className="deleteBtn" onClick={()=>{clickRemoveButtonHandler(item.id)}}>삭제하기</button>
          <button className="setBtn" onClick={() => clickSetButtonHandler(item.id)}>
        {item.isDone ? "취소": "완료"}
      </button>
      </div> 
          </div>
          </div>
          
        ): null

      })}
      </div>
      </div>
      <div className="done">Done...</div>
      <div className="doneBox">     
       {todoList.map((item)=>{
        return item.isDone ?(
       
          <div className="todoList" key={item.id}>
           <div >
          <div className="todoListHeader">{item.header}</div>

          <div className="todoListContents">{item.contents}</div>   
          <div className="todoListButton"> 
          <button className="deleteBtn" onClick={()=>{clickRemoveButtonHandler(item.id)}}>삭제하기</button>
          <button className="setBtn" onClick={() => clickSetButtonHandler(item.id)}>
        {item.isDone ? "취소": "완료"}
      </button>
      </div> 
          </div>
          </div>
        ):null
      })

      }
      </div>

  
    </div>
    </div>
  );
}

export default App;
