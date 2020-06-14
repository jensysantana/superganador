import React, { Fragment } from 'react';
import countries from '../../static-contents/countries.json';
import protoTypes from 'prop-types'

const InputCountry = ({ reqField, countryText, onChangePhone, param, errorMessage, ...props}) => {
    return (
        <Fragment>
            <option value="">Choose...</option>
            { countries.map((country, xx)=><option value={country._id} key={`${xx}`}>{country.name} ({country.code})</option>)}
        </Fragment>
    )
}

InputCountry.prototype = {
    reqField:protoTypes.bool, 
    countryText:protoTypes.string, 
    onChangePhone:protoTypes.func, 
    index:protoTypes.number, 
    param:protoTypes.object, 
    errorMessage:protoTypes.string,
}
export default InputCountry;

// import React from 'react';
// import countries from '../../static-contents/countries.json';
// import protoTypes from 'prop-types'

// const InputCountry = ({ reqField, countryText, onChangePhone, param, errorMessage, ...props}) => {
//     // console.log('---------param countriesssssss---------');
//     // const respx = countries.filter((country, xx)=>{
//     //     console.log('country');
//     //     console.log(country);
//     //     console.log(xx);
//     //     console.log('country');
//     //     return country._id === '5e505fac80ed72fbe93736d1' ? country : null
//     // })
//     // console.log(respx);
//     // console.log('---------param countriesssssss---------');
//     return (
//         <div className="col-12 m-0 p-0">
//             <div className="form-group">
//                 <label htmlFor="country">{countryText} {reqField && <sup>*</sup> }</label>
//                 <select id="country" name="country"
//                     onChange={(e)=>{
//                         const { value } = e.target;
//                         const selectedCountry = countries.find(c=>{
//                             return c._id === value ? {...c} : null
//                         })
//                         onChangePhone(e, selectedCountry);
//                     }}
//                     className="custom-select" name="country">
//                     <option value="">Choose...</option>
//                     { countries.map((country, xx)=><option value={country._id} key={`${xx}`}>{country.name} ({country.code})</option>)}
//                 </select>
//             </div>
//             {errorMessage}
//         </div>
//     )
// }

// InputCountry.prototype = {
//     reqField:protoTypes.bool, 
//     countryText:protoTypes.string, 
//     onChangePhone:protoTypes.func, 
//     index:protoTypes.number, 
//     param:protoTypes.object, 
//     errorMessage:protoTypes.string,
// }
// export default InputCountry;