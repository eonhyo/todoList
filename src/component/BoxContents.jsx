import styled from "styled-components"

const STTodoList = styled.section`
  width: 300px;
  height: 200px;
  border: 3px solid #402b3a;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  flex-direction: column;
`
const STTodoListHeader = styled.div`
   width: 280px;
  height: 50px;
  margin: 10px 10px auto auto;
  font-size: 28px;
  font-weight: 550;
  display: flex;
  gap: 30px;
`
const STTodoListBody = styled.div`
    width: 280px;
  height: 70px;
  margin: 10px 10px auto auto;
  font-size: 24px;
  display: flex;
  gap: 30px;
`
const STTodoListDeadLine = styled.div`
  margin-left: 10px;
  color: gray;
`
const STTodoListButtonBar = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`
const STTodoListDeleteButton = styled.button`
  color: white;
  font-weight: 700;
  margin: 10px 10px 15px 10px;
  border: none;
  background-color: #d63484;
  border-radius: 6px;
  width: 100px;
  height: 30px;
  cursor: pointer;
`
const STTodoListSetButton =styled.button`
  color: white;
  font-weight: 700;
  margin: 10px 10px 15px 10px;
  background-color: #7bd3ea;
  border: none;
  border-radius: 6px;
  width: 100px;
  height: 30px;
  cursor: pointer;
`

const BoxContents = ({item, clickRemoveButtonHandler, clickSetButtonHandler}) => {

  
    return(
    <STTodoList key={item.id}>
    <STTodoListHeader>{item.header}</STTodoListHeader>
  
    <STTodoListBody>{item.contents}</STTodoListBody>   
    <STTodoListDeadLine>마감날짜 : {item.date}</STTodoListDeadLine>
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