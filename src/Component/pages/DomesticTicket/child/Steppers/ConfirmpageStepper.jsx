import styles from './ConfirmStyles.module.css';
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { MdAirplaneTicket } from "react-icons/md";
// import { TiTick } from "react-icons/ti";
// import { IoCloudDoneSharp } from "react-icons/io5";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const ConfirmpageStepper = () => {
  return (
   
    //------------------ use icone and header ----------------------
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div>
          <h2 className={styles.firstH2}><IoCheckmarkDoneCircle className={styles.firstIcon} /></h2>
          <hr className={styles.firstHr}></hr>
        </div>

        <div>
          <h2 className={styles.secondIcon}><IoCheckmarkDoneCircle /></h2>
          <hr className={styles.secondHr}></hr>
        </div>

        <div>
          <h2 className={styles.thirdIcon}><MdOutlineConfirmationNumber className={styles.thirdIcon} /></h2>
          <hr className={styles.thirdHr}></hr>
        </div>

        <div>
          <h2 className={styles.fourthIcone}><MdPayment className={styles.fourthIcone} /></h2>
          <hr className={styles.fourthHr}></hr>
        </div>

        <div>
          <h2 className={styles.fifthIcone}><MdAirplaneTicket /></h2>
        </div>
      </div>

      <div className={styles.bottomContainer}>

        <div className={styles.firstDiv}>
          <h6 className={styles.firstH5}>انتخاب پرواز</h6>
        </div>

        <div className="div">
          <h6 className={styles.secondH5}>مشخصات مسافران</h6>
        </div>

        <div className="div">
          <h6 className={styles.thirdH5}>تایید اطلاعات</h6>
        </div>

        <div className="div">
          <h6 className={styles.fourthH5}>پرداخت</h6>
        </div>

        <div className="div">
          <h6 className={styles.fifthH5}>صدور بلیط</h6>
        </div>

      </div>
    </div>
  )
}
export default ConfirmpageStepper;

