import React, { useState } from "react";
import "./App.css"
import BoxContents from "./component/BoxContents"
import AddButton from "./component/AddButton";
import "./reset.css"
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
      <AddButton clickAddHandler={clickAddHandler}/>
      </div>

    

      <div>
        <div className="working">Working...</div>
      <div className="workingBox">
      {todoList.map((item)=>{
        return !item.isDone ? (
          <BoxContents 
          key={item.id}
          item={item}
          clickRemoveButtonHandler={clickRemoveButtonHandler} 
          clickSetButtonHandler={clickSetButtonHandler} />
        ): null

      })}
      </div>
      </div>
      <div className="done">Done!!!</div>
      <div className="doneBox">     
       {todoList.map((item)=>{
        return item.isDone ?(
       <BoxContents 
       key={item.id}
       item={item}
       clickRemoveButtonHandler={clickRemoveButtonHandler} 
       clickSetButtonHandler={clickSetButtonHandler} />
        ):null
      })

      }
      </div>

  
    </div>
    </div>
  );
}


export default App;
