import Cousin from "./cousin/Cousin";


const Uncle = () => {
    return (
        <div >
                <h2>Uncle's Home</h2>
               <div className="flex"> <Cousin cousinName={"Mahin"}></Cousin>
               <Cousin cousinName={"Faria"}></Cousin></div>
        </div>
    );
};

export default Uncle;