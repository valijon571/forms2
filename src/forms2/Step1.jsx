import React from "react";
import { Step1Style } from "./Step1Style";

const Step1 = () => {
  return (
    <>
      <Step1Style>
        <div
          class="chakra-modal__body css-qlig70"
          id="chakra-modal--body-:r9s:"
        >
          <div class="sc-dAlyuH hGShBZ">
            <div class="sc-jXbUNg duTnwm title">
              <b>Tizimga</b> Kirish
            </div>
            <form class="form">
              <label class="sc-imWYAI eGCxAi" for="name">
                <div class="label">Telfon raqam</div>
                <div class="i_target">
                  <div class="input_body">
                    <input placeholder="" name="name" value="" />
                  </div>
                </div>
              </label>
              <label class="sc-imWYAI eGCxAi" for="password">
                <div class="label">Parol</div>
                <div class="i_target">
                  <div class="input_body">
                    <input
                      type="password"
                      name="password"
                      placeholder=""
                      value=""
                    />
                    <span class="show_icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d=""></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </label>
              <div class="error_text"></div>
              <div class="btns">
                <button class="sc-dhKdcB htJRq">Kirish</button>
              </div>
            </form>
            <div class="event">
              <b>Ro'yxatdan</b> o'tish
            </div>
            <div class="event">
              <b>Parolni</b> tiklash
            </div>
          </div>
        </div>
      </Step1Style>
    </>
  );
};
export default Step1;
