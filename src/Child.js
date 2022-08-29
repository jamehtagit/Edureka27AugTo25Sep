import React from 'react';

function Child(props) {
    return (
        <div>
            <h1> I am child.How are you? {props.firstname}</h1>
            <div style={{color:"black",height:"100px",width:""}}></div>
            
        </div>
    );
}

export default Child;