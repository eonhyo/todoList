import styled from "styled-components"

//TodoList.jsx
export const STWorkingHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 20px auto;
`
export const STWorking= styled.p`
      font-size: 30px;
  font-style: italic;
`
export const STSortByTodoList = styled.select`
    border-radius: 6px;
`

export const STWorkingBox = styled.div`
      display: flex;
  margin-top: 10px;
`
export const STDone = styled.p`
      margin: 20px auto 20px auto;
  font-size: 30px;
  font-style: italic;
`
export const STDoneBox = styled.div`
      display: flex;
  margin-top: 10px;
`

//InputFiled 

export const STNav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: #e0aed0;
border-radius: 8px;
`

export const STBar = styled.div`
display: flex;
justify-content: space-between;
margin-left: 30px;
`

export const STInputBar = styled.input`
border: none;
border-radius: 6px;    
padding: 10px;
width: 300px; 
margin-right: 30px;
`
    
export const STDeadLine = styled.section `        
width: 200px;
background-color: white;
height: 36px;
border-radius: 6px;
display: flex;
justify-content: center;
align-items: center;
color: gray;
font-size: 13px;
justify-content: space-around;
cursor: default;
`

export const STDeadLineInput = styled.input`
border-radius: 6px;
color: gray;
border: 1px solid gray;   
`

export const STAddBtn = styled.button`
background-color: #ac87c5;
color: white;
border: none;
border-radius: 6px;
width: 130px;
padding: 10px;
margin-right: 30px;
cursor: pointer;
font-weight: 700;
`

// TodoListHeader 

export const STHeader = styled.header`
     border: 4px solid #ffe5e5;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`

export const STTitle = styled.h1`
     font-size: 32px;
  margin-left: 30px;
  font-weight: 1000;
`
export const STSubTitle = styled.h2`
      font-size: 24px;
  margin-right: 30px;
  font-weight: 700;
`

// BoxContents 
export const STTodoList = styled.section`
  width: 300px;
  height: 200px;
  border: 3px solid #402b3a;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  flex-direction: column;
`
export const STTodoListHeader = styled.div`
   width: 280px;
  height: 50px;
  margin: 10px 10px auto auto;
  font-size: 28px;
  font-weight: 550;
  display: flex;
  gap: 30px;
`
export const STTodoListBody = styled.div`
    width: 280px;
  height: 70px;
  margin: 10px 10px auto auto;
  font-size: 24px;
  display: flex;
  gap: 30px;
`
export const STTodoListDeadLine = styled.div`
  margin-left: 10px;
  color: gray;
`
export const STTodoListButtonBar = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`
export const STTodoListDeleteButton = styled.button`
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
export const STTodoListSetButton =styled.button`
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

// App
export const STPage = styled.div`
    display: flex;
  justify-content: center;
`
export const STLayout = styled.div`
  width: 1200px;
  height: 800px;`
