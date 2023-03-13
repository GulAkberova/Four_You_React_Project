import React, { useState } from "react";
import "../login_register/logreg.scss";
import lr_img from "../../assets/image/login.png";
import google from '../../assets/icons/google.png'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import { useForm } from "react-hook-form";
import { data } from '../../api/data'
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function LogReg() {
  const {auth,setAuth}=useAuth()
  let navigate = useNavigate();
  const [panel, SetPanel] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (index) => {
    data.getByPost('login',index)
    .then((res)=>{
     alert('Qeydiyyat olundu')
    const access=res?.tokens?.access;
    const refresh=res?.tokens?.refresh;
    setAuth({index,access,refresh })
    
    navigate('/')

    })
    .catch(err=>{
      alert('Email ya password yanlisdi')

    })

  };

console.log('auth',auth)

  const onSubmitR = (index) => {
    data.getByPost('register',index)
      .then((res) =>{
        navigate("/email",{state:{email:res.email}});
        console.log(res)

      })
      .catch(err=>{
        console.log('err',err)
        alert('Email or password invalid')
      })
  };
  // const goTo=()=>{
  //   navigate('/email')

  // }

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
                  <label>
                  Əlaqə nömrəsi
                  </label><br/>
                  <input
                    type="email"
                    placeholder="+994 (50)- 323-23-23"
                    {...register("email", {
                      required: "*Zəhmət olmasa xananı doldurun.",
                    })}
                  />
                  <p> {errors.email && <span>{errors.email.message}</span>}</p>

                  <label>
                  Şifrə
                  </label><br/>
                  <input
                    type="password"
                    placeholder="Şifrə"
                    {...register("password", {
                      required: "*Zəhmət olmasa xananı doldurun.",
                    })}
                  />
                  <p>
                    {" "}
                    {errors.password && <span>{errors.password.message}</span>}
                  </p>

                

                  <div className="add">
                    <button className="btn1">Giriş Et</button>
                    <button className="btn2" onClick={(e) => SetPanel(false)}>
                    Qeydiyyat
                    </button>
                  </div>
                  <div className="or">
                    <p>və ya</p>
                  </div>
                  <div className="icon">
                    <NavLink>
                     <img src={google}/>
                    </NavLink>
                    <NavLink>
                    <img src={facebook}/>
                    </NavLink>
                    <NavLink>
                    <img src={instagram}/>
                    </NavLink>
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
                    <label>
                    Ad
                    </label><br/>
                    <input
                      type="text"
                      placeholder="Ad"
                      {...register("name", {
                        required: "*Zəhmət olmasa xananı doldurun.",
                      })}
                    />
                    <p> {errors.name && <span>{errors.name.message}</span>}</p>

                    {/* __________________Surname________________________ */}
                    <label>
                    Soyad
                    </label><br/>
                    <input
                      type="text"
                      placeholder="Soyad"
                      {...register("surname", {
                        required: "*Zəhmət olmasa xananı doldurun.",
                      })}
                    />
                    <p> {errors.surname && <span>{errors.surname.message}</span>}</p>

                

                    {/* ___________________Phone___________________ */}
                    <label>
                    Əlaqə nömrəsi
                    </label><br/>
                    <input
                      type="phone"
                      placeholder="+994 00 000 00 00"
                      {...register("phone_number", {
                        required: "*Zəhmət olmasa xananı doldurun.",
                      })}
                    />
                    <p>
                      {errors.phone_number
 && <span>{errors.phone_number
.message}</span>}
                    </p>

                    <label>
                    Şifrə
                    </label><br/>
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
                      <button className="btn1">Giriş Et</button>
                      <button className="btn2" onClick={(e) => SetPanel(true)}>
                      Qeydiyyat
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
