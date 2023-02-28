import React, { useState } from "react";
import "../login_register/logreg.scss";
import lr_img from "../../img/logreg.jpg";
import { useForm } from "react-hook-form";
import { data } from '../../api/data'
import { useNavigate } from "react-router-dom";
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
                <h1>Giris</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label>
                    <i className="fa-solid fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    placeholder="username0@gmail.com"
                    {...register("email", {
                      required: "*Zehmet olmasa xanani doldurun.",
                    })}
                  />
                  <p> {errors.email && <span>{errors.email.message}</span>}</p>

                  <label>
                    <i className="fa-solid fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    placeholder="Sifre"
                    {...register("password", {
                      required: "*Zehmet olmasa xanani doldurun.",
                    })}
                  />
                  <p>
                    {" "}
                    {errors.password && <span>{errors.password.message}</span>}
                  </p>

                

                  <div className="add">
                    <button className="btn1">Giris et</button>
                    <button className="btn2" onClick={(e) => SetPanel(false)}>
                     Register
                    </button>
                  </div>
                  <div className="or">
                    <p>Or</p>
                  </div>
                  <div className="icon">
                    <p>
                      <i className="fa-brands fa-google"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-facebook-f"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-instagram"></i>
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              // _________________Panel Register_____________________________
              <div>
                <div className="logreg_text_div">
                  <h1>Qeydiyyat</h1>
                  <form onSubmit={handleSubmit(onSubmitR)}>
                    {/* ___________________Name_____________________ */}
                    <label>
                      <i className="fa-solid fa-user"></i>
                    </label>
                    <input
                      type="text"
                      placeholder="Ad"
                      {...register("name", {
                        required: "*Zehmet olmasa xanani doldurun.",
                      })}
                    />
                    <p> {errors.name && <span>{errors.name.message}</span>}</p>

                    {/* __________________Surname________________________ */}
                    <label>
                      <i className="fa-solid fa-user"></i>
                    </label>
                    <input
                      type="text"
                      placeholder="Ad"
                      {...register("surname", {
                        required: "*Zehmet olmasa xanani doldurun.",
                      })}
                    />
                    <p> {errors.surname && <span>{errors.surname.message}</span>}</p>

                    {/* __________________Email______________________ */}

                    <label>
                      <i className="fa-solid fa-envelope"></i>
                    </label>
                    <input
                      type="email"
                      placeholder="username0@gmail.com"
                      {...register("email", {
                        required: "*Zehmet olmasa xanani doldurun.",
                      })}
                    />
                    <p>
                      {errors.email && <span>{errors.email.message}</span>}
                    </p>

                    {/* ___________________Phone___________________ */}
                    <label>
                      <i className="fa-solid fa-envelope"></i>
                    </label>
                    <input
                      type="phone"
                      placeholder="+994 00 000 00 00"
                      {...register("phone_number", {
                        required: "*Zehmet olmasa xanani doldurun.",
                      })}
                    />
                    <p>
                      {errors.phone_number
 && <span>{errors.phone_number
.message}</span>}
                    </p>

                    <label>
                      <i className="fa-solid fa-unlock"></i>
                    </label>
                    <input
                      type="password"
                      placeholder="Sifre"
                      {...register("password", {
                        required: "*Zehmet olmasa xanani doldurun.",
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
                        required: "*Zehmet olmasa xanani doldurun.",
                      })}
                    />
                    <p>
                      {errors.password && (
                        <span>{errors.password.message}</span>
                      )}
                    </p> */}

                    <div className="add">
                      <button className="btn1">Giris et</button>
                      <button className="btn2" onClick={(e) => SetPanel(true)}>
                        Login
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
