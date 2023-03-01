import styles from './ConfirmSpecification.module.css';

const CardConfirmPageSpecificationPassengers = () => {
    return (
        <table className={styles.table}>
            <tr>
                <th>بازه سنی</th>
                <th>نام ونام خانوادگی</th>
                <th>جنسیت</th>
                <th>کد ملی / شماره پاسپورت</th>
                <th>تاریخ تولد</th>
                <th>ملیت</th>
                <th>قیمت</th>
            </tr>
            <tr>
                <td>بزرگسال</td>
                <td>آرش محمدی</td>
                <td>مرد</td>
                <td>0435984726</td>
                <td>1368/03/22</td>
                <td>ایران</td>
                <td>20,587,015</td>
            </tr>
        </table>
    )
}
export default CardConfirmPageSpecificationPassengers;