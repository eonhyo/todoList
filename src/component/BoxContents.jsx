import {STTodoList, STTodoListHeader, STTodoListBody, STTodoListDeadLine, STTodoListButtonBar, STTodoListDeleteButton, STTodoListSetButton} from "./css"
import { Link } from 'react-router-dom';

const BoxContents = ({item, clickRemoveButtonHandler, clickSetButtonHandler}) => {



  
    return(
    <STTodoList key={item.id}>
      <Link to={`/todo/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <STTodoListHeader>{item.header}</STTodoListHeader>
  
    <STTodoListBody>{item.contents}</STTodoListBody>   
    <STTodoListDeadLine>마감날짜 : {item.date}</STTodoListDeadLine>
    </Link>
    <STTodoListButtonBar> 
    <STTodoListDeleteButton onClick={()=>{clickRemoveButtonHandler(item.id)}}>삭제하기</STTodoListDeleteButton>
    <STTodoListSetButton onClick={() => {clickSetButtonHandler(item.id)}}>
  {item.isDone ? "취소": "완료"}
  </STTodoListSetButton>
  </STTodoListButtonBar>    
    </STTodoList>
    )
  }
  

  export default BoxContents