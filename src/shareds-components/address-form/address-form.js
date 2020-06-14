import React, { useState, useEffect, Fragment, useCallback } from 'react'
import BasicDatePiker from '../data-pikers/basic-date-piker/basic-date-piker';
import moment from 'moment';
import GlobalHelper from "../../../helpers/global-helper";
import InputCountry from './input-country';
import ControlsButtons from './controls-buttons';
import InputStates from './input-states';
import InputCity from './input-city';

const helpers = new GlobalHelper();

const validateArrayForm = async (values, addDateValidate, activeStepValidation, addFronAndTo = {})=>{
    const validations = {
        address:{
            required: true,
            type:'string',
            // eslint-disable-next-line
            regex: helpers.GRegExp().address,
            maxLength:150,
            minLength:10,
            validate:true
        },
        postalCode:{
            required: true,
            type:'string',
            // eslint-disable-next-line
            regex: helpers.GRegExp().number,
            maxLength:5,
            minLength:5,
            validate:true
        },
        country:{
            required: true,
            type:'object',
            validate:true
        },
        state:{
            required: true,
            type:'object',
            validate:true
        },
        city:{
            required: true,
            type:'object',
            validate:true
        },
        ...addFronAndTo
    };

    const inputMessage = {
        address:{
            required: 'Enter an',
            type:'Data type provided is invalid',
            regex: 'Enter an valid',
            maxLength:'Max length',
            minLength:'Min length',
        },
        postalCode:{
            required: 'Enter an',
            type:'Data type provided is invalid',
            regex: 'Enter an',
            maxLength:'Max length',
            minLength:'Min length',
        },
        country:{
            required: 'Enter an',
        },
        state:{
            required: 'Enter an',
        },
        city:{
            required: 'Enter an',
        },
        from:{
            required: 'Enter a valid date',
        },
        to:{
            required: 'Enter a valid date',
        },
    }
    
    let errorsArr = [];
    let iterCouter = 0;
    let hasErrorOuter = false;
    const valuesArr = JSON.parse(JSON.stringify(values));
    for (const iterator of valuesArr) {
 
        let hasError = false;
        for (const key in iterator) {
            if (iterator.hasOwnProperty(key) && validations[key] !== undefined && validations[key].validate) {
                const element = iterator[key];
                if (validations.hasOwnProperty(key) && validations[key].type ==='string' ) {
                    
                    iterator.errors[key] = null
                    if (validations[key] !== undefined && validations[key].hasOwnProperty('required')) {
                        if (validations[key].required && element === '') {
                            iterator.errors[key] = `${inputMessage[key].required} ${key} `;
                            hasError = true;
                        }
                    }

                    if (validations[key] !== undefined && validations[key].hasOwnProperty('minLength')) {
                        if (validations[key]['minLength'] > element.length && element !== '') {
                            iterator.errors[key] = `${inputMessage[key].minLength} (${validations[key]['minLength']}) ${key} `;
                            hasError = true;
                        }
                    }

                    if (validations[key] !== undefined && validations[key].hasOwnProperty('maxLength')) {
                        if (element.length > validations[key]['maxLength'] && element !== '') {
                            iterator.errors[key] = `${inputMessage[key].maxLength} (${validations[key]['maxLength']}) of ${key} `;
                            hasError = true;
                        }
                    }

                    if (validations[key].hasOwnProperty('regex')) {
                        const regex = new RegExp(validations[key].regex)
                        if (!regex.test(element) && element !== '') {
                            iterator.errors[key] = `${inputMessage[key].regex} ${key}`;
                            hasError = true;
                        }
                    }

                }else{
                    iterator.errors[key] = null
                    if (validations[key] !== undefined && validations[key].hasOwnProperty('required') && validations[key].type === 'object') {
                        if (validations[key].required) {
                            if (!Array.isArray(element) && Object.keys(element).length === 0) {
                                iterator.errors[key] = `${inputMessage[key].required} ${key}`;
                                hasError = true;
                            }
                            
                            if (Array.isArray(element) && element.length === 0) {
                                iterator.errors[key] = `${inputMessage[key].required} ${key}`;
                                hasError = true;
                            }
                        }
                    }

                    if (validations[key] !== undefined && validations[key].hasOwnProperty('required') && validations[key].type === 'date' && addDateValidate) {
                        
                        if (validations[key].required) {
                            if (element === null || element === '' || element === undefined) {
                                iterator.errors[key] = `${inputMessage[key].required} ${key}`;
                                hasError = true;
                            }else{
                                if (activeStepValidation) {
                                    const respValidate = addressLong(iterator);
                                    if (validations[key].guide) {
                                        //=====================================
                                        // Start save last Date have
                                        //=====================================
                                        iterator.fromNow = respValidate;
                                        if (respValidate === '0 month') {
                                            iterator.errors[key] = `${inputMessage[key].required} ${key}`;
                                            hasError = true;
                                            iterator.fromNow = respValidate;
                                        }
                                        
                                        let nowfrom = moment(iterator.from);
                                        let nowTo = moment(iterator.to);
                                        if (nowfrom.isAfter(nowTo)) {
                                            iterator.errors[key] = `${inputMessage[key].required} ${key}`;
                                            hasError = true;
                                            iterator.fromNow = respValidate;
                                        }
                                        
                                        if (iterCouter > 0) {
                                            let { from } = valuesArr[iterCouter-1], fromValues = moment(from);
                                            fromValues.subtract(2, 'd');
                                            let fromValuesTo = moment(from);
                                            let nowfrom = moment(iterator.from),  nowTo = moment(iterator.to);
                                            if (nowfrom.isAfter(fromValues) || !nowTo.isSameOrBefore(fromValuesTo)) {
                                                iterator.errors[key] = `${inputMessage[key].required} ${key}`;
                                                hasError = true;
                                                iterator.fromNow = respValidate;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
        //=====================================
        // end second loop
        //=====================================
        
        //=====================================
        // Start ck and push values
        //=====================================
        if (hasError) {
            errorsArr.push({...iterator, isValidRow:false}) 
            hasErrorOuter = true;
        }else{
            errorsArr.push({...iterator, isValidRow:true}) 
        }
        // hasError = false;
        iterCouter++;
    }
    return {
        errorsArr,
        hasErrorOuter
    }
}

const addressLong = (iterator)=>{
    let nowfrom = moment(iterator.from);
    let nowTo = moment(iterator.to);
    if (nowfrom.isSame(nowTo)) {
        return '0 month';
    }

    let months = nowTo.diff(nowfrom, 'M');
    let dateArr = `${months / 12}`.split('.');
    let getYears = '';
    if (dateArr[0] === '0') {
        getYears +=  months > 1 ? months+' months' : months + ' month';
    }else{
        
        if (dateArr[0] >= 1) {
            
            if (dateArr.length >= 1 && dateArr[1] !== undefined) {
                getYears = dateArr[0] > 1 ? dateArr[0]+ ' years and ' : dateArr[0] +' year and ';
            }else{
                getYears = dateArr[0] > 1 ? dateArr[0]+ ' years ' : dateArr[0] +' year ';
            }
        }
        
        if (dateArr.length > 1) {
            let randomx = dateArr[1].substr(0, 1);
            randomx = parseInt(randomx);
            randomx = randomx+1;
            getYears +=  randomx > 1 ? randomx+ ' months' :  randomx+ ' month';
        }
    }
    return getYears;
}
const errors = {
    address:null, 
    postalCode:null, 
    country:null,
    state:null,
    city:null,
    to:null,
    from:null,
    fromNow:null
}
const AddressForm = props => {
    //===========================================
    // Start address country, state and city
    //===========================================
    
    // console.log('-----PROPSSSSSSSSS ADDRESS FORM --------');
    // console.log();
    // console.log('-----PROPSSSSSSSSS ADDRESS FORM --------');

    const {config:{datePikerInit, pikerData:{addFronAndTo, activeStepValidation, addDateValidate, basicDatePikerConfig} }} = props;
    const [setup, setSetup] = useState({})
    const setInit = useCallback(()=>{
        const {
            config:{ 
                requiredFields, 
                addressText, 
                conutryText, 
                stateText, 
                cityText, 
                postalCodeText, 
                textCurrentAddress, 
                textTitle, 

            pikerData:{ 
                addDatePikers, 
                fromText, 
                toText
            }, containerStyle
        }
        } = props;
        setSetup({
            addDatePikersx: addDatePikers || false,
            fromTextX: fromText || 'From',
            toTextX: toText || 'To',
            textCurrentAddressX: textCurrentAddress || 'Current Address',
            textTitleX: textTitle || 'Address',
            reqFields: requiredFields || false,
            addressText: addressText || 'Address',
            conutryText: conutryText || 'Country',
            stateText: stateText || 'State',
            cityText: cityText || 'City',
            postalCodeText: postalCodeText || 'Zip code',
            containerStyleX: containerStyle || {},
        })
    }, [props])
    useEffect(() => {
        setInit()
    }, [setInit])

    const [values, setValues ] = useState([
        {id:0, currentAddress:true, isValidRow:false, errors, ...datePikerInit, fromNow:'', address:'', country:{}, state:{}, city:{}, postalCode:''}
    ]);
    
    /*
        props.addressValues(arr, props.setOption);
        const method = ()=> {
            if (props.doRunvalidation > 0) {
                //=====================================
                // Start show message form has errors
                //=====================================
                validateFormDataErrors();
            }
        }
        useEffect(method, [props.doRunvalidation]);
    */
   
    const handleOnChange = (e, valuesMap)=>{
        let { value, name}=e.target;
        valuesMap.errors[name] = null;
        setValues(currentAddress=>{
            const arr = currentAddress.map(ad=>ad.id === valuesMap.id ? {
                ...valuesMap,
                [name]:value,
            } : ad);
            return arr;
        })
    }

    const handleOnChangeCity = (e, valuesMap)=>{
        const { name } = e.target;
        valuesMap.errors[name] = null;
        setValues(currentCity=>{
            const arr = currentCity.map(cct=>cct.id === valuesMap.id ? {
            ...valuesMap,
            postalCode:''
        } : cct)
            return arr;
        })
    }
 
    const handleOnChangeStates = (e, it, valuesMap)=>{
        const { name } = e.target;
        valuesMap.errors[name] = null;
        setValues(currentState=>{
            const arr = currentState.map(cst=>cst.id === valuesMap.id ? {
                ...valuesMap,
                city:{},
                postalCode:''
            } : cst);
            return arr;
        })
    }
        
    const handleOnChangeCountry = (e, it, valuesMap)=>{
        let { name } = e.target;
        // debugger;
        valuesMap.errors[name] = null;
        setValues(currentCountry=>{
            const arr = currentCountry.map(ctS=>ctS.id === valuesMap.id ? {
                ...valuesMap,
                state:{},
                city:{},
                postalCode:''
            } : ctS);
            return arr;
        });
    }

    const addNew = async ()=>{
        const resp = await validateFormDataErrors(false);
        let  { errorsArr, hasErrorOuter } = resp;
        if (hasErrorOuter) {
            //=====================================
            // Start show message form has errors
            //=====================================
            setValues([...errorsArr])
            return false;
        }else{

            let validx = {}
            if (addDateValidate) {
                let getLast = errorsArr[errorsArr.length-1];
                const fromTo = moment(getLast.from);
                const fromNext = moment(getLast.from);
                const getNextFrom = fromNext.subtract(30, 'd');
                validx = {
                    to:fromTo, 
                    from:getNextFrom, 
                }
            }
            
            let newArr = errorsArr;
            newArr.push(
                {
                    id:values[values.length-1].id+1, 
                    currentAddress:false,
                    isValidRow: false, 
                    errors, 
                    ...validx, 
                    fromNow:'', 
                    address:'', 
                    country:{}, 
                    state:{}, 
                    city:{}, 
                    postalCode:''
                }
            )
            setValues([...newArr]);
        }
    }
    const validateFormDataErrors = async (setVals=true)=>{
        const dataForm = await validateArrayForm(values, addDateValidate, activeStepValidation, addFronAndTo);
        // console.log('===dataForm=========');
        // console.log(dataForm);
        // console.log('=======dataForm==========');
        if (setVals === null) {
            setValues(()=>[...dataForm.errorsArr])
        }
    
        return {
            errorsArr:dataForm.errorsArr,
            hasErrorOuter:dataForm.hasErrorOuter
        }

    }

    const remove = (valuesMap, it)=>{
        if (valuesMap.id === 0) {
            return ;
        }
        setValues(currentAdd=>{
            const arr = currentAdd.filter(cadd=>cadd.id !== valuesMap.id);
            return arr;
        });
    }

    const onDateHandleChange = async (date, valuesMap, name)=>{
        valuesMap.errors[name] = null;
        setValues(currentAddress=>{
            const arr = currentAddress.map(ad=>ad.id === valuesMap.id ? {
            ...valuesMap,
            [name]:date.startDate
            } : ad)
            return arr;
        })
    }

    return (
        <div className="col">
            {values.map((valuesMap, i)=>
            
                <div className="row mb-3 rounded" style={setup.containerStyleX} key={valuesMap.id}>
                    <div className="col-sm-12">
                        <ControlsButtons 
                            addNew={addNew}
                            remove={remove}
                            param={valuesMap}
                            index={i}
                            textCurrentAddress={setup.textCurrentAddressX}
                            textTitleX={setup.textTitleX}
                            currentAddress={valuesMap.currentAddress}
                        />
                        
                        {setup.addDatePikersx &&
                            <Fragment>
                                <div className="form-row mb-0">
                                    <div className="col-12 col-sm-6 col-md-3 mb-2">
                                        <div className="form-group mb-0">
                                            <label style={{display:"block"}}>{setup.fromTextX}</label>
                                            <BasicDatePiker config={{
                                                onChangeDate:onDateHandleChange,
                                                    data:valuesMap,
                                                    name:"from",
                                                }}
                                                {...basicDatePikerConfig}
                                                maxDate={moment(valuesMap.from).toDate()}
                                            />
                                        </div>
                                        {valuesMap.errors.from !== null && <p className="error-message error mt-0"><i className="fa fa-exclamation-circle" /> {valuesMap.errors.from}</p>}
                                        {valuesMap.fromNow !== '' && <p className={valuesMap.fromNow ==='0 month' ? `text-warning mt-0` : `text-success mt-0`}><i className={valuesMap.fromNow ==='0 month' ? `fa fa-exclamation-circle` : `fa fa-check-circle`} aria-hidden="true"/> {valuesMap.fromNow}</p>}
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-3 mb-2">
                                        <div className="form-group mb-0">
                                            <label style={{display:"block"}}>{setup.toTextX}</label>
                                            <BasicDatePiker config={{
                                                    onChangeDate:onDateHandleChange,
                                                    data:valuesMap,
                                                    name:"to",
                                                }}  
                                                {...basicDatePikerConfig}
                                                maxDate={moment(valuesMap.to).toDate()}
                                            />
                                        </div> 
                                        {valuesMap.errors.to !== null && <p className="error-message error mt-0"><i className="fa fa-exclamation-circle" /> {valuesMap.errors.to}</p>}
                                    </div>
                                </div>
                            </Fragment>
                        }

                        <div className="form-group">
                            <label htmlFor="address">{setup?.addressText} {setup?.reqFields && <sup>*</sup> }</label>
                            <input type="address" 
                                value={valuesMap?.addressText} 
                                onChange={(e)=>{
                                    handleOnChange(e, valuesMap)
                                }} 
                                className="form-control" name="address" placeholder="446 oak dr miami fl"
                                autoComplete="off"
                                autoCapitalize="off"
                            />
                        </div>

                        {valuesMap.errors.address !== null && <p className="error-message error mt-0"><i className="fa fa-exclamation-circle" /> {valuesMap.errors.address}</p>}
                    </div>
                    <div className="col-sm-6">
                        <InputCountry 
                            reqField={setup.reqFields}
                            countryText={setup.conutryText}
                            onChangePhone={handleOnChangeCountry} 
                            index={i}   
                            param={valuesMap} 
                            errorMessage={valuesMap.errors.country !== null && <p className="error-message error mt-0"><i className="fa fa-exclamation-circle" /> {valuesMap.errors.country}</p>}              
                        />
                    </div>


                    <div className="col-sm-6">
                        
                        <InputStates 
                            errorMessage={valuesMap.errors.state !== null && <p className="error-message error mt-0"><i className="fa fa-exclamation-circle" /> {valuesMap.errors.state}</p>}
                            stateText={setup.stateText}
                            reqFields={setup.reqFields}
                            params={valuesMap}
                            index={i}
                            changeState={handleOnChangeStates}
                        
                        />
                    </div>
                    <div className="col-sm-8">
                        <InputCity
                            // errorMessage={valuesMap.errors.city !== null && <p className="error-message error mt-0"><i className="fa fa-exclamation-circle" /> {valuesMap.errors.city}</p>}
                            errorMessage={valuesMap.errors.city !== null && <p className="error-message error mt-0"><i className="fa fa-exclamation-circle" /> {valuesMap.errors.city}</p>}
                            cityText={setup.cityText}
                            reqFields={setup.reqFields}
                            param={valuesMap}
                            changeCity={handleOnChangeCity}
                        />
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="postalCode">{setup.postalCodeText} {setup.reqFields && <sup>*</sup> }</label>
                            <input type="text" onChange={(e)=>{
                                    handleOnChange(e, valuesMap)
                                }} 
                                maxLength="5" className="form-control" name="postalCode" placeholder="12345"
                                autoComplete="off"
                                autoCapitalize="off"
                            />
                        </div>
                        {valuesMap.errors.postalCode !== null && <p className="error-message error mt-0"><i className="fa fa-exclamation-circle" /> {valuesMap.errors.postalCode}</p>}
                    </div>
                </div>
                )
            }
        </div>
    )
}

/*
AddressForm.propTypes = {
    saveLabelFetchError: PropTypes.string,
    isFetching: PropTypes.bool,
    labelKey: PropTypes.object,
    saveLabelValue: PropTypes.func
};
  
  AddressForm.defaultProps = {
    saveLabelFetchError: "",
    labelKey: {},
    isFetching: false,
    saveLabelValue: () => {}
};
*/

export default AddressForm;
