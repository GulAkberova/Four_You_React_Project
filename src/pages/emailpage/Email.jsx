import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "../../api/data";
import "./email.scss";
function Email() {
  let location = useLocation();
  let navigate = useNavigate();

  const [confirmCode, setconfirmCode] = useState("");
  const confirm = () => {
    data
      .getByPost("verify", {
        activation_code: confirmCode,
        email: location.state.email,
      })
      .then((res) => {
        localStorage.setItem("tokens", res.tokens);
        console.log(res);
        console.log(confirmCode);
        navigate("/logreg");
      })
      .catch((err) => {
        alert("Confirm Code Error!");
      });
  };

  return (
    <>
      <div className="email_bigdiv">
        <div className="email_minidiv">
          <h1>Verify</h1>
          <input type="text" onChange={(e) => setconfirmCode(e.target.value)} />
          <div className="email_btndiv">
            <button onClick={confirm}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Email;
