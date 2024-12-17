import { useEffect, useRef } from "react";




const RefForm = () => {

    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const passwordRef=useRef(null)

    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(nameRef.current.value)
       console.log(emailRef.current.value)
    }

    useEffect(()=>{
        nameRef.current.focus()
    },[])
    return (
        <div>
                     <form onSubmit={handleSubmit}>
                <label  htmlFor="name">Name :</label>
                <input ref={nameRef} type="text" id='name' name='name' />
                <br />
                <br />
                <label htmlFor="email">Email :</label>
                <input defaultValue="rua@jbu.com" ref={emailRef} type="text" id='email' name='email' />
                <br />
                <br />
                <label htmlFor="phone">Password:</label>
                <input ref={passwordRef} type="password" id='password' name='password' />

                <input type="submit" required name="submit" />
                {/* {error && <p>{error}</p> } */}
            </form>
        </div>
    );
};

export default RefForm;