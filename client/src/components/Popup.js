import React from 'react'
import '../css/Popup.css'
function Popup(props){
    return (props.trigger) ? (
        <div className = 'popup' id={props.id}>
            <div className='popup-inner'>
                { props.children }
            </div>
        </div>
    )   : "";
}
export default Popup;