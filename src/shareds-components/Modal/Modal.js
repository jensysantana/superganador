import React from 'react';
import './style.scss'

const Modal = ({className, styles, ...props}) => {
    return (
        <section id="myModal"  className="mymodal">
            <div className={className}>
                <div style={{...styles}}>
                    {props.children}
                </div>
                <span className="close" onClick={()=>{
                    // Get the <span> element that closes the modal
                    props.onModalClose()
                }}>&times;</span>
            </div>
        </section>
    )
}

export default Modal;
