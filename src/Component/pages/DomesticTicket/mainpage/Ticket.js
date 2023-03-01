import React from "react";
import CardTicketgo from "../child/CardTicketgo";
import styles from "./Ticket.module.css";
import SimpleAccordion from "../child/accordion.js";
import ScrollableTabsButtonAuto from '../child/scrollabletabs';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Boughtgoticket from "../child/BoughtgoTicket";
import CardTicketback from "../child/CardTicketback";

const Ticket = () => {
  const buyTicket = useSelector(state => state.buyTicket);
  const poweronCardticketgo = useSelector(state => state.poweronCardticketgo);
  const buyBackTicket = useSelector(state => state.buyBackTicket);
  const location = useLocation();
  let data = location.state.datagoticket;
  let data2 = location.state.datagoticket2;
  let databackticket = location.state.databackticket;

  return (
    <>
      <div className="container">
        {buyTicket && !buyBackTicket &&
          <div className="row">
            <div className="col-xl-6 col-lg-12 " >
              <div className=" rounded-3 border  mt-4 shadow-sm " style={{ height: "170px" }}>
                <Boughtgoticket />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 ">
              <div className="rounded-3 border mt-4 shadow-sm text-center align-self-center fs-2 pt-5" style={{ height: "170px", fontFamily: "iranyekan" }}>
                بلیط برگشت
              </div>
            </div>
          </div>
        }


        <div className="row">
          <div className="col-xl-9 order-2">
            <div className="row  border bg-light shadow-sm p-3 mb-5 bg-body rounded-3 m-1">

              <ScrollableTabsButtonAuto data={data2} />
            </div>
            {poweronCardticketgo && !buyTicket &&
              data.map(obj => {
                return (

                  <div className="row  border bg-light shadow-sm  bg-body rounded-3 mt-1 mb-1 ">
                    <CardTicketgo data={obj} />
                  </div>
                )
              })
            }
            {buyTicket && !poweronCardticketgo && databackticket.map(
              obj => {
                return (
                  <div className="row  border bg-light shadow-sm  bg-body rounded-3 mt-1 mb-1 ">
                    <CardTicketback backdata={obj} />
                  </div>
                )
              })}
          </div>
          <div className="col-xl-3 order-1">
            <div className={styles.sidefilter}>
              <SimpleAccordion data={data} />
            </div>
          </div>

        </div>

      </div>

    </>
  )
}
export default Ticket;









