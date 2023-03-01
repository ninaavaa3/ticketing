import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import {useDispatch} from 'react-redux';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import classes from "./Domesticflight.module.css";
import moment from 'jalali-moment';
// import Karoon from "../../../../assets/images/Karoon.png";
// import Kaspian from "../../../../assets/images/Kaspian.png";
import DomesticFilghtData from "./DomesticFlightData";
import DtPicker from 'react-calendar-datetime-picker';
import 'react-calendar-datetime-picker/dist/index.css';
//---------- material ui import -----------------
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const Domesticflight = (props) => {
    const [selectedDayback, setSelectedDayback] = useState(null);
    const [selectedDaygo, setSelectedDaygo] = useState(null);
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    

    const navigate = useNavigate();
    const minimumDate = {
        year: Number(moment().locale('fa').format('YYYY')),
        month: Number(moment().locale('fa').format('MM')),
        day: Number(moment().locale('fa').format('DD'))
    };

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 14)
    // console.log(moment(maxDate).locale('fa').format('YYYY/MM/DD hh:mm:ss'));
    // const maximumDate = {
    //     year: Number(moment(maxDate).locale('fa').format('YYYY')),
    //     month: Number(moment(maxDate).locale('fa').format('MM')),
    //     day: Number(moment(maxDate).locale('fa').format('DD'))
    // };


   

    const orgHandler = (e) => {
        setOrigin(e.target.value);
    }

    const destHandler = (e) => {
        setDestination(e.target.value);
    }
    
    const dispatch = useDispatch();
    const numOfPasInputRef = useRef();
    


    const handleSubmit = (e) =>{
        e.preventDefault();
        let gotime = `${selectedDaygo.year}/${selectedDaygo.month}/${selectedDaygo.day}`;
        let backtime = `${selectedDayback.year}/${selectedDayback.month}/${selectedDayback.day}`;
        const filteredsamplegoticket = DomesticFilghtData.filter(data => data.org === origin && data.dest === destination  && data.goDate === gotime);
        const filteredsamplegoticket2 = DomesticFilghtData.filter(data => data.org === origin && data.dest === destination);
        const filteredsamplebackticket = DomesticFilghtData.filter(data => data.org === destination && data.dest === origin && data.goDate === backtime);


        navigate(
            '/flight',
            { state: { datagoticket: filteredsamplegoticket, datagoticket2: filteredsamplegoticket2, databackticket: filteredsamplebackticket } }
        )
        //----------------- for get number of passengers -----------
        const numOfPassInputValue = numOfPasInputRef.current.value;
        let num = [];
        for(let i = 0 ; i < numOfPassInputValue ; i++ ){
            num.push(i);
          
        }
        dispatch({type:e.target.name,payload:num})
            
    }
   
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <select>
                    <option>یک طرفه</option>
                    <option> رفت و برگشت</option>
                </select>

            </div>
            <form onSubmit={handleSubmit} name="numbersOfPassengers">
                <div className={classes.footer}>
                    <FormControl className={classes.formControl1} >
                        <InputLabel sx={{ fontFamily: 'iranyekan' }} id="demo-simple-select-autowidth-label">مبدا</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={origin}
                            onChange={orgHandler}
                            autoWidth
                            label="Age"
                        >
                            <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'تهران'} >تهران</MenuItem>
                            <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'مشهد'}>مشهد</MenuItem>
                            <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'تبریز'}>تبریز</MenuItem>
                            <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'شیراز'}>شیراز</MenuItem>

                        </Select>
                    </FormControl>


                    <FormControl className={classes.formControl2} >
                        <InputLabel sx={{ fontFamily: 'iranyekan' }} id="demo-simple-select-autowidth-label">مقصد</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={destination}
                            onChange={destHandler}
                            autoWidth
                            label="Age"
                        >

                            <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'تهران'}>تهران</MenuItem>
                            <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'مشهد'}>مشهد</MenuItem>
                            <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'تبریز'}>تبریز</MenuItem>
                            <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'شیراز'}>شیراز</MenuItem>

                        </Select>
                    </FormControl>
                    <div className={classes.dateContainer}>
                        <DtPicker
                            value={selectedDaygo}
                            onChange={setSelectedDaygo}
                            type='single'
                            local='fa'
                            showWeekend
                            placeholder='تاریخ رفت'
                            inputClass={classes.dateInput}
                            autoClose={false}
                            minDate={minimumDate}
                            headerClass={classes.dateHeader}
                            daysClass={classes.daysDatePicker}


                        />
                    </div>
                    <div className={classes.dateContainer}>
                        <DtPicker
                            value={selectedDayback}
                            onChange={setSelectedDayback}
                            type='single'
                            local='fa'
                            showWeekend
                            placeholder='تاریخ برگشت'
                            inputClass={classes.dateInput}
                            autoClose={false}
                            minDate={minimumDate}
                            headerClass={classes.dateHeader}
                            daysClass={classes.daysDatePicker}

                        />
                    </div>



                    <input
                        
                        ref={numOfPasInputRef}
                        className={classes.numOfPas}
                        type="number"
                        placeholder='تعداد مسافران' />

                    <button
                        
                        className={classes.searchBtn}
                        type="submit"
                        >
                        جستجوی بلیط
                    </button>


                </div>

            </form>


        </div>
    )
}

export default Domesticflight;