import React, { useState } from "react";


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
    console.log("first")
    const addTodoList = {
      id : todoList.length+1 , header, contents 
    }
    setTodoList([...todoList, addTodoList])
    setHeader('');
    setContents('');
  }

  // 삭제버튼
  const clickRemoveButtonHandler = (id)=> {
    const removeTodoList = todoList.filter((todoList) =>
    todoList.id !== id )
    setTodoList(removeTodoList)
  }

  // 완료버튼
  const clickClearButtonHandler = (id) => {
    console.log("됨?")
    const clearTotoList = todoList.filter((todoList)=>
    todoList.id === id)
    setDoneList([...todoList, clearTotoList])
    
    const deleteTodoList = todoList.filter((todoList) =>
    todoList.id !== id )
    setTodoList(deleteTodoList)

  };
  return (
    <div>
      <div>My Todo List</div>
      제목 :{" "}
      <input
        type="text"
        value={header}
        onChange={(event) => changeHeader(event)}
      ></input>
      내용 :{" "}
      <input
        type="text"
        value={contents}
        onChange={(event) => changeContents(event)}
      ></input>
      <button onClick={clickAddHandler}>추가하기</button>
      <div>Working
      {todoList.map((item)=>{
        return (
          <div key={item.id}>
          {item.header}, 
          {item.contents},     
          <button onClick={()=>{clickRemoveButtonHandler(item.id)}}>삭제하기</button>
          <button onClick={()=>{clickClearButtonHandler(item.id)}}>완료</button>
          </div>
        )

      })}

      </div>
      <div>Done
        {doneList.map((item)=>{
          return (
            <div key={item.id}>
              {item.header},
              {item.contents},
              <button onClick={()=>{clickRemoveButtonHandler(item.id)}}>삭제하기</button>
              <button>취소</button>
            </div>
          )

          
        })}
    
      </div>
    </div>
  );
}

export default App;
