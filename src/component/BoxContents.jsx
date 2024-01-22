const BoxContents = ({item, clickRemoveButtonHandler, clickSetButtonHandler}) => {
    return(
    <div className="todoList" key={item.id}>
    <div>
    <div className="todoListHeader">{item.header}</div>
  
    <div className="todoListContents">{item.contents}</div>   
    <div className="todoListButton"> 
    <button className="deleteBtn" onClick={()=>{clickRemoveButtonHandler(item.id)}}>삭제하기</button>
    <button className="setBtn" onClick={() => {clickSetButtonHandler(item.id)}}>
  {item.isDone ? "취소": "완료"}
  </button>
  </div> 
    </div>
    </div>
    )
  }
  

  export default BoxContents