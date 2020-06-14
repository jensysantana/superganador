import React from 'react'
import cities from '../../../static-contents/cities';
import protoTypes from 'prop-types';

const InputCity = ({errorMessage, cityText, reqFields, changeCity, param, ...props}) => {
    return (
        <div className="col-12 m-0 p-0">
            <div className="form-group">
                <label htmlFor="city">{cityText} {reqFields && <sup>*</sup> }</label>
                <select 
                onChange={(e)=>{
                    param.city = cities.find(citie=>citie._id === e.target.value) || {};
                    changeCity(e, param)
                }}
                name="city" className="custom-select">
                    <option value="">Choose...</option>
                    {cities.length > 0 ? 
                            cities.map(citie=>{
                                return citie.state_id === param.state._id ? <option value={citie._id} key={citie._id}>{citie.city}</option> : null;
                            })
                        : null
                    }                                    
                </select>
            </div>
            {errorMessage}
        </div>
    )
}

InputCity.propTypes = {
    errorMessage: protoTypes.any, 
    cityText: protoTypes.string, 
    reqFields: protoTypes.bool, 
    changeCity: protoTypes.func, 
    param: protoTypes.object
}

export default InputCity;
