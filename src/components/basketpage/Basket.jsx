import React from "react";
import "../basketpage/basket.scss";
// import hekim1 from '../../img/Rectangle\ 55.png'
// import hekim2 from '../../img/Rectangle\ 55 (1).png'
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, remove } from "../../store/cartSlice";
import Swal from "sweetalert2";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Basket() {
  let {cart}=useSelector(state=>state.CartReducer)

  let dispatch =useDispatch()

   let totalPrice=0

   cart.forEach(element => {
    totalPrice=totalPrice +(element.quantity * element.price)
    
   });

   const handleRemove=(item)=>{
    Swal.fire({
      title: "Silmək istədiyinizdən əminsinizmi ?",
      text: "Bu əməliyyat geri alına bilməz.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli",
      cancelButtonText: "Xeyr",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(remove(item))
        Swal.fire("Silindi!", "Məhsul silindi.", "success");
      }
    });
   }

  return (
    <>
      <section className="carusel">
        <h1>Səbətim</h1>
      </section>
      <div className="mehsul_div">
        <h2>Məhsul</h2>
      </div>
      <section className="mehsul_bigdiv">
        {/* <table >
         <thead>
         <tr>
            <th>Mehsul</th>
            <th>Mehsulun adi</th>
            <th>Qiymet</th>
            <th>Say</th>
            <th>Umumi</th>
            <th>Sil</th>

          </tr>
         </thead>
        <tbody>
        {
            cart && cart.map((item,key)=>(
              <tr key={key}>
                <td>dxv</td>
                <td>{item.title}</td>
                <td>{item.price}m</td>
                <td>
            <button onClick={()=>dispatch(decrease(item.id))}>-</button>
             <span> {item.quantity}</span>
             <button onClick={()=>dispatch(increase(item.id))}>+</button>
              </td>
              <td>{(item.price * item.quantity).toFixed(2)}m</td>
            <td><button onClick={()=>handleRemove(item)}><i className="fa-solid fa-x"></i></button></td>
              </tr>

            ))
          }
        </tbody>
        </table> */}
     


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Məhsul</TableCell>
              <TableCell align="center">Məhsulun adı</TableCell>
              <TableCell align="center">Qiymət</TableCell>
              <TableCell align="center">Say</TableCell>
              <TableCell align="center">Ümumi</TableCell>
              <TableCell align="center">Sil</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            { cart && cart.map((item,key)=>(
              <TableRow
              key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                {item.title}
                </TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.price}m</TableCell>
              
                <TableCell align="center">
                <button onClick={()=>dispatch(decrease(item.id))}>-</button>
             <span> {item.quantity}</span>
             <button onClick={()=>dispatch(increase(item.id))}>+</button>
                </TableCell>
                <TableCell align="center">
                {(item.price * item.quantity).toFixed(2)}m
                </TableCell>
                <TableCell align="center">
                <button onClick={()=>handleRemove(item)}><i className="fa-solid fa-x"></i></button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      </section>
      {/* <div className="mehsul_div">
        <h2>Seans</h2>
      </div>
      <section className="mehsul_bigdiv">
        <table >
          <tr>
            <th>Psixoloq</th>
            <th>Psixoloqun adi</th>
            <th>Qiymet</th>
            <th>Say</th>
            <th>Umumi</th>
            <th>Sil</th>

          </tr>
          <tr>
            <td><img src={hekim2} /></td>
            <td>Sibel Priyeva</td>
            <td>50m</td>
            <td>2ed</td>
            <td>100m</td>
            <td><button><i className="fa-solid fa-x"></i></button></td>
          </tr>
          <tr>
            <td><img src={hekim1} /></td>
            <td>Kənan Hüseynli</td>
            <td>50m</td>
            <td>2ed</td>
            <td>100m</td>
            <td><button><i className="fa-solid fa-x"></i></button></td>
          </tr>
        
        </table>
      </section> */}


      <section className="all_sum">
        <h1>Cəm:{totalPrice.toFixed(2)}</h1>
        <button>Təsdiqlə</button>

      </section>
    </>
  );
}

export default Basket;
