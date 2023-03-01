import { useDispatch } from "react-redux"
import arrivedestination from "../../../../assets/images/arrivedestination.png"

const CardTicketgo = (props) => {
    const dispatch = useDispatch();
    const chooseflight = () => {
        dispatch({ type: "orgGoticket", payload: props.data.org });
        dispatch({ type: "destGoticket", payload: props.data.dest });
        dispatch({ type: "gotimeGoticket", payload: props.data.gotime });
        dispatch({ type: "arrivetimeGoticket", payload: props.data.arriveTime });
        dispatch({ type: "logoGoticket", payload: props.data.logo });
        dispatch({ type: "logonameGoticket", payload: props.data.logoName });
        dispatch({ type: "costGoticket", payload: props.data.cost });
        dispatch({ type: "goDate", payload: props.data.goDate });
        dispatch({ type: "buyTicket" });
        dispatch({ type: "poweronCardticketgo" })

    }
    return (

        <div className='row'>

            <div className='col-md-2 col-4 mb-3 mt-3'
                style={{ fontFamily: 'iranyekan' }}>
                <div className='row  justify-content-center ms-sm-2  rounded-circle border'
                    style={{ height: "70px", width: "70px" }}>
                    <img className='p-2 ' src={props.data.logo} alt="1" />
                </div>

                <div className='row  justify-content-center me-lg-5 me-4 '>
                    {props.data.logoName}
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
                        {props.data.name}
                    </div>

                </div>


                <div className='row mt-md-4 ' >
                    <div className='col-lg-3 col-2 pt-3 fw-bolder fs-4'
                        style={{ fontFamily: 'iranyekan' }}>
                        <div className="row " >

                            <div className="col-6 d-none d-lg-block ">
                                {props.data.org}
                            </div>

                            <div className="col-sm-6">
                                {props.data.gotime}
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
                                {props.data.dest}
                            </div>

                            <div className="col-sm-6">
                                {props.data.arriveTime}
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
                        {props.data.cost}
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-2 pe-lg-4 col-4 fw-bolder "
                        style={{ fontFamily: "iranyekan" }} >
                        ریال
                    </div>

                </div>


                <div className="row ms-lg-2 ps-2 mt-4">
                    <button className="btn btn-primary fs-5 fw-bolder"
                        style={{ fontFamily: "iranyekan" }}
                        onClick={chooseflight}>
                        انتخاب پرواز
                    </button>

                </div>
            </div>
        </div >

    )
}
export default CardTicketgo;