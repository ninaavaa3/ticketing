import arrivedestination from "../../../../assets/images/arrivedestination.png";
import React from 'react';
import { useSelector } from "react-redux";
import { ReactComponent as CheckBox } from "../../../../assets/icons/check.svg";
const Boughtgoticket = () => {
    const orgGoticket = useSelector(state => state.orgGoticket);
    const destGoticket = useSelector(state => state.destGoticket);
    const logonameGoticket = useSelector(state => state.logonameGoticket);
    const arrivetimeGoticket = useSelector(state => state.arrivetimeGoticket);
    const gotimeGoticket = useSelector(state => state.gotimeGoticket);
    const logoGoticket = useSelector(state => state.logoGoticket);
    const goDate = useSelector(state => state.goDate);
    const costGoticket = useSelector(state => state.costGoticket);






    return (

        <div className='row'>
            <div className="col-md-8 col-8  rounded-3"
                style={{ height: 170 }}>
                <div className="row mt-3 ms-3 justify-content-start"
                    style={{ fontFamily: "iranyekan" }}>
                    <div className="col-xxl-3 col-xl-4 col-lg-2 col-md-3 col-sm-4 col-5 border rounded-5 pb-1"
                        style={{ backgroundColor: "#99D4FF" }}>
                        <CheckBox width={13} height={13} />
                        بلیط رفت
                    </div>
                    <div className="col-lg-3 col-md-1 col-sm-1 col-sm-5 col-4 fw-bolder fs-5 " >
                        {goDate}
                    </div>
                </div>
                <div className="row mt-4 ms-4">
                    <div className="col-sm-2 col-3" >
                        <img src={logoGoticket} height={35} width={35} alt="2" />
                    </div>
                    <div className="col-sm-4 col-4 fs-5"
                        style={{ fontFamily: "iranyekan" }}>
                        {logonameGoticket}
                    </div>
                </div>

                <div className='row mt-2 ms-3' >
                    <div className='col-xl-1 col-lg-3 col-md-3 col-sm-2 col-3 pt-3 fw-bolder fs-5'
                        style={{ fontFamily: 'iranyekan' }}>
                        <div className="row " >
                            <div className="col-6 d-none d-md-block ">
                                {orgGoticket}
                            </div>
                            <div className="col-sm-6 ">
                                {gotimeGoticket}
                            </div>
                        </div >
                    </div>
                    <div className='col-xl-6 col-lg-4 col-md-5 col-sm-6 col-6 w-30 mt-2 ms-xl-5 '  >
                        <img src={arrivedestination} alt="1" className="w-100" />
                    </div>
                    <div className='col-xl-1 col-lg-3 col-md-3 col-sm-3 col-1 pt-3 fw-bolder fs-5 '
                        style={{ fontFamily: 'iranyekan' }}>
                        <div className="row ">
                            <div className="col-6 d-none d-md-block ">
                                {destGoticket}
                            </div>
                            <div className="col-sm-6 ">
                                {arrivetimeGoticket}
                            </div >
                        </div >
                    </div>

                </div>
            </div>
            <div className="col-md-4 col-sm-3 col-4 border-start"
                style={{ height: 170, fontFamily: "iranyekan" }}>
                <div className="row mt-3 text-center">
                    <div className="">
                        <button className="btn btn-outline-primary fs-sm-5 fw-bolder ps-md-4 pe-md-4 ps-lg-5 pe-lg-5 me-lg-2 ms-sm-4 ms-md-auto pe-sm-2 ps-sm-2 me-3 ">
                            تغییر بلیط
                        </button>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-3 col-12 mb-md-auto mb-2">
                        مجموع
                    </div>
                    <div className="col-md-5 col-7 fs-4 fw-bolder "
                        style={{ color: "#0082E0" }}>
                        {costGoticket}
                    </div>
                    <div className="col-md-4 col-5">
                        ریال
                    </div>
                </div>
            </div>
        </div >

    )
}
export default Boughtgoticket;