import React from 'react';


function Keypad (){
    return (
        <div>
            <imput type="password" onChange={(event)=>{
                console.log("Entering password...")
            }}/>
        </div>
    )
}

export default Keypad;