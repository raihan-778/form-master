import useInputState from "../../hooks/useInputState";


const HookForm = () => {

    // const [name,handleNameChange]=useInputState("djnklgfklejw")

    const emailState=useInputState("any@gmail.go")

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Hooked Form",emailState.value)

    }
    return (
        <div>
                  <form onSubmit={handleSubmit}>
                <label  htmlFor="name">Name :</label>
                {/* <input value={name} onChange={handleNameChange} type="text" id='name' name='name' /> */}
                <br />
                <br />
                <label htmlFor="email">Email :</label>
                <input {...emailState} type="text" id='email' name='email' />
                <br />
                <br />
                <label htmlFor="phone">Password:</label>
                <input type="password" id='password' name='password' />

                <input type="submit" required name="submit" />
                </form>
        </div>
    );
};

export default HookForm;