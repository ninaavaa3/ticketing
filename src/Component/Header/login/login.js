import classes from './login.module.css';
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';



export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [wronguser, setWronguser] = useState(false);
    const emailRef = useRef();
    const passRef = useRef();

    async function getdatahandler() {
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const loginuser = {
            email: email,
            password: password,
        }

        const response = await fetch("https://dataticket-79a2a-default-rtdb.firebaseio.com/userdata.json");
        const data = await response.json();
        const dataarr = Object.values(data);
        console.log(dataarr)
        const filterdata = dataarr.filter(data => data.email === loginuser.email && data.password === loginuser.password);
        console.log(filterdata)
        if (filterdata.length === 0) {
            setWronguser(true);

        } else {
            navigate("/")
        }

        dispatch({ type: "ShowUsername", payload: { name: filterdata[0].name, Lastname: filterdata[0].lastname } })

    }

    return (
        <div className={classes.container}>
            <div className={`m-3 p-5 shadow col-sm-8 col-md-6 col-xl-4  ${classes.formStyle}`}>
                <input ref={emailRef} type="email" id="email" className={`shadow-sm rounded p-2 m-1 w-100 ${classes.inpStyle}`} placeholder="ایمیل" />
                <input ref={passRef} type="password" id="Password" className={`shadow-sm rounded p-2 m-1 w-100 ${classes.inpStyle}`} placeholder="گذرواژه" />
                {/* <Link className="fw-light" href="/">پسوورد خود را فراموش کرده اید؟ </Link> */}
                <button onClick={getdatahandler} className={`p-1 mt-3 rounded shadow fs-5 ${classes.btnStyle}`} >ورود</button>
                <p className="m-3">هنوز ثبت نام نکرده اید؟ <Link className={classes.font} to="/signup">ثبت نام</Link></p>
                {wronguser && <p className={`fw-bold text-danger ${classes.font}`} >ایمیل یا گذر واژه نادرست است</p>}
            </div>

        </div>
    )
}