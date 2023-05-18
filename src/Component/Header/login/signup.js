import classes from "./login.module.css"
import { Link } from "react-router-dom"
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp(props) {
    const [emailIsvalid, setEmailIsvalid] = useState(false);
    const [inputlength, setInputlength] = useState(false);
    const [passwordIsvalid, setPasswordisvalid] = useState(false);
    const [passwordlength, setPasswordlength] = useState(false);
    const [repetitious, setRepetitious] = useState(false);

    function emailfunction() {
        console.log(emailref.current.value);
        if (emailref.current.value.includes("@")) {
            setEmailIsvalid(true);

        } else if (emailref.current.value.length > 0) {
            setInputlength(true);
        }
    };

    function passfunction() {
        if (passwordref.current.value.length > 5) {
            setPasswordisvalid(true);

        } else if (passwordref.current.value.length > 0) {
            setPasswordlength(true)
        }
    }
    const navigate = useNavigate();
    const nameref = useRef();
    const lastnameref = useRef();
    const emailref = useRef();
    const passwordref = useRef();
    const confirmpassref = useRef();

    async function saveDataHandler() {
        const name = nameref.current.value;
        const lastname = lastnameref.current.value;
        const email = emailref.current.value;
        const password = passwordref.current.value;
        const confirmpass = confirmpassref.current.value;

        const userdata = {
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            confirmpass: confirmpass
        }
        console.log(userdata);
        const responsealready = await fetch("https://dataticket-79a2a-default-rtdb.firebaseio.com/userdata.json");
        const dataalredy = await responsealready.json();
        const dataarr = Object.values(dataalredy);
        console.log(dataarr)
        const filterdata = dataarr.filter(data => data.email === emailref.current.value);
        if (filterdata.length>0) {
            setRepetitious(true);
        }else{

        const response = await fetch("https://dataticket-79a2a-default-rtdb.firebaseio.com/userdata.json", {
            method: "POST",
            body: JSON.stringify(userdata),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        console.log(data)
        navigate(
            '/login',
        )}
    }

    return (
        <div className={classes.container}>
            <div className={`m-3 p-5 shadow col-sm-8 col-md-6 col-xl-4  ${classes.formStyle}`}>
                <input type="text" ref={nameref} id="text1" className={`shadow-sm rounded p-2 m-1 w-100 ${classes.inpStyle}`} placeholder=" نام" />
                <input type="text" ref={lastnameref} id="text2" className={`shadow-sm rounded p-2 m-1 w-100 ${classes.inpStyle}`} placeholder=" نام خانوادگی" />
                <input type="email" ref={emailref} id="email" className={`shadow-sm rounded p-2 m-1 w-100 ${classes.inpStyle}`} placeholder="ایمیل" onChange={emailfunction} />
                {!emailIsvalid && inputlength && <p className="text-danger">ایمیل نامعتبراست</p>}
                <input type="password" ref={passwordref} id="Password" className={`shadow-sm rounded p-2 m-1 w-100 ${classes.inpStyle}`} placeholder="گذرواژه" onChange={passfunction} />
                <input type="password" ref={confirmpassref} id="Password" className={`shadow-sm rounded p-2 m-1 w-100 ${classes.inpStyle}`} placeholder="تایید گذر واژه" />
                {!passwordIsvalid && passwordlength && <p className="text-danger">گذرواژه حداقل 6 کاراکتر داشته باشد</p>}
                <button onClick={saveDataHandler} className={`p-1 mt-3 rounded shadow fs-5 ${classes.btnStyle}`} > ثبت نام</button>
                <p className="m-3 ">قبلا ثبت نام کرده اید؟ <Link className={classes.font} to="/login">ورود</Link></p>
                {repetitious && <p className="text-danger">قبلا این ایمیل ثبت نام کرده است</p>}
            </div>
        </div>
    )
}