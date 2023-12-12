import React from "react";
import axios from "axios";
import { useState } from "react";
import InputMask from "react-input-mask";
import { Step2Style } from "./Step2Style";

const Step2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    first_name: false,
    last_name: false,
    middle_name: false,
    birthday: false,
    doc_type: false,
    doc_number_serial: false,
    doc_given: false,
    foreign_doc_number_serial: false,
  });
  const [obj, setObj] = useState({
      name: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      birthday: "",
      doc_type: "",
      doc_number_serial: "",
      doc_given: "",
      foreign_doc_number_serial: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let t = true,
      err = {};
    if (!obj.name) {
      t = false;
      err = { ...err, name: true };
    }
    if (!obj.first_name) {
      t = false;
      err = { ...err, first_name: true };
    }
    if (!obj.last_name) {
      t = false;
      err = { ...err, last_name: true };
    }
    if (!obj.middle_name) {
      t = false;
      err = { ...err, middle_name: true };
    }
    if (!obj.birthday) {
      t = false;
      err = { ...err, birthday: true };
    }
    if (!obj.doc_type) {
      t = false;
      err = { ...err, doc_type: true };
    }
    if (!obj.doc_number_serial) {
      t = false;
      err = { ...err, doc_number_serial: true };
    }
    if (!obj.doc_given) {
      t = false;
      err = { ...err, doc_given: true };
    }
    if (!obj.foreign_doc_number_serial) {
      t = false;
      err = { ...err, foreign_doc_number_serial: true };
    }
    if (t) {
      axios
        .post("https://apiinson.yarbek.uz/api/v1/auth/profile", {
          name: obj.name,
          first_name: obj.first_name,
          last_name: obj.last_name,
          middle_name: obj.middle_name,
          birthday: obj.birthday,
          doc_type: obj.doc_type,
          doc_number_serial: obj.doc_number_serial,
          doc_given: obj.doc_given,
          foreign_doc_number_serial: obj.foreign_doc_number_serial,
        })
        .then((r) => {})
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
      <Step2Style>
        <div className="content">
          <form onSubmit={onSubmit}>
            <div className="sc-klVQfs_bmxtkv">
              <div className="sc-jXbUNg_duTnwm">
                <b>Личные</b> данные
              </div>
              <label className="sc-imWYAI_eGCxAi">
                <div class="label">Контактный номер телефона</div>
                <div className="i_target">
                  <div className="input_body_disabled">
                    <InputMask
                      placeholder=""
                      name="name"
                      mask="+998(nn) nnn-nn-nn"
                      // placeholder="+998"
                      formatChars={{
                        n: "[0-9]",
                        a: "[A-Za-z]",
                      }}
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

              <label className="sc-imWYAI_eGCxAi">
                <div class="label">Фамилия</div>
                <div className="i_target">
                  <div className="input_body">
                    <input
                      type="text"
                      name="first_name"
                      placeholder=""
                      value={obj?.first_name}
                      onChange={(e) => {
                        setObj({ ...obj, first_name: e.target.value });
                        setErrors({ ...errors, first_name: false });
                      }}
                    />
                    {errors?.first_name ? (
                      <div style={{ color: "red" }}>Xatolik!</div>
                    ) : null}
                  </div>
                </div>
              </label>
              <label className="sc-imWYAI_eGCxAi">
                <div class="label">Имя</div>
                <div className="i_target">
                  <div className="input_body">
                    <input
                      type="text"
                      name="last_name"
                      placeholder=""
                      value={obj?.last_name}
                      onChange={(e) => {
                        setObj({ ...obj, last_name: e.target.value });
                        setErrors({ ...errors, last_name: false });
                      }}
                    />
                    {errors?.last_name ? (
                      <div style={{ color: "red" }}>Xatolik!</div>
                    ) : null}
                  </div>
                </div>
              </label>
              <label className="sc-imWYAI_eGCxAi">
                <div class="label">Отчество</div>
                <div className="i_target">
                  <div className="input_body">
                    <input
                      type="text"
                      name="middle_name"
                      placeholder=""
                      value={obj?.middle_name}
                      onChange={(e) => {
                        setObj({ ...obj, middle_name: e.target.value });
                        setErrors({ ...errors, middle_name: false });
                      }}
                    />
                    {errors?.middle_name ? (
                      <div style={{ color: "red" }}>Xatolik!</div>
                    ) : null}
                  </div>
                </div>
              </label>
              <label className="sc-imWYAI_eGCxAi">
                <div class="label">Дата рождения</div>
                <div className="i_target">
                  <div className="input_body">
                    <input
                      type="date"
                      name="birthday"
                      placeholder=""
                      value={obj?.birthday}
                      onChange={(e) => {
                        setObj({ ...obj, birthday: e.target.value });
                        setErrors({ ...errors, birthday: false });
                      }}
                    />
                    {errors?.birthday ? (
                      <div style={{ color: "red" }}>Xatolik!</div>
                    ) : null}
                  </div>
                </div>
              </label>
            </div>
            <div className="sc-klVQfs_bmxtkv">
              <div className="sc-jXbUNg_duTnwm">
                <b>Паспортные</b> данные
              </div>

              <label className="sc-imWYAI_eGCxAi">
                <div class="label">Тип документа</div>
                <div className="i_target">
                  <div className="input_body">
                    <select placeholder="Passport" name="doc_type">
                      <option hidden="">Passport</option>
                      {/* <option value="1">Passport</option> */}
                      <option value="2">Id Card</option>
                    </select>
                  </div>
                </div>
              </label>
              <label className="sc-imWYAI_eGCxAi">
                <div class="label">Серия-Номер</div>
                <div className="i_target">
                  <div className="input_body">
                    <input
                      placeholder="AA-1234567"
                      name="doc_number_serial"
                      value={obj?.doc_number_serial}
                      onChange={(e) => {
                        setObj({ ...obj, doc_number_serial: e.target.value });
                        setErrors({ ...errors, doc_number_serial: false });
                      }}
                    />
                    {errors?.doc_number_serial ? (
                      <div style={{ color: "red" }}>Xatolik!</div>
                    ) : null}
                  </div>
                </div>
              </label>
              <label className="sc-imWYAI_eGCxAi">
                <div class="label">Дата выдачи</div>
                <div className="i_target">
                  <div className="input_body">
                    <input
                      type="date"
                      name="doc_given"
                      placeholder=""
                      value={obj?.doc_given}
                      onChange={(e) => {
                        setObj({ ...obj, doc_given: e.target.value });
                        setErrors({ ...errors, doc_given: false });
                      }}
                    />
                    {errors?.doc_given ? (
                      <div style={{ color: "red" }}>Xatolik!</div>
                    ) : null}
                  </div>
                </div>
              </label>
              <label className="sc-imWYAI_eGCxAi">
                <div class="label">Серия и номер заграничного паспорта</div>
                <div className="i_target">
                  <div className="input_body">
                    <input
                      type="text"
                      name="foreign_doc_number_serial"
                      placeholder=""
                      value={obj?.foreign_doc_number_serial}
                      onChange={(e) => {
                        setObj({
                          ...obj,
                          foreign_doc_number_serial: e.target.value,
                        });
                        setErrors({
                          ...errors,
                          foreign_doc_number_serial: false,
                        });
                      }}
                    />
                    {errors?.foreign_doc_number_serial ? (
                      <div style={{ color: "red" }}>Xatolik!</div>
                    ) : null}
                  </div>
                </div>
              </label>
            </div>
            <div class="btns">
              {loading ? (
                "Yuklanmoqda"
              ) : (
                <button type="submit" class="sc-dhKdcB_htJRq">
                  Сохранить
                </button>
              )}
            </div>
          </form>
        </div>
      </Step2Style>
    </>
  );
};
export default Step2;
