
import arrivedestination from "../../../../assets/images/arrivedestination.png"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CardTicketback = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const boughtbackticket = () => {
        dispatch({ type: "orgBackticket", payload: props.backdata.org });
        dispatch({ type: "destBackticket", payload: props.backdata.dest });
        dispatch({ type: "gotimeBackticket", payload: props.backdata.gotime });
        dispatch({ type: "arrivetimeBackticket", payload: props.backdata.arriveTime });
        dispatch({ type: "logoBackticket", payload: props.backdata.logo });
        dispatch({ type: "logonameBackticket", payload: props.backdata.logoName });
        dispatch({ type: "costBackticket", payload: props.backdata.cost });
        dispatch({ type: "BackDate", payload: props.backdata.Date });
        dispatch({ type: "buyBackTicket" });
        navigate('/flight/passengers');
    }



    return (

        <div className='row'>

            <div className='col-md-2 col-4 mb-3 mt-3'
                style={{ fontFamily: 'iranyekan' }}>
                <div className='row  justify-content-center ms-sm-2  rounded-circle border'
                    style={{ height: "70px", width: "70px" }}>
                    <img className='p-2 ' src={props.backdata.logo} alt="1" />
                </div>
                <div className='row  justify-content-center me-lg-5 me-4 '>
                    {props.backdata.logoName}
                </div>
                <div className=' row  justify-content-center  mt-3 text-primary d-none d-md-block ps-2'>
                    اطلاعات پرواز
                </div>

            </div>

            <div className='col-md-8 col-8 mb-3 mt-3'>
                <div className='row pb-2 '
                    style={{ fontFamily: 'iranyekan' }}>
                    <div className='col-md-2 col-4'>
                        سیستمی
                    </div>
                    <div className='col-md-2 col-4' >
                        اکونومی
                    </div>
                    <div className='col-md-2 col-4'>
                        {props.backdata.name}
                    </div>
                </div>


                <div className='row mt-md-4 ' >
                    <div className='col-lg-3 col-2 pt-3 fw-bolder fs-4'
                        style={{ fontFamily: 'iranyekan' }}>
                        <div className="row " >
                            <div className="col-6 d-none d-lg-block ">
                                {props.backdata.org}
                            </div>
                            <div className="col-sm-6">
                                {props.backdata.gotime}
                            </div>
                        </div >
                    </div>
                    <div className='col-lg-4 col-7 w-30 '  >
                        <img src={arrivedestination} alt="1" />
                    </div>
                    <div className='col-lg-3 col-1 pt-3 fw-bolder fs-4 '
                        style={{ fontFamily: 'iranyekan' }}>
                        <div className="row ">
                            <div className="col-6 d-none d-lg-block ">
                                {props.backdata.dest}
                            </div>
                            <div className="col-sm-6">
                                {props.backdata.arriveTime}
                            </div >
                        </div >
                    </div>

                </div>

                <div className='row mt-3'>
                    <div className='col  text-primary d-none d-md-block'
                        style={{ fontFamily: 'iranyekan' }}>
                        قوانین استرداد
                    </div>
                </div>

            </div>


            <div className='col-md-2 border-start col-12 border-top  '>
                <div className="row justify-content-between pt-3">
                    <div className=" col-md-8  col-lg-8 col-xl-8 fw-bolder col-8 fs-4 text-primary ps-lg-5 text-end"  >
                        {props.backdata.cost}
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-2 pe-lg-4 col-4 fw-bolder "
                        style={{ fontFamily: "iranyekan" }} >
                        ریال
                    </div>
                </div>


                <div className="row ms-lg-2 ps-2 mt-4">
                    <button className="btn btn-primary fs-5 fw-bolder"
                        style={{ fontFamily: "iranyekan" }}
                        onClick={boughtbackticket} >
                        انتخاب پرواز
                    </button>
                </div>
            </div>
        </div >

    )
}
export default CardTicketback;