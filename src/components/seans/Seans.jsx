import React from "react";
import { useForm } from "react-hook-form";
import "./seans.scss";
function Seans() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <>
      <section className="seans_bigdiv">
        <form onSubmit={handleSubmit(onSubmit)} className="seans_minidiv">
     
          <input 
          type="text" 
          placeholder="Ad Soyad" 
          {...register("text", { required:'*Zehmet olmasa xanani doldurun.' })}
          />
         <p> {errors.text && <span>{errors.text.message}</span>}</p>
          <input type="tel" name="phone" placeholder="+994(50) xxx xx xx"   {...register("number", { required:'*Zehmet olmasa xanani doldurun.' })}/>
          <p> {errors.number && <span>{errors.number.message}</span>}</p>
          <input type="tel" name="phone" placeholder="+994(50) xxx xx xx"  {...register("number", { required:'*Zehmet olmasa xanani doldurun.' })} />
          <p> {errors.number && <span>{errors.number.message}</span>}</p>
          <input placeholder=" Hekimin ad,soyadı" type="text"   {...register("number", { required:'*Zehmet olmasa xanani doldurun.' })} />
          <p> {errors.text && <span>{errors.text.message}</span>}</p>

          <input type="date" className="inp_date"  {...register("date", { required:'*Zehmet olmasa xanani doldurun.' })}/>
          <p> {errors.date && <span>{errors.date.message}</span>}</p>

          <input type="time"  className="inp_date"   {...register("time", { required:'*Zehmet olmasa xanani doldurun.' })}/>
          <p> {errors.time && <span>{errors.time.message}</span>}</p>
          <div className="add">
            <input type="submit" value="Submit" />
          </div>
        </form>

       
      </section>
    </>
  );
}

export default Seans;
