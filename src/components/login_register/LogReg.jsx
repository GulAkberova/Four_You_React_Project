import React, { useContext, useState } from "react";
import "../login_register/logreg.scss";
import lr_img from "../../assets/image/login.png";
import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import { useForm } from "react-hook-form";
import { data } from "../../api/data";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/AuthProvider";

function LogReg() {
  const { auth, setAuth } = useContext(AuthContext);
  let navigate = useNavigate();
  const [panel, SetPanel] = useState(true);
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm();

  const onSubmit = (index) => {
    data
      .getByPost("user_login", index)
      .then((res) => {
        const access = res?.tokens?.access;
        const refresh = res?.tokens?.refresh;
        const user_id = res?.id;
        localStorage.setItem(
          "auth",
          JSON.stringify({ index, access, refresh, user_id })
        );
        setAuth({ index, access, refresh, user_id });
        alert("Qeydiyyat olundu");
        navigate("/psx");
      })
      .catch((err) => {
        alert("Email ya password yanlışdı");
      });
  };

  console.log("auth", auth);

  const onSubmitR = (index) => {
    data
      .getByPost("user_register", index)
      .then((res) => {
        navigate("/email", { state: { email: res.email } });
        console.log(res, "emaillll yoxlama aaaaaaaaaaaaaaaaaa");
      })
      .catch((err) => {
        console.log("err", err);
        alert("Nömrə və ya şifrə yanlışdır");
      });
  };

  return (
    <>
      <section className="logreg_bigdiv">
        <div className="logreg_minidiv">
          <div className="logreg_img">
            <img src={lr_img} />
          </div>
          <div className="logreg_text ">
            {panel ? (
              // ____________________Panel Login________________________________}
              <div className="logreg_text_div">
                <h1>Giriş</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label>Email</label>
                    <br />
                    <input
                      //   type="tel"
                      //   placeholder="+994503421558"
                      //   {...register("phone_number", {
                      //     required: "*Zəhmət olmasa xananı doldurun.",
                      //     pattern: {
                      //       value: /^\+994(50|51|55|70|77)\d{7}$/,
                      //       message:
                      //         "Zəhmət olmasa doğru telefon nömrəsi daxil edin. (Nümunə: +994503421558)",
                      //     },
                      //   })}
                      //   className={formState.errors.phone_number ? "error" : ""}
                      // />
                      // {formState.errors.phone_number && (
                      //   <p className="error-message">
                      //     <span> {formState.errors.phone_number.message}</span>
                      //   </p>
                      // )}
                      type="email"
                      placeholder="admin@gmail.com"
                      {...register("email", {
                        required: "*Zəhmət olmasa xananı doldurun.",
                      })}
                    />
                    <p>
                      {" "}
                      {errors.email && <span>{errors.email.message}</span>}
                    </p>
                  </div>

                  <div>
                    <label>Şifrə</label>
                    <br />
                    <input
                      type="password"
                      placeholder="Şifrə"
                      {...register("password", {
                        required: "*Zəhmət olmasa xananı doldurun.",
                      })}
                    />
                    <p>
                      {" "}
                      {errors.password && (
                        <span>{errors.password.message}</span>
                      )}
                    </p>
                  </div>

                  <div className="add">
                    <button className="btn1">Daxil ol</button>
                    <button className="btn2" onClick={(e) => SetPanel(false)}>
                      Qeydiyyat
                    </button>
                  </div>
                  <div className="or">
                    <p>və ya</p>
                  </div>
                  <div className="icon">
                    <a href="https://4youkid.com/">
                      <img src={google} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100090458100624&mibextid=ZbWKwL">
                      <img src={facebook} />
                    </a>
                    <a href="https://www.instagram.com/4you_az/">
                      <img src={instagram} />
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              // _________________Panel Register_____________________________
              <div>
                <div className="logreg_text_div">
                  <h1>Qeydiyyatdan Keç</h1>
                  <form onSubmit={handleSubmit(onSubmitR)}>
                    {/* ___________________Name_____________________ */}
                    <div>
                      <label>Ad</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Ad"
                        {...register("name", {
                          required: "*Zəhmət olmasa xananı doldurun.",
                        })}
                      />
                      <p>
                        {" "}
                        {errors.name && <span>{errors.name.message}</span>}
                      </p>
                    </div>
                    {/* __________________Surname________________________ */}
                    <div>
                      <label>Soyad</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Soyad"
                        {...register("surname", {
                          required: "*Zəhmət olmasa xananı doldurun.",
                        })}
                      />
                      <p>
                        {" "}
                        {errors.surname && (
                          <span>{errors.surname.message}</span>
                        )}
                      </p>
                    </div>

                    {/* ___________________Phone___________________ */}
                    <div>
                      <label>Email</label>
                      <br />

                      {/* <input
                        type="tel"
                        placeholder="+994503421558"
                        {...register("phone_number", {
                          required: "*Zəhmət olmasa xananı doldurun.",
                          pattern: {
                            value: /^\+994(50|51|55|70|77)\d{7}$/,
                            message:
                              "Zəhmət olmasa doğru telefon nömrəsi daxil edin. (Nümunə: +994503421558)",
                          },
                        })}
                        className={formState.errors.phone_number ? "error" : ""}
                      />
                      {formState.errors.phone_number && (
                        <p className="error-message">
                          <span> {formState.errors.phone_number.message}</span>
                        </p>
                      )}
                    
                    </div> */}
                      <input
                        type="email"
                        placeholder="admin@gmail.com"
                        {...register("email", {
                          required: "*Zəhmət olmasa xananı doldurun.",
                        })}
                      />
                      <p>
                        {" "}
                        {errors.email && <span>{errors.email.message}</span>}
                      </p>
                    </div>

                    <div>
                      <label>Şifrə</label>
                      <br />
                      <input
                        type="password"
                        placeholder="Şifrə"
                        {...register("password", {
                          required: "*Zəhmət olmasa xananı doldurun.",
                        })}
                      />
                      <p>
                        {" "}
                        {errors.password && (
                          <span>{errors.password.message}</span>
                        )}
                      </p>
                    </div>

                    {/* <label>
                      <i className="fa-solid fa-lock"></i>
                    </label> */}
                    {/* <input
                      type="password"
                      placeholder="Sifre tekrari"
                      {...register("password", {
                        required: "*Zəhmət olmasa xananı doldurun.",
                      })}
                    />
                    <p>
                      {errors.password && (
                        <span>{errors.password.message}</span>
                      )}
                    </p> */}

                    <div className="add">
                      <button className="btn1">Hesab yaradın</button>
                      <button className="btn2" onClick={(e) => SetPanel(true)}>
                        Daxil ol{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default LogReg;
