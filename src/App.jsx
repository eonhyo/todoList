import React, { useState } from "react";
import "./App.css"

function App() {
  const [header, setHeader] = useState("");
  const [contents, setContents] = useState("");
  const [todoList, setTodoList]= useState([]);
  const [doneList, setDoneList]= useState([]);


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
      id : todoList.length+1 , header, contents, isDone : true
    }
    setTodoList([...todoList, addTodoList])
    setHeader('');
    setContents('');
  }



 


  // Working 삭제버튼
  const clickRemoveButtonHandler = (id)=> {
    
    // if(todoList.isDone === true){

    // }
    const removeTodoList = todoList.filter((todoList) =>
    todoList.id !== id )
    setTodoList(removeTodoList)

    const removeTodoList2 = doneList.filter((doneList) =>
    doneList.id !== id )
    setDoneList(removeTodoList2)
  }
  

  // Working 완료버튼
  // const clickClearButtonHandler = (id) => {
  // console.log("됨?")
  // const clearTotoList = todoList.filter((todoList)=>
  // todoList.id === id)
  //   setDoneList([...doneList, ...clearTotoList])
    
  //   const deleteTodoList = todoList.filter((todoList) =>
  //   todoList.id !== id )
  //   setTodoList(deleteTodoList)
  // };
  // Done 삭제버튼
  // const clickClearRemoveButtonHandler = (id)=> {
  //   const removeTodoList2 = doneList.filter((doneList) =>
  //   doneList.id !== id )
  //   setDoneList(removeTodoList2)
  // }

  // Done 취소버튼
  // const clickCancelButtonHandler = (id) => {
  //   console.log("됨?")
  //   const CancelTotoList = doneList.filter((doneList)=>
  //   doneList.id === id)
  //   setTodoList([...todoList, ...CancelTotoList])
    
  //   const deleteDoneTodoList = doneList.filter((doneList) =>
  //   doneList.id !== id )
  //   setDoneList(deleteDoneTodoList)
  // };

//  완료 취소 버튼
  const clickSetButtonHandler = (id) =>{
    alert("야 됐냐")
    // if(todoList.isDone === true){
    todoList.isDone = !todoList.isDone;
    const moveTodoList = todoList.filter((todoList)=>
    todoList.id === id)
    setDoneList([...doneList, ...moveTodoList])
    const removeTodoList = todoList.filter((todoList) =>
    todoList.id !== id )
    setTodoList(removeTodoList)
  // }
  // if(todoList.isDone !== false){
  //   todoList.isDone = !todoList.isDone;
  //   const CancelTotoList = doneList.filter((doneList)=>
  //   doneList.id === id)
  //   setTodoList([...todoList, ...CancelTotoList])
  //   const deleteDoneTodoList = doneList.filter((doneList) =>
  //   doneList.id !== id )
  //   setDoneList(deleteDoneTodoList)
  //   }
  
  }
    
    
  

  return (
    <div className="page">
    <div className="layout">
      <div className="header"><h1>My Todo List</h1> <h2>React</h2></div>
   
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
        <div className="working">Working</div>
      <div className="workingBox">
      {todoList.map((item)=>{
        return (
          <div className="todoList">
          <div key={item.id}>
          <div className="todoListHeader">{item.header}</div>

          <div className="todoListContents">{item.contents}</div>   
          <div className="todoListButton"> 
          <button className="deleteBtn" onClick={()=>{clickRemoveButtonHandler(item.id)}}>삭제하기</button>
          <button className="setBtn" onClick={() => clickSetButtonHandler(item.id)}>
        {item.isDone ? "완료": "취소"}
      </button>
      </div> 
          </div>
          </div>
          
        )

      })}
      </div>
      </div>
      <div className="done">Done</div>
      {doneList.map((item)=>{
        return (
          <div className="todoList">
          <div key={item.id}>
          <div className="todoListHeader">{item.header}</div>

          <div className="todoListContents">{item.contents}</div>   
          <div className="todoListButton"> 
          <button className="deleteBtn" onClick={()=>{clickRemoveButtonHandler(item.id)}}>삭제하기</button>
          <button className="setBtn" onClick={() => clickSetButtonHandler(item.id)}>
          {item.isDone ? "완료": "취소"}
      </button>
      </div> 
          </div>
          </div>
          
        )

      })}
    </div>
    </div>
  );
}

export default App;
