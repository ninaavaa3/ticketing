import {useSelector} from 'react-redux';
import styles from './ReturnTicket.module.css';

const CardReturnTicketInformation = () => {
    const origin = useSelector(state => state.orgBackticket);
    const destination = useSelector(state => state.destBackticket);
    const airlineName = useSelector(state => state.logonameBackticket);
    const time = useSelector(state => state.gotimeBackticket);
    const date = useSelector(state => state.BackDate)
    return (
        <table className={styles.table}>
            <tr>
                <td>مبدا</td>
                <td>{origin}</td>
            </tr>
            <tr>
                <td>مقصد</td>
                <td>{destination}</td>
            </tr>
            <tr>
                <td>شرکت هواپیمایی</td>
                <td>{airlineName}</td>
            </tr>
            <tr>
                <td>تاریخ و ساعت پرواز</td>
                <td>{date} - {time}</td>
            </tr>
            <tr>
                <td>شماره پرواز</td>
                <td>VR 5840</td>
            </tr>
            <tr>
                <td>کلاس پروازی</td>
                <td>اکونومی</td>
            </tr>
            <tr>
                <td>مقدار بار مجاز</td>
                <td>20 کیلوگرم</td>
            </tr>
            <tr>
                <td>خدمات ویژه</td>
                <td>ندارد</td>
            </tr>
            <tr>
                <td>قابلیت استرداد</td>
                <td>-</td>
            </tr>
        </table>
    )
}
export default CardReturnTicketInformation;