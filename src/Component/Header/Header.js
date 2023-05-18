import styles from './Header.module.css';
import TicketBtn from './button/TicketBtn';
import ResidenceBtn from './button/ResidenceBtn';
import MoreBtn from './button/MoreBtn';
import TourBtn from './button/TourBtn';
import { BsFileEarmarkPerson } from "react-icons/bs";
import { IoReceipt } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { ReactComponent as Alibaba } from '../../assets/icons/alibaba.svg';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
// import { ReactComponent as Person } from '../../assets/icons/person.svg';
// import { ReactComponent as Receipt } from '../../assets/icons/receipt.svg';
// import { ReactComponent as Help } from '../../assets/icons/help.svg';
const Header = () => {
    const showUsername=useSelector(state=>state.showUsername);
    console.log(!showUsername)
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Alibaba className={styles.logoContainerAlibabaIcon} />
                <div className={styles.logoContainerContent}>
                    <span >FirstTicket.com</span>
                    <span>خرید بلیط, هتل,تور</span>
                </div>

            </div>
            <div className={styles.buttonContainer}>
                <TicketBtn />
                <ResidenceBtn/>
                <TourBtn/>
                <MoreBtn/>
            </div>
            <div className={styles.linkContainer}>
                <div>
                    <BsFileEarmarkPerson className={styles.personIcon}/>
                {showUsername ? <p>{showUsername.name}{showUsername.Lastname}</p> : <Link to="./login" >ورود یا ثبت نام</Link>}

                </div>
                <div>
                    <IoReceipt  className={styles.ReceiptIcon}/>
                    <p>پیگیری خرید</p>

                </div>
                <div>
                    <MdOutlineLiveHelp className={styles.HelpIcon}/>
                    <p>پشتیبانی آنلاین</p>

                </div>
            </div>
        </div>
    )
}
export default Header;