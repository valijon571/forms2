import styled from "styled-components";

export const Step1Style = styled.div`
  & .contenr {
    border-radius: 20px;
    display: flex;
    margin-top: 25px;
    justify-content: center;
    & .chakra-modal__body {
      border-radius: 20px;
      background: rgb(255, 255, 255);
      box-shadow: rgba(0, 34, 125, 0.1) 0px 0px 20px 0px;
      border-width: 0px;
      border-style: solid;
      box-sizing: border-box;
      overflow-wrap: break-word;
      width: 50%;
      padding: 20px;
      & .sc-jXbUNg_duTnwm_title {
        width: 100%;
        display: block;
        color: rgb(24, 24, 24);
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 1.5px;
        padding: 12px 0px;
      }
      & .form {
        & .sc-imWYAI_eGCxAi {
          color: rgb(24, 24, 24);
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 18.2px;
          letter-spacing: 0.9px;
          display: block;
          padding-bottom: 14px;
          margin-bottom: 10px;
          & .input_body {
            border-radius: 10px;
            border: 1px solid rgb(207, 219, 224);
            padding: 16px 18px;
            width: 90%;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            & input {
              color: rgb(0, 0, 0);
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: 27px;
              letter-spacing: 1px;
              width: 100%;
              border: none;
            }
          }
        }
        & .btns {
          padding: 14px 0px;
          & .sc-dhKdcB_htJRq {
            background: rgb(0, 170, 88);
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            letter-spacing: 1px;
            text-align: center;
            padding: 16px 50px;
            border-radius: 10px;
            border: 1px solid rgb(0, 170, 88);
            cursor: pointer;
            transition: background-color 0.5s ease 0s;
          }
        }
      }
    }
  }
`;
