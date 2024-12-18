import React from 'react';
import Brother from './brother/Brother';
import Myself from './myself/Myself';
import Sister from './sister/Sister';

const Dad = () => {
    return (
        <div>
                <h2>Dads Home</h2>
                <div className="flex">
                <Myself></Myself>
                <Sister></Sister>
                <Brother></Brother>
                </div>
        </div>
    );
};

export default Dad;