import React, { useContext, useState } from "react";
import "./psxmodal.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { StyledEngineProvider } from '@mui/material/styles';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { TextField } from "@mui/material";
// import dayjs from "dayjs";
// import { AddAPhotoOutlined } from "@mui/icons-material";
// import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
// _________________________________________________
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { data } from "../../api/data";
import AuthContext from "../../context/AuthProvider";
// ______________________________________________

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
// const fullTime = ["2023-2-17", "2023-2-23", "2023-2-31", "2023-2-19","2023-3-19"];
// function ChildModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>Ok</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 500 }} className="psxmodal_bigdiv">
//           <h3 id="child-modal-title">Melumat qeyde alindi</h3>
//           <Button onClick={handleClose}>Ok</Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }

function PsxModal(props) {
  // const { auth, setAuth } = useContext(AuthContext);
  const auth = JSON.parse(localStorage.getItem("auth"));

  const [timeValue, setTimeValue] = useState({});
  const handleClose = () => {
    setTimeValue({
      time: "",
      date: "",
      doctor: 0,
      patient: 0,
    });

    props.setOpen(false);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // ________________________________________________________________________
  // const [fullTime, setFullTime] = useState([props.index.busy_dates]);

  // console.log(fullTime, "fulltime");
  // console.log(props.index.busy_dates, "date");
  // ________________________________________________________

  // const [value, setValue] = useState(new Date());
  // console.log(value.getDate());
  // console.log(value.getFullYear());
  // console.log(value.getMonth());

  // const [availableDates, setAvailableDates] = useState([]);
  // const [dataa, setDataa] = useState("");
  // useEffect(() => {
  //   const data = `${value.getFullYear()}-${value.getMonth()}-${value.getDate()}`;
  //   setDataa(data);
  //   setAvailableDates([...availableDates, dataa]);

  //   console.log("avla", availableDates);
  // }, [value]);

  // function renderDay(date, _selectedDate, _dayInCurrentMonth, dayComponent) {
  //   const formattedDate = dayjs(date).format("YYYY-MM-DD");
  //   console.log(date, "date");
  //   const isAvailable = availableDates.includes(formattedDate);
  //   const className = isAvailable ? "available-date" : "unavailable-date";
  //   const handleClick = () => {
  //     console.log(`Clicked date: ${formattedDate}, available: ${isAvailable}`);
  //   };
  //   return React.cloneElement(dayComponent, {
  //     className,
  //     onClick: handleClick,
  //     day: formattedDate,
  //   });
  // }
  const [open1, setOpen1] = React.useState(false);

  const handleClose1 = () => {
    setTimeValue({
      time: "",
      date: "",
      doctor: 0,
      patient: 0,
    });
    setOpen1(false);
  };
  // ________________________________________________________________________
  function groupDatesByThree(dates) {
    let groups = [];
    for (let i = 0; i < dates.length; i += 3) {
      groups.push(dates.slice(i, i + 3));
    }
    return groups;
  }

  const [color, setColor] = useState(false);
  const handleOpen1 = () => {
    data
      .getByPost("user_session", timeValue)
      .then((res) => {
        console.log(res);
        setOpen1(true);
      })
      .catch((err) => {
        alert("Məlumatlar seçilmiyib");
      });
  };

  return (
    <>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Box className="psx_close_btn">
            <Button onClick={handleClose}>X</Button>
          </Box>
          <div className="psx_modal_select1">
            <p>Psixoloq ad,soyadı</p>

            <div className="psx_modal_select_name">
              {props.index?.name} {props.index?.surname}
            </div>
          </div>
          <div className="psx_modal_select1">
            <p className="psx_modal_select_p">Vaxt Təyin edin</p>

            {/* <FormControl className="psx_modal_select_form">
              <InputLabel id="demo-simple-select-label">Tarix</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                {props.index.free_dates &&
                  groupDatesByThree(
                    props.index.free_dates
                      .map((i) => new Date(i.date))
                      .sort((a, b) => a - b)
                  ).map((group) => (
                    <MenuItem value={group[0].getTime()}>
                      {group
                        .map((date) => date.toLocaleDateString())
                        .join(" / ")}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl> */}

            <div className="psx_modal_calendar">
              {/* <div className="psx_modal_calendar_date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    disablePast
                    renderInput={(params) => <TextField {...params} />}
                    availableDates={availableDates}
                    renderDay={renderDay}
                    minDate={new Date().getDate() - 1}
                    shouldDisableDate={(e) => {
                      for (let i = 0; i < props.index.busy_dates.length; i++) {
                        if (
                          props.index.busy_dates[i].date ==
                          `${e.getFullYear()}-${
                            e.getMonth() > 8
                              ? `${e.getMonth() + 1}`
                              : `0${e.getMonth() + 1}`
                          }-${e.getDate()}`
                        ) {
                          return true;
                        }
                      }
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="psx_modal_calendar_time">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticTimePicker orientation="landscape" />
                </LocalizationProvider>
              </div> */}

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {props.index.free_dates &&
                        props.index.free_dates
                          .map((i) => new Date(i.date)) // tarihleri Date nesnesine dönüştür
                          .sort((a, b) => a - b) // tarihleri doğru şekilde sırala
                          .map((date, index) => (
                            <TableCell key={index}>
                              {date.toLocaleDateString()}
                            </TableCell>
                          ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.index.free_dates &&
                      props.index.free_dates
                        .map((row) => new Date(row.date)) // Convert dates to Date objects
                        .sort((a, b) => a - b) // Sort dates in ascending order
                        .map((date) => {
                          // For each date, filter and sort rows by time
                          const rows = props.index.free_dates.filter(
                            (row) =>
                              new Date(row.date).getTime() === date.getTime()
                          );
                          rows.sort((a, b) =>
                            a.free_hours[0].start_time.localeCompare(
                              b.free_hours[0].start_time
                            )
                          );

                          return (
                            <TableCell key={date}>
                              {rows.map((row) => (
                                <TableCell key={row.date}>
                                  {row.free_hours.map((hour) => (
                                    <TableRow
                                      key={hour.start_time}
                                      align="right"
                                    >
                                      <Button
                                        className="table_time_button"
                                        value={hour.start_time}
                                        onClick={() =>
                                          setTimeValue({
                                            time: hour.start_time,
                                            date: row.date,
                                            doctor: props.index.id,
                                            patient: auth?.user_id,
                                          })
                                        }
                                      >
                                        {hour.start_time}
                                      </Button>
                                    </TableRow>
                                  ))}
                                </TableCell>
                              ))}
                            </TableCell>
                          );
                        })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          {/* _____________________________________________________________________________________ */}
          <React.Fragment>
            <Box className="psx_date_ok_btn">
              <Box className="psx_close_btn1">
                <Button onClick={handleOpen1}>Təsdiqlə</Button>
              </Box>
            </Box>
            <Modal
              open={open1}
              onClose={handleClose1}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box sx={{ ...style, width: 500 }} className="psxmodal_bigdiv">
                <h3 id="child-modal-title">Melumat qeyde alindi</h3>
                <h4>Tezliklə sizinlə əlaqə saxlanılacaq.</h4>
                <div
                  className="psx_modal_select_name"
                  style={{ textAlign: "center" }}
                >
                  <b>
                    {" "}
                    {props.index?.name} {props.index?.surname}
                  </b>
                  <br />
                  {timeValue.date}
                  <br />
                  {timeValue.time}
                </div>
                <Button onClick={handleClose1}>Ok</Button>
              </Box>
            </Modal>
          </React.Fragment>
        </Box>
      </Modal>
    </>
  );
}

export default PsxModal;
