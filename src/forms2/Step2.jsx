import React from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import { Step2Style } from "./Step2Style";
import { useEffect, useState } from "react";

const Step2 = () => {
  const [Step, setStep] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    birthday: "",
    doc_type: "Passport",
    doc_number_serial: "",
    doc_given: "",
    foreign_doc_number_serial: "",
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    getStep();
  }, []);

  const getStep = () => {
    axios
      .get("https://apiinson.yarbek.uz/api/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        setStep(r.data);
        setFormData({
          name: r.data?.user?.name || "",
          first_name: r.data?.user?.first_name || "",
          last_name: r.data?.user?.last_name || "",
          middle_name: r.data?.user?.middle_name || "",
          birthday: r.data?.user?.birthday || "",
          doc_number_serial: r.data?.user?.doc_number_serial || "",
          doc_given: r.data?.user?.doc_given || "",
          foreign_doc_number_serial:
            r.data?.user?.foreign_doc_number_serial || "",
        });
      })
      .catch((e) => {})
      .finally(() => {});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Step2Style>
        <div className="content">
          <form onSubmit={onSubmit}>
            <div className="sc-klVQfs_bmxtkv">
              <>
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
                        value={formData?.name}
                        onChange={handleChange}
                        // placeholder="+998"
                        formatChars={{
                          n: "[0-9]",
                          a: "[A-Za-z]",
                        }}
                      />
                    </div>
                  </div>
                </label>

                <label className="sc-imWYAI_eGCxAi">
                  <div class="label">Фамилия</div>
                  <div className="i_target">
                    <div className="input_body">
                      <input
                        name="first_name"
                        placeholder=""
                        value={formData?.first_name}
                      />
                    </div>
                  </div>
                </label>
                <label className="sc-imWYAI_eGCxAi">
                  <div class="label">Имя</div>
                  <div className="i_target">
                    <div className="input_body">
                      <input
                        name="first_name"
                        placeholder=""
                        value={formData?.first_name}
                      />
                    </div>
                  </div>
                </label>
                <label className="sc-imWYAI_eGCxAi">
                  <div class="label">Отчество</div>
                  <div className="i_target">
                    <div className="input_body">
                      <input
                        type=""
                        name="middle_name"
                        placeholder=""
                        value={formData?.middle_name}
                      />
                    </div>
                  </div>
                </label>
                <label className="sc-imWYAI_eGCxAi">
                  <div class="label">Дата рождения</div>
                  <div className="i_target">
                    <div className="input_body">
                      <input
                        type=""
                        name="birthday"
                        placeholder=""
                        value={formData?.birthday}
                      />
                    </div>
                  </div>
                </label>
              </>
            </div>

            <div className="sc-klVQfs_bmxtkv">
              <div className="sc-jXbUNg_duTnwm">
                <b>Паспортные</b> данные
              </div>
              <label className="sc-imWYAI_eGCxAi">
                <div class="label">Тип документа</div>
                <div className="i_target">
                  <div className="input_body">
                    <select
                      placeholder="Passport"
                      name="doc_type"
                      value={formData?.doc_type}
                    >
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
                      mask="aa"
                      placeholder="AA1234567"
                      name="doc_number_serial"
                      formatChars={{
                        a: "[A-Za-z]",
                        "*": "[A-Za-z0-9]",
                      }}
                      value={formData?.doc_number_serial}
                    />
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
                      value={formData?.doc_given}
                    />
                  </div>
                </div>
              </label>
              <label className="sc-imWYAI_eGCxAi">
                <div class="label">Серия и номер заграничного паспорта</div>
                <div className="i_target">
                  <div className="input_body">
                    <input
                      type=""
                      name="foreign_doc_number_serial"
                      placeholder=""
                      value={formData?.foreign_doc_number_serial}
                    />
                  </div>
                </div>
              </label>
            </div>
            <div class="btns">
              <button type="submit" class="sc-dhKdcB_htJRq">
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </Step2Style>
    </>
  );
};
export default Step2;
