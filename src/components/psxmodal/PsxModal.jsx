import React, { useEffect, useState } from "react";
import "./psxmodal.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { StyledEngineProvider } from '@mui/material/styles';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import { TextField } from "@mui/material";
import dayjs from "dayjs";

// _________________________________________________

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
// const fullTime = ["2023-2-17", "2023-2-23", "2023-2-31", "2023-2-19","2023-3-19"];
function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }} className="psxmodal_bigdiv">
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function PsxModal(props) {
  const handleClose = () => {
    props.setOpen(false);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // ________________________________________________________________________
  const [fullTime, setFullTime] = useState([props.index.busy_dates]);
  console.log(fullTime, "fulltime");
  // console.log(props.index.busy_dates[0])
  console.log(props.index.busy_dates);
  // useEffect(()=>{
  // console.log(props.index.busy_dates)

  // },[])
  // ________________________________________________________

  const [value, setValue] = useState(new Date());
  // console.log(value.getDate());
  // console.log(value.getFullYear());
  // console.log(value.getMonth());

  const [availableDates, setAvailableDates] = useState([]);
  const [dataa, setDataa] = useState("");
  useEffect(() => {
    const data = `${value.getFullYear()}-${value.getMonth()}-${value.getDate()}`;
    setDataa(data);
    // console.log('data',data,typeof(data))
    setAvailableDates([...availableDates, dataa]);

    console.log("avla", availableDates);
  }, [value]);
  // const availableDates = [
  //   '2023-03-03',
  //   '2023-03-07' // October 10, 2022
  // ];
  // function renderDay(date, _selectedDate, _dayInCurrentMonth, dayComponent) {

  //   const formattedDate = dayjs(date).format('YYYY-MM-DD');
  //   const isAvailable = availableDates.includes(formattedDate);
  //   const className = isAvailable ? 'available-date' : 'unavailable-date';
  //   const handleClick = () => {
  //     console.log(`Clicked date: ${formattedDate}, available: ${isAvailable}`);
  //   };
  //   return React.cloneElement(dayComponent, {
  //     className,
  //     onClick: handleClick,
  //     day: formattedDate,
  //   });
  // }
  function renderDay(date, _selectedDate, _dayInCurrentMonth, dayComponent) {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    console.log(date, "date");
    const isAvailable = availableDates.includes(formattedDate);
    const className = isAvailable ? "available-date" : "unavailable-date";
    const handleClick = () => {
      console.log(`Clicked date: ${formattedDate}, available: ${isAvailable}`);
    };
    return React.cloneElement(dayComponent, {
      className,
      onClick: handleClick,
      day: formattedDate,
    });
  }
  return (
    <>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <p onClose={handleClose}>Bağla</p>
          <div className="psx_modal_select1">
            <p>Psixoloq ad,Soyadı</p>

            <div className="psx_modal_select_name">
              {/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ad</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}
              {props.index?.name}
            </div>
          </div>
          <div className="psx_modal_select1">
            <p>Vaxt Təyin edin</p>
            <div className="psx_modal_calendar">
              <div className="psx_modal_calendar_date">
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
                    shouldDisableDate={
                      (e) => {
                        //  console.log(
                        // props.index.busy_dates.map((a) => console.log(a.date));
                        // props.index.busy_dates.includes(`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`)
                        // props.index.busy_dates.filter(
                        //   (a) =>
                        //     a.date ==
                        //     `${e.getFullYear()}-0${e.getMonth()}-${e.getDate()}`
                        // ),
                        // `${e.getFullYear()}-0${e.getMonth()}-${e.getDate()}`
                        //  );
                      // }
                      // {
                      //   props.index.busy_dates &&  props.index.busy_dates.map((i,key)=>{
                      //     if(i.date!==`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`){
                      //       console.log('tru')
                      //     }
                      //   })
                      // }
                
                    }
                  }
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>

          <ChildModal />
        </Box>
      </Modal>
    </>
  );
}

export default PsxModal;
