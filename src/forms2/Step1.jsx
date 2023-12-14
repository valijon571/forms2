import React from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import { useState } from "react";
import { Step1Style } from "./Step1Style";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    password: false,
  });
  const [obj, setObj] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let t = true,
      err = {};
    if (!obj.name) {
      t = false;
      err = { ...err, name: true };
    }
    if (!obj.password) {
      t = false;
      err = { ...err, password: true };
    }
    if (t) {
      axios
        .post("https://apiinson.yarbek.uz/api/v1/auth/login", {
          name: obj.name,
          password: obj.password,
        })
        .then((r) => {
          localStorage.setItem("token", r?.data?.access_token);
          navigate("/Step2");
        })
        .catch((e) => {})
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setErrors(err);
    }
  };
  return (
    <>
      <Step1Style>
        <div className="contenr">
          <div class="chakra-modal__body">
            <div class="sc-dAlyuH hGShBZ">
              <div class="sc-jXbUNg_duTnwm_title">
                <b>Tizimga</b> Kirish
              </div>
              <form class="form" onSubmit={onSubmit}>
                <label class="sc-imWYAI_eGCxAi" for="name">
                  <div class="label">Telfon raqam</div>
                  <div class="i_target">
                    <div class="input_body">
                      <InputMask
                        mask="998nnnnnnnnn"
                        placeholder=""
                        name="name"
                        formatChars={{
                          n: "[0-9]",
                          a: "[A-Za-z]",
                          "*": "[A-Za-z0-9]",
                        }}
                        // onChange={(e) => {
                        //   setPdata({ ...pdata, [e.target.name]: e.target.value });
                        //   setErrors({
                        //     ...errors,
                        //     [e.target.name]: false,
                        //     common: "",
                        //   });
                        // }}
                        value={obj?.name}
                        onChange={(e) => {
                          setObj({ ...obj, name: e.target.value });
                          setErrors({ ...errors, name: false });
                        }}
                      />
                      {errors?.name ? (
                        <div style={{ color: "red" }}>Tel nomer kiriting!</div>
                      ) : null}
                    </div>
                  </div>
                </label>
                <label class="sc-imWYAI_eGCxAi" for="password">
                  <div class="label">Parol</div>
                  <div class="i_target">
                    <div class="input_body">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder=""
                        value={obj?.password}
                        onChange={(e) => {
                          setObj({ ...obj, password: e.target.value });
                          setErrors({ ...errors, password: false });
                        }}
                      />

                      <div>
                        {showPassword ? (
                          <div onClick={() => setShowPassword(false)}>
                            <BsEyeSlash />
                          </div>
                        ) : (
                          <div onClick={() => setShowPassword(true)}>
                            <AiOutlineEye
                              onClick={() => setShowPassword(true)}
                            />
                          </div>
                        )}
                      </div>
                      {errors?.password ? (
                        <div style={{ color: "red" }}>Parolni kiriting!</div>
                      ) : null}
                      {/* <span class="show_icon">
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
                      </span> */}
                    </div>
                  </div>
                </label>
                {/* <div class="error_text"></div> */}
                <div class="btns">
                  {loading ? (
                    "Yuklanmoqda"
                  ) : (
                    <button class="sc-dhKdcB_htJRq">Kirish</button>
                  )}
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
        </div>
      </Step1Style>
    </>
  );
};
export default Step1;
