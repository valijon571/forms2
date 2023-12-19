import React from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import { Step2Style } from "./Step2Style";
import { useEffect, useState } from "react";

const Step2 = () => {
  const [Step, setStep] = useState([]);
  const [loading, setLoading] = useState(false);
  const [post_loading, setPostLoading] = useState(false);
  const [errors, setErrors] = useState({});
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
    setLoading(true);
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
          doc_type: r.data?.user?.doc_type || "",
          doc_number_serial: r.data?.user?.doc_number_serial || "",
          doc_given: r.data?.user?.doc_given || "",
          foreign_doc_number_serial:
            r.data?.user?.foreign_doc_number_serial || "",
        });
      })
      .catch((e) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setPostLoading(true);
    let t = true,
      err = {};
    if (!formData.name) {
      t = false;
      err = { ...err, name: true };
    }
    if (!formData.first_name) {
      t = false;
      err = { ...err, first_name: true };
    }
    if (!formData.last_name) {
      t = false;
      err = { ...err, last_name: true };
    }
    if (!formData.middle_name) {
      t = false;
      err = { ...err, middle_name: true };
    }
    if (!formData.birthday) {
      t = false;
      err = { ...err, birthday: true };
    }
    if (!formData.doc_type) {
      t = false;
      err = { ...err, doc_type: true };
    }
    if (!formData.doc_number_serial) {
      t = false;
      err = { ...err, doc_number_serial: true };
    }
    if (!formData.doc_given) {
      t = false;
      err = { ...err, doc_given: true };
    }
    if (!formData.foreign_doc_number_serial) {
      t = false;
      err = { ...err, foreign_doc_number_serial: true };
    }
    if (t) {
      axios
        .post("https://apiinson.yarbek.uz/api/v1/auth/profile", formData, {
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
            doc_type: r.data?.user?.doc_type || "",
            doc_number_serial: r.data?.user?.doc_number_serial || "",
            doc_given: r.data?.user?.doc_given || "",
            foreign_doc_number_serial:
              r.data?.user?.foreign_doc_number_serial || "",
          });
        })
        .catch((e) => {})
        .finally(() => {
          setPostLoading(false);
        });
    } else {
      setPostLoading(false);
      setErrors(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <>
      <Step2Style>
        <div className="content">
          <form onSubmit={onSubmit}>
            {loading ? (
              <div>Yuklanmoqda.....</div>
            ) : (
              <div>
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
                          value={formData?.name}
                          // onChange={handleChange}
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
                          onChange={handleChange}
                        />
                        {errors.first_name && (
                          <span className="error">{errors.first_name}</span>
                        )}
                      </div>
                    </div>
                  </label>
                  <label className="sc-imWYAI_eGCxAi">
                    <div class="label">Имя</div>
                    <div className="i_target">
                      <div className="input_body">
                        <input
                          name="last_name"
                          placeholder=""
                          value={formData?.last_name}
                          onChange={handleChange}
                        />
                        {errors.last_name && (
                          <span className="error">{errors.last_name}</span>
                        )}
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
                          onChange={handleChange}
                        />
                        {errors.middle_name && (
                          <span className="error">{errors.middle_name}</span>
                        )}
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
                          onChange={handleChange}
                        />
                        {errors.birthday && (
                          <span className="error">{errors.birthday}</span>
                        )}
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
                        <select
                          placeholder="Passport"
                          name="doc_type"
                          value={formData?.doc_type}
                          onChange={handleChange}
                        >
                          {errors.doc_type && (
                            <span className="error">{errors.doc_type}</span>
                          )}
                          <option hidden="">Passport</option>
                          <option value="1">Passport</option>
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
                          onChange={handleChange}
                        />
                        {errors.doc_number_serial && (
                          <span className="error">
                            {errors.doc_number_serial}
                          </span>
                        )}
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
                          onChange={handleChange}
                        />
                        {errors.doc_given && (
                          <span className="error">{errors.doc_given}</span>
                        )}
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
                          onChange={handleChange}
                        />
                        {errors.foreign_doc_number_serial && (
                          <span className="error">
                            {errors.foreign_doc_number_serial}
                          </span>
                        )}
                      </div>
                    </div>
                  </label>
                </div>

                <div class="btns">
                  {post_loading ? (
                    <span class="sc-dhKdcB_htJRq"> "Yuklanmoqda"</span>
                  ) : (
                    <button type="submit" class="sc-dhKdcB_htJRq">Сохранить</button>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>
      </Step2Style>
    </>
  );
};
export default Step2;
