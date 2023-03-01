import React from "react";
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from './passengerPageStyles.module.css'
import Boughtbackticket from "../child/BoughtbackTicket ";
import Boughtgoticket from "../child/BoughtgoTicket";
import StepperPassengers from '../child/Steppers/PassengersStepper';
import CardSpecificationsOfPassengers from '../child/CardSpecificationsOfPassengers';
import { BsFillPeopleFill } from "react-icons/bs";

const DomesticFlightPassengersPage = () => {
    const navigate = useNavigate();
    const numberPassengers = useSelector(state => state.numbersOfPassengers)
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/flight/confirm')
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.stepper}>
                    <StepperPassengers />
                </div>
                <div className={styles.ticketInfo}>
                    <div className="row ">
                        <div className="col-xl-6 col-lg-12 " >
                            <div className=" rounded-3 border  mt-4 shadow-sm "
                                style={{ height: "170px" }}>
                                <Boughtgoticket />
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12 " >
                            <div className=" rounded-3 border  mt-4 shadow-sm "
                                style={{ height: "170px" }}>
                                <Boughtbackticket />
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.passengersInfo}>

                    <div className={styles.passengersInfoHeader}>
                        <BsFillPeopleFill className={styles.passengersInfoIcon} />
                        <h2 style={{ fontFamily: 'iranyekan', marginRight: '20px' }}>مشخصات مسافران</h2>
                    </div>
                    {
                        numberPassengers.map(number => <CardSpecificationsOfPassengers />)
                    }
                    
                    <div className={styles.passengersInfoFooter}>
                        <div className="col-12 ">
                            <hr/>
                        </div>
                        <div className="col-md-5 px-5 pt-3">
                            <button className="btn btn-outline-primary fs-4"
                                >
                                + اضافه کردن مسافر جدید
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.sendEmail}>
                    <div className="container border rounded-3 fs-5 h-100" >
                        <div className="row m-3">
                            <input class="form-check-input col-sm-3 col-1 mt-2"
                                type="checkbox" />
                            <div className="col-sm-8 col-11 mt-2 "
                                style={{ height: "50px", fontFamily: "iranYekan" }}>
                                ارسال بلیط به ایمیل و شماره همراه دیگر
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <div className="container-fluid border rounded-3 h-100">
                        <form className="row ps-5 pt-4 pb-5 border fs-5  "
                            onSubmit={handleSubmit}
                            style={{ fontFamily: "iranYekan" }}>
                            <div className="col-xl-7 col-12 mt-3 mb-5" >
                                با کلیک روی تایید و ادامه خرید با
                                <a href="gdf">
                                    قوانین سایت و قوانین پرواز
                                </a>
                                موافقت کرده اید.
                            </div>
                            <div className="col-xl-2 mt-4 fs-4 col-sm-6 text-center mb-3" >
                                120000ریال
                            </div>
                            <button type="submit" className="col-xl-2 btn btn-primary fs-5 mt-2 col-lg-3 col-sm-4 mb-1">
                                تایید و ادامه خرید
                            </button>
                        </form>
                    </div>
                </div>


            </div>


        </>
    )
}
export default DomesticFlightPassengersPage;