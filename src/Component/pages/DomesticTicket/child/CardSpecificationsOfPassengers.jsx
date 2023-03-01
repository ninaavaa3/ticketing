import React from "react";
// import { BsPeopleFill } from "react-icons/bs";
import month from "./packages/monthpackage";

import { ImBin } from "react-icons/im";
const CardSpecificationsOfPassengers = () => {

    const date = [];
    for (let i = 1; i < 32; i++) {
        date.push(i);
    };
    const year = [];
    for (let j = 1340; j < 1400; j++) {
        year.push(j);
    }
    return (
        <div className="row  mt-1 mb-1 px-5"
            style={{ fontFamily: "iranYekan" }}>

            <div className="row ms-sm-5 mt-3 ">
                <div className="col-lg-1 col-sm-2 col-3 rounded-5 border  fs-5 text-center p-sm-1">
                    بزرگسال
                </div>

                <div className="col-lg-2 col-sm-3 col-4">
                    <div class="form-check fs-5 fw-bolder">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            کارت ملی
                        </label>
                    </div>
                </div>
                <div className="col-2 ">
                    <div class="form-check fs-5 fw-bolder">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            پاسپورت
                        </label>
                    </div>
                </div>
                <div className="col-xl-6 col-sm-4 col-3 text-end"
                    style={{ cursor: "pointer" }}>
                    < ImBin />
                </div>
            </div>
            <form className="row g-4 mb-4"
                style={{ fontFamily: "iranYekan" }}>

                <div className="col-md-3">
                    <label htmlFor="Latinname" className="form-label fs-5" >
                        نام لاتین
                    </label>
                    <input type="text" required id="Latinname" className="form-control"
                        style={{ direction: "ltr" }} />
                </div>

                <div className="col-md-3">
                    <label htmlFor="LatinLastname" className="form-label fs-5" >
                        نام خانوادگی لاتین
                    </label>
                    <input type="text" required id="LatinLastname" className="form-control" style={{ direction: "ltr" }} />
                </div>

                <div className="col-md-3">
                    <label htmlFor="sex" className="form-label fs-5">
                        جنسیت
                    </label>
                    <select id="sex" className="form-control"
                        style={{ fontFamily: "iranYekan" }}>
                        <option></option>
                        <option>زن</option>
                        <option>مرد</option>
                    </select>
                </div>
                
                <div className="col-md-3">
                    <label htmlFor="nationalCode" className="form-label fs-5" > کدملی</label>
                    <input type="number" required id="nationalCode" className="form-control" style={{ direction: "ltr" }} />
                </div>
                <div className="col-md-3">
                    <label htmlFor="name" className="form-label fs-5" >نام </label>
                    <input type="text" required id="name" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="lastname" className="form-label fs-5" >نام خانوادگی</label>
                    <input type="text" required id="lastname" className="form-control" />
                </div>
                <div className="col-xxl-3 col-xl-4  col-lg-5">
                    <label htmlFor="birthday" className="form-label fs-5">تاریخ تولد</label>
                    <div className="row  row-cols-auto " id="birthday">
                        <div className="col border">
                            <div class="form-group ">
                                <select className=" form-select " id="exampleFormControlSelect1" style={{ fontFamily: "iranYekan", borderColor: "white" }} >
                                    <option value="">روز</option>
                                    {date.map(obj => <option value={obj}>{obj}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="col border">
                            <div class="form-group">
                                <select class="form-select" id="exampleFormControlSelect1" style={{ fontFamily: "iranYekan", borderColor: "white" }}>
                                    <option>ماه</option>
                                    {month.map(obj => <option >{obj}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="col border">
                            <div className="form-group">
                                <select className="form-select" id="exampleFormControlSelect1" style={{ fontFamily: "iranYekan", borderColor: "white", }}   >
                                    <option value="0" >سال</option>
                                    {year.map(obj => <option >{obj}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row g-3"><div className="col-12"><hr /></div><div className="col-md-5"><button className="btn btn-outline-primary fs-4" >  + اضافه کردن مسافر جدید</button></div></div> */}

            </form>

        </div >
    )
    // return (
    //   <div className="row border bg-light shadow-sm  bg-body rounded-3 mt-1 mb-1" style={{ fontFamily: "iranYekan" }}>
    //     <div className="row m-3" ><div className="col-xxl-1 col-md-2 col-sm-3 col-3 text-center fs-2 " ><BsPeopleFill /></div><div className="col-xxl-2  col-lg-3 col-md-4 col-sm-5 col-6 fs-3 fw-bolder pt-2">مشخصات مسافران</div></div>
    //     <div className="row ms-5 mt-3 "><div className="col-lg-1 col-sm-2 col-3 rounded-5 border  fs-5 text-center p-sm-1">بزرگسال</div>
    //       <div className="col-lg-2 col-sm-3 col-4">
    //         <div class="form-check fs-5 fw-bolder">
    //           <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    //           <label class="form-check-label" for="flexRadioDefault1">
    //             کارت ملی
    //           </label>
    //         </div>
    //       </div>
    //       <div className="col-2">
    //         <div class="form-check fs-5 fw-bolder">
    //           <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    //           <label class="form-check-label" for="flexRadioDefault1">
    //             پاسپورت
    //           </label>
    //         </div>
    //       </div>
    //       <div>< ImBin/></div>
    //     </div>

    //     <form className="row g-4 mb-4" style={{ fontFamily: "iranYekan" }}>
    //       <div className="col-md-3">
    //         <label htmlFor="Latinname" className="form-label fs-5" >نام لاتین</label>
    //         <input type="text" required id="Latinname" className="form-control" style={{ direction: "ltr" }} />
    //       </div>
    //       <div className="col-md-3">
    //         <label htmlFor="LatinLastname" className="form-label fs-5" >نام خانوادگی لاتین</label>
    //         <input type="text" required id="LatinLastname" className="form-control" style={{ direction: "ltr" }} />
    //       </div>
    //       <div className="col-md-3">
    //         <label htmlFor="sex" className="form-label fs-5"> جنسیت</label>
    //         <select id="sex" className="form-control" style={{ fontFamily: "iranYekan" }}>
    //           <option></option>
    //           <option>زن</option>
    //           <option>مرد</option>
    //         </select>
    //       </div>
    //       <div className="col-md-3">
    //         <label htmlFor="nationalCode" className="form-label fs-5" > کدملی</label>
    //         <input type="number" required id="nationalCode" className="form-control" style={{ direction: "ltr" }} />
    //       </div>
    //       <div className="col-md-3">
    //         <label htmlFor="name" className="form-label fs-5" >نام </label>
    //         <input type="text" required id="name" className="form-control" />
    //       </div>
    //       <div className="col-md-3">
    //         <label htmlFor="lastname" className="form-label fs-5" >نام خانوادگی</label>
    //         <input type="text" required id="lastname" className="form-control" />
    //       </div>
    //       <div className="col-xxl-3 col-xl-4  col-lg-5">
    //         <label htmlFor="birthday" className="form-label fs-5">تاریخ تولد</label>
    //         <div className="row  row-cols-auto " id="birthday">
    //           <div className="col border">
    //             <div class="form-group ">
    //               <select className=" form-select " id="exampleFormControlSelect1" style={{ fontFamily: "iranYekan", borderColor: "white" }} >
    //                 <option value="">روز</option>
    //                 {date.map(obj => <option value={obj}>{obj}</option>)}
    //               </select>
    //             </div>
    //           </div>
    //           <div className="col border">
    //             <div class="form-group">
    //               <select class="form-select" id="exampleFormControlSelect1" style={{ fontFamily: "iranYekan", borderColor: "white" }}>
    //                 <option>ماه</option>
    //                 {month.map(obj => <option >{obj}</option>)}
    //               </select>
    //             </div>
    //           </div>
    //           <div className="col border">
    //             <div className="form-group">
    //               <select className="form-select" id="exampleFormControlSelect1" style={{ fontFamily: "iranYekan", borderColor: "white", }}   >
    //                 <option value="0" >سال</option>
    //                 {year.map(obj => <option >{obj}</option>)}
    //               </select>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row g-3"><div className="col-12"><hr /></div><div className="col-md-5"><button className="btn btn-outline-primary fs-4" >  + اضافه کردن مسافر جدید</button></div></div>

    //     </form>
    //     </div >)
}
export default CardSpecificationsOfPassengers;