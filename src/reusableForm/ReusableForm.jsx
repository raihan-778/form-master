
const ReusableForm = ({handleSubmit,submitBtnText="submit",children}) => {

    const handleLocalSubmit=(e)=>{
        e.preventDefault();
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        handleSubmit(data)
    }
    return (
        <div>
            {/* <h2>{formTitle}</h2> */}
            {children}
             <form onSubmit={handleLocalSubmit}>
                <label htmlFor="name">Name :</label>
                <input type="text" id='name' name='name' />
                <br />
                <br />
                <label htmlFor="email">Email :</label>
                <input type="text" id='email' name='email' />
                <br />
                <br />
                <label htmlFor="password">Password :</label>
                <input type="text" id='password' name='password' />

                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;