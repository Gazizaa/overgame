import React from 'react'
import {Link} from 'react-router-dom'

import styled from '@emotion/styled'

import arrowImg from '../../assets/images/arrow.png'

const MainWrap = styled.div`
  img {
    width: 50px;
    height: 31px;
    visibility: hidden;
  }

  .main {
    p {
      margin-bottom: 75px;
      line-height: 40px;
    }
  }

  .guest {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    margin-right: 50px;
  }

  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
  }

  .user, .guest {
    cursor: pointer;

    button {
      background: none;
      border: none;
    }

    p {
      padding: 5px;
    }

    :hover {
      button {
        p {
          color: #F25E6B;
          background: #F2B84B;
        }
      }

      img {
        visibility: visible;
      }
    }
  }
`

const GuestUserPage = () => {

  return (
      <MainWrap>
          <div className='main'>
              <p>How do you want to go to the site?</p>
          </div>
          <div className="guest">
              <img src={arrowImg} alt="arrow"/>
              <Link to="/main">
                  <button>
                      <p>GUEST</p>
                  </button>
              </Link>
          </div>
          <div className="user">
              <img src={arrowImg} alt="arrow"/>
              <Link to={'/auth/sign-in'}>
                  <button>
                      <p>USER</p>
                  </button>
              </Link>
          </div>
      </MainWrap>
  );
}

export default GuestUserPage;
