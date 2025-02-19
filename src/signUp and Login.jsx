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
                <i><h1>Welcome</h1></i>
                <div id='nav-right'>
                    <button onClick={handleSignUp}>SignUp</button>
                    <button onClick={handleLogin}>Login</button>
                    <p onClick={ChangeTheme}>{Theme ? <GoSun />:<FaRegMoon />}</p>
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

            <div id='content'>
                <div id='content-1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, libero! Nulla quod illo ipsum modi, alias assumenda hic saepe consequatur inventore debitis eveniet non illum, cumque libero magnam neque excepturi!
                Fuga deleniti beatae necessitatibus excepturi? Eligendi aspernatur neque, ex eos eaque autem id commodi alias obcaecati tempore necessitatibus sit quos molestiae ut, facilis et explicabo laboriosam accusamus sint atque impedit?
                Cum aliquid ab illum porro unde, quasi tempora ducimus quas optio nulla vel magnam veniam sed ipsum, rem in neque enim totam. Accusantium soluta obcaecati nihil doloremque blanditiis temporibus voluptatibus!
                Cupiditate nemo incidunt iure, sit, eaque voluptas enim autem officiis asperiores accusamus dignissimos ab necessitatibus odio, consequatur explicabo deserunt! Placeat dolorem pariatur enim, veniam aliquid repudiandae dicta accusantium. Nam, iusto!
                Voluptas, qui. Quia rerum voluptatibus non, inventore id, harum modi mollitia animi error incidunt, placeat ipsa? Mollitia eveniet nihil, voluptatibus, et expedita porro at pariatur soluta cum nostrum, consequatur voluptatum?
                Minima vitae vero accusantium quibusdam nostrum sequi? Est modi, voluptatibus vel qui debitis quam dicta? Repellat porro, fugit recusandae unde eum odio laborum, doloremque laboriosam maxime voluptatibus alias et voluptatum.
            </p>
                </div>
                <div id='image-2'>
                <img src="https://m.economictimes.com/thumb/msid-95313710,width-1200,height-900,resizemode-4,imgsize-49604/virat-kohli.jpg" width={500}/>
                </div>
            </div>
        </div>
    )
}

export default SignUpLogin;