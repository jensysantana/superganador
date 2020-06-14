import React from 'react';
import add from '../../../assets/images/icons/add.svg'
import minus from '../../../assets/images/icons/remove.svg'
const ControlsButtons = ({addNew, remove, param, index, textCurrentAddress, textTitleX, currentAddress, ...props}) => {
    return (
        <section className="row">
            <div className="col-8">
                <h4>{textTitleX} {index+1}</h4>
            </div>
            <div className="col-4 control-buttons d-flex justify-content-end">
                <div className="cursor-pointer" onClick={()=> addNew()}> <img src={add} alt="add" /></div>
                <div className="cursor-pointer" onClick={()=>remove(param, index)}> <img src={minus} alt="minus" width="24" height="24" /></div> 
            </div>
            {currentAddress &&
                <div className="col-12 col-md-12 mt-3">
                    <div className="form-group mb-0">
                        <label>{textCurrentAddress} </label>
                    </div>
                </div>
            }
        </section>
    )
}

export default ControlsButtons;
