import {STNav, STBar, STInputBar, STDeadLine, STDeadLineInput, STAddBtn} from "./css"

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