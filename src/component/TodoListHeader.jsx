import React from 'react'
import styled from 'styled-components'

const STHeader = styled.header`
     border: 4px solid #ffe5e5;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`

const STTitle = styled.h1`
     font-size: 32px;
  margin-left: 30px;
  font-weight: 1000;
`
const STSubTitle = styled.h2`
      font-size: 24px;
  margin-right: 30px;
  font-weight: 700;
`

function TodoListHeader() {
  return (<>
       <STHeader><STTitle>My Todo List</STTitle> <STSubTitle>React</STSubTitle>
      </STHeader>
  </>
   
  )
}

export default TodoListHeader