import { FormEvent, useState } from "react";
import axios from "axios";

const Login_Form = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUserloginSubmit = async(e:FormEvent) =>{
        e.preventDefault();

        try{
         const {data} = await axios.post("https://localhost:8000/api/local_login",{username,password},
            {withCredentials:true,
            headers: {'Content-Type': 'application/json',
        }})
        
        console.log(data);
    }catch(e){console.log(e)}



    }

  return (
      <>
    <form className="loginform" onSubmit={handleUserloginSubmit}>
        <div className="loginform__box loginform__box-login">
            <label className="loginform__box__label">Username</label>
            <input type="text" className="loginform__box__input loginform__box__input" value={username} onInput={(e => setUsername(e.currentTarget.value))}/>
            
        </div>
        <div className="loginform__box loginform__box-password">
            <label className="loginform__box__label">password</label>
            <input type="password" className="loginform__box__input loginform__box__input" value={password} onInput={(e)=>setPassword(e.currentTarget.value)}/>
            
        </div>
        <button type="submit" className="loginform__submit">Login</button>
    </form>
    </>
  )
}

export default Login_Form