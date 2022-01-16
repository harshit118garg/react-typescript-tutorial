import React from 'react'

type GreetProps = {     // passing props
    name : string,      // need to structure the type of props first 
    num : number        // only then props can be used
}

export const Greet = (props: GreetProps) => {       // {props : propType}
    const {name, num} = props;
    return (
        <>
         <h2 className='display-3'>Welcome {name}!</h2>   
         <h4 className='display-5'>You have <span className='text-danger'>{num}</span> unread messages</h4>
        </>
    )
}
