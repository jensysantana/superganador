import React, { Fragment, useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
// import PropTypes from 'prop-types'
import './style.css'
// import ImageGallery from '../../../shareds-components/ImageGallery/ImageGallery';
import { NavLink } from 'react-router-dom';
import { CreateItemsValidations } from '../../../validations/createItemsValidations';
// import InputCountry from '../../../shareds-components/address-form/InputCountry';
import InputFiles from '../../components/uploads/InputFiles/InputFiles';
import Categories from '../../../shareds-components/Categories/Categories';
import AutoCompleteInputCountries from '../../../shareds-components/address-form/AutoCompleteInputCountries.js/AutoCompleteInputCountries';
import NumberFormat from 'react-number-format';

const setRangeTickets = [
    {_id:'1', name:'0 to 10 tickets', upToNumber: 9},
    {_id:'2', name:'00 to 99 tickets', upToNumber: 99},
    {_id:'3', name:'000 to 999 tickets', upToNumber: 999},
    {_id:'4', name:'0,000 to 9,999 tickets', upToNumber: 9999},
    {_id:'5', name:'00,000 to 99,999 tickets', upToNumber: 99999},
    {_id:'6', name:'000,000 to 999,999 tickets', upToNumber: 999999},
    {_id:'7', name:'0,000,000 to 9,999,999 tickets', upToNumber: 9999999},
    {_id:'8', name:'00,000,000 to 99,999,999 tickets', upToNumber: 99999999},
    {_id:'9', name:'000,000,0000 to 999,999,999 tickets', upToNumber: 999999999},
];

const buyinFormat = [
    {
        _id:1, name:'Raffle style',
    },
    {
        _id:2, name:'Auction',
    },
    {
        _id:3, name:'Buy It Now',
    },
];

const deliveryOptions = [
    {
        value:1, name:'Free Shipping',
    },
    {
        value:2, name:'Free Local Pickup',
    },
    {
        value:3, name:'Free In-store Pickup',
    },
];

const deliveryOptions5 = [
    {
        value:1, name:'Free Returns',
    },
    {
        value:2, name:'Returns Accepted',
    },
    {
        value:3, name:'Deals with winner',
    },
    {
        value:4, name:'No deals with winner',
    }
];

const CreateItem = props => {
    const formikStateAndHelpers = useFormik(props);
    const { //handleChange, 
        // setValues, values 
    } = formikStateAndHelpers;
    // console.log('props');
    // console.log(formikStateAndHelpers);
    // console.log(values);
    // console.log('props');
    const [state, setState] = React.useState(s=>{
        return {
            imageFiles:[]
        }
    });
    
    const [mathsFeeds, setMathsFeeds] = React.useState(st=>{

        return {
            startPercentage: 60,
        }

    });


    const handleOnChangeCountry = (e, valuesMap)=>{
        let { name, value } = e.target;
        // handleChange(e);
        console.log('name-------------------');
        console.log(name);
        console.log(value);
        // console.log(valuesMap);
        console.log('name-------------------');
        // debugger;
        // valuesMap.errors[name] = null;
        // setValues(currentCountry=>{
        //     const arr = currentCountry.map(ctS=>ctS.id === valuesMap.id ? {
        //         ...valuesMap,
        //         state:{},
        //         city:{},
        //         postalCode:''
        //     } : ctS);
        //     return arr;
        // });
    }

    const remove = (el)=>{
        setState(st=>{
            return{
                ...st,
                imageFiles: st.imageFiles.map(fl=> {
                    if (fl._id === el._id) {
                        fl.base64 =''
                        fl.hasImage = false;
                        return fl;
                    }
                    return fl;
                })
            }
        })
    }

    const getImages = (el)=>{
        setState(st=>{
            return {
                ...st,
                imageFiles:el
            }
        })
    }
    
    const getCategory = (categoty)=>{

        // console.log('categoty');
        // console.log(categoty);
        // console.log('categoty');

    }

    const [buyinFormatContent, setBuyinFormatContent] = useState(0);





    return (
        <section className="row">
            <div className="col-12 mt-3">
                <div className="col-12">
                    <h5 className="">Create your product</h5>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                        <Categories getCategory={getCategory} />
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 col-xl-10">
                        <div className="row justify-content-center pr-3">
                            <div className="col-12 mb-3">
                                <h3>Tell us what you're selling or raffle</h3>
                            </div>
                            <Formik
                                initialValues={
                                    { 
                                        product_name: 'Samsung Galaxy S10+ Plus G975U 128/512/1TB AT&T T-Mobile Sprint Verizon Unlocked', 
                                        sub_title: 'NEW Samsung Galaxy S10+ Plus 128/512GB 1TB (SM-G975U1)', 
                                        serial_n:'DFHSD51161-585DS', 
                                        upc_n:'ASDS-8111118S', 
                                        condition:'', 
                                        email: '',
                                        mpn_number:'',
                                        country:'',
                                        formatItemSale:'',
                                        quantity:'1',
                                        starterPrice:'',
                                        qty_credits_per_ticket:'4',
                                        rangeTickets:'',
                                        startRaffleBasket:'',
                                        percentage_start:'',
                                        totalPersentage:'',
                                        tickets_sold:'',
                                        totalTickets:{
                                            _id:'',
                                            name:'',
                                            upToNumber:0,
                                        },
                                        sub_total:'0.00',
                                        total_profit:'',
                                        description:'SM-G973UZKAXAA, SM-G973UZKAATT, SM-G973UZWAATT, SM-G973UZIAATT, SM-G973UZWEATT, SM-G973UZIEATT, SM-G973UZKATMB, SM-G973UZBATMB, SM-G973UZKETMB, SM-G973UZBETMB, SM-G973UZKAVZW, SM-G973UZWAVZW, SM-G973UZBAVZW, SM-G973UZIAVZW, SM-G973UZIEVZW, SM-G973UZBEVZW, SM-G973UZWEVZW, SM-G973UZWAXAA, SM-G973UZBAXAA, SM-G973UZIAXAA, SM-G973UZKEXAA, SM-G973UZWEXAA, SM-G973UZBEXAA, SM-G973UZIEXAA, SM-G973U1, SM-G973U',
                                    }}

                                validationSchema={CreateItemsValidations('create')}
                                onSubmit={(values, { setSubmitting, ...props }) => {

                                    console.log('values');
                                    console.log(values);
                                    console.log(props);
                                    console.log('values');
                                    // setTimeout(() => {
                                                
                                    // alert(JSON.stringify(values, null, 2));
                                    // setSubmitting(false);

                                    // }, 400);
                                }}
                            >
                                {({handleChange, handleBlur, setValues, values, setErrors, setFieldError, errors, ...propsx}) => {
                                    const onChangeAutoCompleteCountry = (search)=>{
                                        // console.log('search');
                                        // console.log(search);
                                        // console.log('search');
                                        setValues({
                                            ...values,
                                            country:search._id
                                        });
                                    }

                                    const setSubTotalOnCredit = (e)=>{
                                        let { value } = e.target;
                                        if (Number.isInteger(parseInt(value)) && parseInt(value) > 0) {
                                            const { 
                                                rangeTickets,
                                                starterPrice
                                            } = values;

                                            if (starterPrice === '' || rangeTickets ==='') {
                                                setValues({
                                                    ...values,
                                                    sub_total:'0.00'
                                                })
                                            }else{
                                                let val = value;
                                                const rangeTicket = setRangeTickets.filter(rt=>rt._id === rangeTickets)[0];
                                                const respx = value * (rangeTicket.upToNumber+1);

                                                if (parseFloat(starterPrice) >= parseFloat(respx)) {
                                                    setValues({
                                                        ...values,
                                                        sub_total: respx
                                                    })
                                                    setValues({
                                                        ...values,
                                                        sub_total: '0.00'
                                                    })
                                                    
                                                }else{
                                                    setValues({
                                                        ...values,
                                                        sub_total: respx
                                                    })
                                                    
                                                }
                                            }

                                        }else{
                                            setValues({
                                                ...values,
                                                sub_total:'0.00'
                                            })
                                        }
                                    }


                                    const setStartRaffleBasket = (e)=>{
                                        let { value } = e.target;
                                        const valx = parseInt(value);
                                        const { 
                                            rangeTickets,
                                            sub_total,
                                            qty_credits_per_ticket,
                                            percentage_start,
                                        } = values;
                                        if (Number.isInteger(valx) && valx > 0) {
                                            
                                            if (valx === 1) {
                                                setValues({
                                                    ...values,
                                                    percentage_start:'',
                                                    sub_total:'0.00'
                                                })
                                                
                                            }
                                            
                                            if (valx === 2) {
                                                console.log('value');
                                                console.log(value);
                                                console.log(values);
                                                console.log('value');
                                                setValues({
                                                    ...values,
                                                    percentage_start:'70',
                                                    // totalTickets: **************************************************
                                                    // totalPersentage: ,
                                                    // tickets_sold:
                                                    sub_total:'0.00'
                                                })
                                            }

                                        }else{
                                            setValues({
                                                ...values,
                                                percentage_start:'',
                                                sub_total:'0.00'
                                            })
                                        }
                                    }


                                    const setSubTotalOnPrice = (e)=>{
                                        let { value } = e.target;
                                        let val = parseFloat(value);
                                        if (val && val > 0) {
                                            const { 
                                                rangeTickets,
                                                sub_total,
                                                qty_credits_per_ticket,
                                                percentage_start
                                            } = values;

                                            if (sub_total === '' || rangeTickets ==='' || qty_credits_per_ticket === '') {
                                                setValues({
                                                    ...values,
                                                    sub_total:'0.00'
                                                })
                                            }else{
                                                
                                                const rangeTicket = setRangeTickets.filter(rt=>rt._id === rangeTickets)[0];
                                                const respx = qty_credits_per_ticket * (rangeTicket.upToNumber+1);
                                                console.log('sub_total 222');
                                                console.log('///////////11');
                                                console.log(respx);
                                                console.log(sub_total);
                                                console.log(percentage_start);
                                                console.log('///////////222');
                                                
                                                if (parseFloat(value) >= parseFloat(sub_total)) {
                                                    console.log(sub_total);
                                                    console.log('sub_total 333');
                                                    
                                                    setValues({
                                                        ...values,
                                                        sub_total:'0.00'
                                                    })
                                                    
                                                }else{
                                                    const resultMath = parseFloat(val) * percentage_start / 100;

                                                    setValues({
                                                        ...values,
                                                        totalPersentage: resultMath+val,
                                                        tickets_sold:qty_credits_per_ticket / resultMath,
                                                        // totalTickets:rangeTicket,
                                                        sub_total: respx
                                                    })
                                                }
                                            }

                                        }else{
                                            setValues({
                                                ...values,
                                                sub_total:'0.00'
                                            })
                                            
                                        }
                                    }

                                    const setSubTotal = (e)=>{

                                        let { value } = e.target;
                                        const { 
                                            qty_credits_per_ticket,
                                            starterPrice,
                                            percentage_start,
                                            startRaffleBasket
                                        } = values;
                                        console.log(Number.isInteger(parseInt(value)));
                                        // console.log(rangeTickets);
                                        // console.log(starterPrice);
                                        // console.log(qty_credits_per_ticket);


                                        if (Number.isInteger(parseInt(value)) && parseInt(value) > 0) {
                                            let val = value;
                                            const rangeTicket = setRangeTickets.filter(rt=>rt._id === val)[0];
                                            if (starterPrice === '' || qty_credits_per_ticket ==='' || startRaffleBasket === '') {
                                                setValues({
                                                    ...values,
                                                    sub_total:'0.00'
                                                })
                                            }else{
                                                //////////////////////////////////////
                                                // Start get total amount and persentages;
                                                //////////////////////////////////////
                                                const respx = qty_credits_per_ticket * (rangeTicket.upToNumber+1);
                                                const resultMath = parseFloat(starterPrice) * percentage_start / 100;
                                                //////////////////////////////////////
                                                // End get total amount and persentages;
                                                //////////////////////////////////////

                                                // const percentageStart = percentage_start
                                                console.log('resultMath');
                                                console.log(resultMath);
                                                console.log();
                                                
                                                // console.log(totalTickets);
                                                console.log('resultMath');
                                                let rangeT = setRangeTickets.filter(rt=>rt._id === value);
                                                
                                                if (starterPrice >= respx) {
                                                    setValues({
                                                        ...values,
                                                        sub_total:'0.00'
                                                    })
                                                }else{
                                                    
                                                    if (rangeT.length === 0) {
                                                        setValues({
                                                            ...values,
                                                            totalTickets:{
                                                                _id:'',
                                                                name:'',
                                                                upToNumber:0
                                                            },
                                                            sub_total: '0.00',
                                                        })
                                                        
                                                    }else{

                                                        let rangeX = rangeT[0];
                                                        if (rangeX.upToNumber) {
                                                            
                                                        }
                                                        rangeX = {
                                                            ...rangeX
                                                        }

                                                        setValues({
                                                            ...values,
                                                            totalTickets:rangeT[0],
                                                            sub_total: respx,
                                                            // startRaffleBasket:
    
                                                        })
                                                    }

                                                }
                                            }

                                        }else{
                                            setValues({
                                                ...values,
                                                sub_total:'0.00'
                                            })
                                        }
                                       
                                    }

                                    // console.log('**************');
                                    // console.log(propsx);
                                    // console.log(propsx.values.country);
                                    // console.log('**************');
                                    return (
                                        <Form noValidate autoCapitalize="off" autoComplete="off">
                                            <div className="card card-primary">
                                                <div className="col-12">
                                                    <div className="card-body">
                                                        <div className="form-group">
                                                            <label htmlFor="product_name">Title<sup>*</sup></label>
                                                            <Field type="text" className="form-control" id="product_name" name="product_name" />
                                                        </div>
                                                        <ErrorMessage name="product_name">
                                                            {message =><p className="error">{message}</p>}
                                                        </ErrorMessage>
                                                        <div className="form-group">
                                                            <label htmlFor="sub_title">Subtitle<sup>*</sup></label>
                                                            <Field type="text" className="form-control" name="sub_title" id="sub_title" />
                                                        </div>
                                                        <ErrorMessage name="sub_title">
                                                            {message =><p className="error">{message}</p>}
                                                        </ErrorMessage>
                                                        <section className="row">

                                                            <div className="col-12 col-md-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="serial_n">Costum (sku) or serial number<sup>*</sup></label>
                                                                    <Field type="text" className="form-control" name="serial_n" id="serial_n" />
                                                                </div>
                                                                
                                                                <ErrorMessage name="serial_n">
                                                                    {message =><p className="error">{message}</p>}
                                                                </ErrorMessage>
                                                            </div>
                                                            <div className="col-12 col-md-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="upc_n">UPC<sup>*</sup></label>
                                                                    <Field type="text" name="upc_n" className="form-control" id="upc_n" />
                                                                </div>
                                                                <ErrorMessage name="upc_n">
                                                                    {message =><p className="error">{message}</p>}
                                                                </ErrorMessage>
                                                            </div>
                                                        </section>
                                                        <div className="form-group">
                                                            <label htmlFor="condition">Condition<sup>*</sup></label>
                                                            <Field component="select" name="condition" id='condition' className="custom-select">
                                                                <option value="">Choose...</option>
                                                                <option value="1">New with tags</option>
                                                                <option value="2">New without tags</option>
                                                                <option value="3">New with defects</option>
                                                                <option value="4">Pre-owned</option>
                                                            </Field>
                                                        </div>
                                                        <ErrorMessage name="condition">
                                                            {message =><p className="error">{message}</p>}
                                                        </ErrorMessage>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3 mt-4">
                                                <h3>Photos</h3>
                                            </div>
                                            <div className="card card-primary">
                                                <div className="card-body">
                                                    <div className="col-12">
                                                        <InputFiles 
                                                            name="images_product" 
                                                            max="12" 
                                                            multiple={true} 
                                                            maxSize={2.5} 
                                                            moduleName="products" 
                                                            remove={remove} 
                                                            getImages={getImages} 
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3 mt-4">
                                                <h3>Selling details</h3>
                                            </div>
                                            <div className="card card-primary">
                                                <div className="card-body">
                                                    <section className="row">
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-group">
                                                                <div className="form-group">
                                                                    <label>MPN<sup>*</sup></label>
                                                                    <Field component="select" className="form-control" name="mpn_number" id="mpn_number">
                                                                        <option value="">Choose...</option>
                                                                        <option value="1">Does not apply</option>
                                                                    </Field>
                                                                </div>

                                                                <ErrorMessage name="mpn_number">
                                                                    {message =><p className="error">{message}</p>}
                                                                </ErrorMessage>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-group">
                                                                <div className="form-group">
                                                                    <label>Country<sup>*</sup></label>
                                                                    {/* <InputCountry 
                                                                        reqField={true}
                                                                        countryText="Country/Region of Manufacture"
                                                                        onChangePhone={handleOnChangeCountry} 
                                                                    /> */}
                                                                    <Field component={AutoCompleteInputCountries} 
                                                                        className="form-control" 
                                                                        name="country" 
                                                                        id="country" 
                                                                        label="Country/Region of Manufacture" 
                                                                        value={values.country}
                                                                        onClicks={onChangeAutoCompleteCountry} 
                                                                    />
                                                                </div>

                                                                <ErrorMessage name="country">
                                                                    {message =><p className="error">{message}</p>}
                                                                </ErrorMessage>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    
                                                    <div className="card-body pad p-0">
                                                        <div className="mb-1">
                                                            <Field component="textarea" 
                                                                className="textarea" 
                                                                name="description" 
                                                                id="description" 
                                                                cols="30" 
                                                            >
                                                                <textarea/>
                                                            </Field>
                                                        </div>
                                                        <ErrorMessage name="description">
                                                            {message =><p className="error">{message}</p>}
                                                        </ErrorMessage>
                                                    </div>

                                                    <h5 className="">Selling details</h5>
                                                    <section className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <div className="form-group">
                                                                    <label>Buying Format<sup>*</sup></label>
                                                                    <Field component="select" className="form-control" name="formatItemSale" id="formatItemSale" onChange={(e)=>{
                                                                        let { value } = e.target;
                                                                        console.log('value');
                                                                        console.log(value);
                                                                        console.log('value');
                                                                        // setBuyinFormatContent(value > 0 ? value : 0);
                                                                        setBuyinFormatContent(value);
                                                                        handleChange(e)
                                                                    }}>
                                                                        <option value="">Choose...</option>
                                                                        {buyinFormat.map(bf=>{
                                                                            return <option value={bf._id} key={bf._id}>{bf.name}</option>
                                                                        })
                                                                        }
                                                                        {/* <option value="2">Auction</option>
                                                                        <option value="3">Buy It Now</option> */}
                                                                    </Field>
                                                                </div>
                                                            </div>
                                                            <ErrorMessage name="formatItemSale">
                                                                {message =><p className="error">{message}</p>}
                                                            </ErrorMessage>
                                                        </div>













                                                        {buyinFormatContent === '1' &&
                                                            <div className="col-12">
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-4">
                                                                        <div className="form-group">
                                                                            <label htmlFor="quantity">Quantity<sup>*</sup></label>
                                                                            <Field type="text" className="form-control" name="quantity" id="quantity" />
                                                                        </div>
                                                                        <ErrorMessage name="quantity">
                                                                            {message =><p className="error">{message}</p>}
                                                                        </ErrorMessage>
                                                                    </div>
                                                                    <div className="col-12 col-sm-4">
                                                                        <div className="form-group">
                                                                            <label htmlFor="starterPrice">Starting price<sup>*</sup></label>
                                                                            <Field 
                                                                                type="text" 
                                                                                className="form-control" 
                                                                                id="starterPrice" 
                                                                                name="starterPrice"
                                                                                onChange={(e)=>{
                                                                                    setSubTotalOnPrice(e); 
                                                                                    handleChange(e);
                                                                                }
                                                                                }
                                                                                onBlur={(e)=>{
                                                                                    setSubTotalOnPrice(e)
                                                                                    handleBlur(e)
                                                                                }}

                                                                            />
                                                                        </div>
                                                                        <ErrorMessage name="starterPrice">
                                                                            {message =><p className="error">{message}</p>}
                                                                        </ErrorMessage>
                                                                    </div>
                                                                    <div className="col-12 col-sm-4">
                                                                        <div className="form-group">
                                                                            <label htmlFor="qty_credits_per_ticket">Credits<sup>*</sup></label>
                                                                            <Field 
                                                                                type="number" 
                                                                                className="form-control" 
                                                                                name="qty_credits_per_ticket" 
                                                                                id="qty_credits_per_ticket" 
                                                                                onChange={(e)=>{
                                                                                    setSubTotalOnCredit(e)
                                                                                    handleChange(e);
                                                                                }}
                                                                                onBlur={(e)=>{
                                                                                    setSubTotalOnCredit(e)
                                                                                    handleBlur(e)
                                                                                }}
                                                                            />
                                                                            <small id="quitityCreditsPerTicket" className="form-text text-muted">
                                                                                Each credit is equivalent to $1 dollar
                                                                            </small>
                                                                        </div>
                                                                        <ErrorMessage name="qty_credits_per_ticket">
                                                                            {message =><p className="error">{message}</p>}
                                                                        </ErrorMessage>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="startRaffleBasket">Raffle basket start after<sup>*</sup></label>
                                                                            <Field 
                                                                                component="select" 
                                                                                name="startRaffleBasket" 
                                                                                id='startRaffleBasket' 
                                                                                className="custom-select"
                                                                                onChange={(e)=>{
                                                                                    setStartRaffleBasket(e)
                                                                                    handleChange(e)
                                                                                }}
                                                                                onBlur={(e)=>{
                                                                                    setStartRaffleBasket(e)
                                                                                    handleBlur(e)
                                                                                }}
                                                                            >
                                                                                <option value="">Choose...</option>
                                                                                <option value="1">All tickets sold</option>
                                                                                <option value="2">Costum</option>
                                                                            </Field>
                                                                        </div>
                                                                        <ErrorMessage name="startRaffleBasket">
                                                                            {message =><p className="error">{message}</p>}
                                                                        </ErrorMessage>
                                                                    </div>
                                                                    <div className="col-12 col-md-4">
                                                                        <div className="form-group">
                                                                            <label htmlFor="percentage_start">70% or greater</label>
                                                                            <Field 
                                                                                type="text" 
                                                                                disabled={false} 
                                                                                className="form-control" 
                                                                                name="percentage_start" 
                                                                                id="percentage_start" 
                                                                                disabled={values.percentage_start === ''}
                                                                                value={values.percentage_start}
                                                                                onChange={(e)=>{
                                                                                    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
                                                                                    let { value } = e.target;
                                                                                    if (value >= 70) {
                                                                                        // setErrors({
                                                                                        //percentage_start

                                                                                        // })
                                                                                        console.log('<<<<<<<<<<<<');
                                                                                        console.log(value);
                                                                                        console.log(values);
                                                                                        
                                                                                        const { 
                                                                                            percentage_start,
                                                                                            qty_credits_per_ticket,
                                                                                            rangeTickets,
                                                                                            startRaffleBasket,
                                                                                            starterPrice
                                                                                        } = values;
                                                                                        const respx  = qty_credits_per_ticket * rangeTickets;

                                                                                        console.log('respx');
                                                                                        console.log(respx);
                                                                                        console.log('respx');
                                                                                        console.log(startRaffleBasket);
                                                                                        // return ;
                                                                                    }
                                                                                    
                                                                                    handleChange(e)

                                                                                console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');

                                                                                /*

                                                                                condition: ""
                                                                                country: "5e50601080ed72fbe93736f9"
                                                                                description: "SM-G973UZKAXAA, SM-G973UZKAATT, SM-G973UZWAATT, SM-G973UZIAATT, SM-G973UZWEATT, SM-G973UZIEATT, SM-G973UZKATMB, SM-G973UZBATMB, SM-G973UZKETMB, SM-G973UZBETMB, SM-G973UZKAVZW, SM-G973UZWAVZW, SM-G973UZBAVZW, SM-G973UZIAVZW, SM-G973UZIEVZW, SM-G973UZBEVZW, SM-G973UZWEVZW, SM-G973UZWAXAA, SM-G973UZBAXAA, SM-G973UZIAXAA, SM-G973UZKEXAA, SM-G973UZWEXAA, SM-G973UZBEXAA, SM-G973UZIEXAA, SM-G973U1, SM-G973U"
                                                                                email: ""
                                                                                formatItemSale: ""
                                                                                mpn_number: ""
                                                                                percentage_start: ""
                                                                                product_name: "Samsung Galaxy S10+ Plus G975U 128/512/1TB AT&T T-Mobile Sprint Verizon Unlocked"
                                                                                qty_credits_per_ticket: "4"
                                                                                quantity: "1"
                                                                                rangeTickets: ""
                                                                                serial_n: "DFHSD51161-585DS"
                                                                                startRaffleBasket: ""
                                                                                starterPrice: "100"
                                                                                sub_title: "NEW Samsung Galaxy S10+ Plus 128/512GB 1TB (SM-G975U1)"
                                                                                upc_n: "ASDS-8111118S"

                                                                                

                                                                                */

                                                                            }} />
                                                                        </div>
                                                                        <ErrorMessage name="percentage_start">
                                                                            {message =><p className="error">{message}</p>}
                                                                        </ErrorMessage>
                                                                    </div>
                                                                    <div className="col-12 col-md-4">
                                                                        <div className="form-group">
                                                                            <label htmlFor="totalPersentage">Total of</label>
                                                                            <NumberFormat 
                                                                                type="text" 
                                                                                className="form-control" 
                                                                                name="totalPersentage" 
                                                                                id="totalPersentage" 
                                                                                value={(values.totalPersentage)}  
                                                                                disabled={true}

                                                                                thousandSeparator={true} 
                                                                                // thousandSeparator="."
                                                                                prefix={'$'} 
                                                                                decimalSeparator="."
                                                                                decimalScale={2}
                                                                                fixedDecimalScale
                                                                                allowNegative={false}
                                                                                onChange={(e)=>{
                                                                                    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
                                                                                    let { value } = e.target;
                                                                                    if (value >= 70) {
                                                                                        // setErrors({
                                                                                        //percentage_start

                                                                                        // })
                                                                                        console.log('<<<<<<<<<<<<');
                                                                                        console.log(value);
                                                                                        console.log(values);
                                                                                        
                                                                                        const { 
                                                                                            percentage_start,
                                                                                            qty_credits_per_ticket,
                                                                                            rangeTickets,
                                                                                            startRaffleBasket,
                                                                                            starterPrice
                                                                                        } = values;
                                                                                        const respx  = qty_credits_per_ticket * rangeTickets;

                                                                                        console.log('respx');
                                                                                        console.log(respx);
                                                                                        console.log('respx');
                                                                                        console.log(startRaffleBasket);
                                                                                        // return ;
                                                                                    }
                                                                                    
                                                                                    handleChange(e)

                                                                                    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');

                                                                                }} 
                                                                            />
                                                                        </div>
                                                                        <ErrorMessage name="totalPersentage">
                                                                            {message =><p className="error">{message}</p>}
                                                                        </ErrorMessage>
                                                                    </div>
                                                                    <div className="col-12 col-md-4">
                                                                        <div className="form-group">
                                                                            <label htmlFor="tickets_sold">Tickets</label>
                                                                            <Field 
                                                                                type="text" 
                                                                                className="form-control" 
                                                                                name="tickets_sold" 
                                                                                id="tickets_sold" 
                                                                                // value={(values.totalPersentage) / (values)}  
                                                                                disabled={true}
                                                                                onChange={(e)=>{
                                                                                    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
                                                                                    let { value } = e.target;
                                                                                    if (value >= 70) {
                                                                                        // setErrors({
                                                                                        //percentage_start

                                                                                        // })
                                                                                        console.log('<<<<<<<<<<<<');
                                                                                        console.log(value);
                                                                                        console.log(values);
                                                                                        
                                                                                        const { 
                                                                                            percentage_start,
                                                                                            qty_credits_per_ticket,
                                                                                            rangeTickets,
                                                                                            startRaffleBasket,
                                                                                            starterPrice
                                                                                        } = values;
                                                                                        const respx  = qty_credits_per_ticket * rangeTickets;

                                                                                        console.log('respx');
                                                                                        console.log(respx);
                                                                                        console.log('respx');
                                                                                        console.log(startRaffleBasket);
                                                                                        // return ;
                                                                                    }
                                                                                    
                                                                                    handleChange(e)

                                                                                    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');

                                                                                }} 
                                                                            />
                                                                        </div>
                                                                        <ErrorMessage name="tickets_sold">
                                                                            {message =><p className="error">{message}</p>}
                                                                        </ErrorMessage>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="rangeTickets">Range tickes<sup>*</sup></label>
                                                                            <Field 
                                                                                component="select" 
                                                                                id='rangeTickets' 
                                                                                name="rangeTickets" 
                                                                                className="custom-select" 
                                                                                onChange={(e)=>{
                                                                                    setSubTotal(e)
                                                                                    handleChange(e);
                                                                                }}
                                                                                onBlur={(e)=>{
                                                                                    setSubTotal(e)
                                                                                    handleBlur(e);
                                                                                }}
                                                                            >
                                                                                <option value="">Choose...</option>
                                                                                {setRangeTickets.map(rt=><option value={rt._id} key={rt._id}>{rt.name}</option> )}
                                                                            </Field>
                                                                        </div>
                                                                        <ErrorMessage name="rangeTickets">
                                                                            {message =><p className="error">{message}</p>}
                                                                        </ErrorMessage>
                                                                    </div>
                                                                    <div className="col-12 col-sm-3">
                                                                        <div className="form-group">
                                                                            <label htmlFor="sub_total">Sub total</label>

                                                                            <NumberFormat 
                                                                                type="text" 
                                                                                className="form-control subTotal" 
                                                                                name="sub_total" 
                                                                                id="sub_total" 
                                                                                thousandSeparator={true} 
                                                                                // thousandSeparator="."
                                                                                prefix={'$'} 
                                                                                decimalSeparator="."
                                                                                decimalScale={2}
                                                                                fixedDecimalScale
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                allowNegative={false}
                                                                                value={`${values.sub_total}`}  
                                                                                disabled={true}
                                                                            />
                                                                            
                                                                            {/* <Field type="text" disabled={true} value={`$${values.sub_total}`}  name="sub_total" className="form-control" id="sub_total" /> */}
                                                                        </div>
                                                                        <ErrorMessage name="sub_total">
                                                                            {message =><p className="error">{message}</p>}
                                                                        </ErrorMessage>
                                                                    </div>
                                                                    
                                                                    <div className="col-12 col-md-4">
                                                                        <div className="form-group">
                                                                            <label htmlFor="total_profit">Total profit</label>
                                                                            <input type="text" disabled={false} className="form-control" id="total_profit" />
                                                                        </div>
                                                                    </div>
                                                                
                                                                    <div className="col-6">
                                                                    
                                                                        <div className="form-group">
                                                                            <div className="form-check">
                                                                                <div style={{marginLeft:'-20px'}}><strong>Make a Donation</strong><sup>*</sup></div>
                                                                                {/* <p classame="mb-0">Make a Donation<sup>*</sup></p> */}
                                                                                <input type="checkbox" className="form-check-input" id="mk_donation" />
                                                                                <label className="form-check-label" htmlFor="mk_donation">  Donate a percentage of your profit to the charity is part of the requirement raffles law. <NavLink to="#">see more...</NavLink>   </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                        {/* <label className="form-check-label"> Mean peoples who's work with you. <NavLink to="#">see more...</NavLink>   </label> */}
                                                                </div>
                                                            </div>
                                                          
                                                        }
                                                    </section>
                                                    <p>expected profit ({buyinFormatContent})</p>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <section className="btn-group">
                                                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                                        <button type="reset" className="btn btn-warning">Cancel</button>
                                                    </section>
                                                </div>
                                            </div>
                                        </Form>
                                    )
                                    }
                                }
                            </Formik>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// CreateItem.propTypes = {

// }

export default CreateItem;
