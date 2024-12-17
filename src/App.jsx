
import './App.css';
import ReusableForm from './reusableForm/ReusableForm';

function App() {

  const handleSignUpSubmit=(data)=>{
    console.log("Sign UP",data)
}
  const handleUpdateProfile=(data)=>{
    console.log("Update Profile",data)
}


  return (
    <>
    
      <h1>Vite + React</h1>
  
      <div>
{/* <SimpleForm></SimpleForm>  */}
{/* <StateFulForm></StateFulForm> */}
{/* <RefForm/> */}
{/* <HookForm/> */}
{/* <ReusableForm formTitle="SignUp" handleSubmit={handleSignUpSubmit} />


<ReusableForm formTitle="Profile Update" handleSubmit={handleUpdateProfile} submitBtnText="Update"/> */}

<ReusableForm formTitle="SignUp" handleSubmit={handleSignUpSubmit} >
  <div>
    <h2>Sign Up</h2>
    <p>Please Sign Up with Proper Info</p>
  </div>
</ReusableForm>
<ReusableForm formTitle="Profile Update" handleSubmit={handleUpdateProfile} submitBtnText="Update">
  <h2>Update Profile</h2>
  <p>Please Update your profile</p>
</ReusableForm>



      </div>
    </>
  )
}

export default App
