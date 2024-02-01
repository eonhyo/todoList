import styled from "styled-components";

const STNav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: #e0aed0;
border-radius: 8px;
`

const STBar = styled.div`
display: flex;
justify-content: space-between;
margin-left: 30px;
`

const STInputBar = styled.input`
border: none;
border-radius: 6px;    
padding: 10px;
width: 300px; 
margin-right: 30px;
`
    
const STDeadLine = styled.section `        
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
const STDeadLineInput = styled.input`
border-radius: 6px;
color: gray;
border: 1px solid gray;   

`

const STAddBtn = styled.button`
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
function InputField({ header, contents, date, changeHeader, changeContents, changeDate, clickAddHandler }) {

   
   
   
   
    return (
        <STNav>
      <STBar>
        <STInputBar
          placeholder="제목"
          type="text"
          value={header}
          onChange={changeHeader}
        />
        <STInputBar
          placeholder="내용"
          type="text"
          value={contents}
          onChange={changeContents}
        />
         <STDeadLine>
       <p>마감날짜</p>
        <STDeadLineInput
          id="deadline"
          type="date"
          value={date}
          onChange={changeDate}
        />
        </STDeadLine>
        
      </STBar>
          <STAddBtn onClick={clickAddHandler}>추가하기</STAddBtn>
          </STNav>
    );

  }


  

  export default InputField