

const SimpleForm = () => {

    const handleSubmit=(e)=>{
     e.preventDefault()
     console.log(e.target.name.value)
     console.log(e.target.email.value)
     console.log(e.target.phone.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name :</label>
                <input type="text" id='name' name='name' />
                <br />
                <br />
                <label htmlFor="email">Email :</label>
                <input type="text" id='email' name='email' />
                <br />
                <br />
                <label htmlFor="phone">Phone Number :</label>
                <input type="text" id='phone' name='phone' />

                <input type="submit" name="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;