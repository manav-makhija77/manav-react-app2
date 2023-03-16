import React from 'react'

export default function Alert(props) {

    function capital(word){
        let cp=word.toLowerCase();
        return cp.charAt(0).toUpperCase() + cp.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capital(props.alert.type)}</strong>{props.alert.message}
        </div>
}
        </div>
    )
}
