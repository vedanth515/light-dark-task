import { use, useState } from 'react';
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import './App.css'

function SignUpLogin() {
    // const show=false

    const [SignUp, setSignUp] = useState(false)
    const [Login, setLogin] = useState(false)

    const [Theme,SetTheme]=useState(false)


    function handleSignUp() {

        setSignUp(!SignUp)

    }

    function handleLogin() {
        setLogin(!Login)
    }

    const themes={
        backgroundColor:Theme ? "black":"white",
        color:Theme ? "white":"black"

    }

    const ChangeTheme=()=>{
        SetTheme(!Theme)
    }

    return (
        <div style={{backgroundColor:themes.backgroundColor,height:"100vh",width:"100%" ,color:themes.color}}>
            <div id='navbar'>
                <h1>Welcome</h1>
                <div id='nav-right'>
                    <button onClick={handleSignUp}>SignUp</button>
                    <button onClick={handleLogin}>Login</button>
                    <p onClick={ChangeTheme}>{Theme ? <GoSun />:<FaRegMoon />
                    }</p>
                </div>
            </div>
            {
                SignUp && <form>
                    <input type="text"></input>
                    <input type="email"></input>
                    <input type="password"></input>
                    <input type="password"></input>
                    <button>SignUp</button>
                </form>
            }

            {
                Login && <form>
                <input type="email"></input>
                <input type="password"></input>
                <input type="password"></input>
                <button>Login</button>

            </form>
            }

           <h5>Hello I am Vedanth I am From Nizamabad</h5>
        </div>
    )
}

export default SignUpLogin;