import React, { FC } from 'react'
import styled from '@emotion/styled'

const SignInWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
    p {
      color: white;
      font-weight: 600;
      padding: 20px;
      margin: 30px;
    }
`

const SignIn: FC = () => {

    debugger

  return (
    <SignInWrap>
        <p>Soon!!!</p>
    </SignInWrap>
  )
}

export default SignIn
