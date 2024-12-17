import { useState } from "react";


const StateFulForm = () => {

    const [name,setName]=useState("raihan")
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const [error,setError]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password.length <6){
            setError("password must be at least 6 characters or longer")
        }else{
           setError("") 
        }
    
        
        console.log(name,email,password)
    }

    const handleNameChange=(e)=>{
       
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleEmailChange=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        console.log(e.target.value)
        setPassword(e.target.value)

    }
    return (
        <div>
               <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name :</label>
                <input onChange={handleNameChange} type="text" value="name" id='name' name='name' />
                <br />
                <br />
                <label htmlFor="email">Email :</label>
                <input onChange={handleEmailChange} type="text" id='email' name='email' />
                <br />
                <br />
                <label htmlFor="phone">Phone Number :</label>
                <input onChange={handlePasswordChange} type="password" id='password' name='password' />

                <input type="submit" required name="submit" />
                {error && <p>{error}</p> }
            </form>
        </div>
    );
};

export default StateFulForm;