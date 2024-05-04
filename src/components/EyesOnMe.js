import React from "react";

function EyeOnMe(){
    return(<button onFocus={()=>{
        console.log ("Good!")
    }}onBlur={
        (event)=>{
            console.log ("Hey! Eyes on me!")
        }
    }>
        Eyes on me
    </button>
    )
}

export default EyeOnMe;