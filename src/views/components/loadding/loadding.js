import React, { Fragment } from 'react'
import loaderImg from "../../../assets/images/newloadder.svg";
function Loadding(props) {
    return (
        <Fragment>
            {!props.inLine &&
                <div className="col-12 modal-jack-modal">
                    <div className="row justify-content-center align-items-center" style={{"height":"100vh"}}>
                        {props.children}
                    </div>
                </div>
            }
            {props.inLine &&
                <div className={`row ${props.className}`} style={
                    {
                        position:'absolute', 
                        borderRadius:'7px', 
                        lef:'0',
                        top:'50%', 
                        transform:'translate(8%, -50%)',
                        width:'100%',
                        textAlign:'center'
                    }
                } 
                    key={props.key}
                >
                    <div className="col-12">
                        <img src={loaderImg} className="img-loader d-block" alt="" />
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Loadding
