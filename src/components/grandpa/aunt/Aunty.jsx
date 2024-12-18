import React from 'react';
import Cousin from '../uncle/cousin/Cousin';

const Aunt = () => {
    return (
        <div>
                <h3>Aunt</h3>
             <div className="flex">   <Cousin cousinName={"Farjana"}></Cousin>
             <Cousin cousinName={"Roksana"}></Cousin></div>
        </div>
    );
};

export default Aunt;