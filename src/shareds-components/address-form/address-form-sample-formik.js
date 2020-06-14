import React, { useState, useEffect, Fragment } from 'react'
// import {  Field } from 'formik';
import countries from '../../../static-contents/countries';
import states from '../../../static-contents/states';
import cities from '../../../static-contents/cities';
import add from '../../../assets/images/icons/add.svg'
import minus from '../../../assets/images/icons/remove.svg'
import BasicDatePiker from '../data-pikers/basic-date-piker/basic-date-piker';
import moment from 'moment';
import * as yup from 'yup';
import { ErrorMessage, Formik, Form, Field, FieldArray, getIn } from 'formik';
import { TextField } from '@material-ui/core';
// .../.../../assets/images/icon/add.png
// interface Addresses {
//     address:String,
//     country:Object,
//     state:Object,
//     city:Object,
//     postalCode:String
// }
const schema = yup.object().shape({
    people: yup.array().of(
        yup.object().shape({
          firstName: yup.string().max(10).required('Required'),
          lastName: yup.string().max(10).required('Required')
        })
    )
    // .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
    // .min(3, 'Minimum of 3 friends'),
});


// const Input = ({name, p, handleChange, errorMessage}) => {
const Input = ({field, form:{errors}}) => {
    const errorMessage = getIn(errors, field.name)
    return (
        <Fragment>
            <TextField {...field} />
            {errorMessage && <p className="error">{errorMessage}</p>}
        </Fragment>
        // <Fragment>
        //     <TextField 
        //         name={name} 
        //         value={p.firstName} 
        //         onChange={handleChange} 
        //     />
        //     {errorMessage && <p className="error">{errorMessage}</p>}
        // </Fragment>
    )
}


const AddressForm = props => {

    console.log('====================================');
    console.log(props);
    console.log('====================================');
    return(

        <div>
            <h1>People List</h1>
            <Formik
                initialValues={{ people: [{id:0, firstName: '', lastName:''}] }}
                // onSubmit={values => setTimeout(() => {  alert(JSON.stringify(values, null, 2));}, 500)}
                onSubmit={() => {}}
                validationSchema={schema}
            >
                {({ values, handleChange, errors, ...rest }) => {

                    console.log(rest);
                    console.log(rest);
                    console.log(rest);
                    console.log(rest);

                    return (
                        <Form>
                            
                            <FieldArray name="people">
                                {({push, remove})=>(
                                    <div>
                                        {values.people.map((p, i)=>{
                                            // const name = `people[${i}].firstName`;
                                            // const errorMessage = getIn(errors, name)
                                            return (
                                                <div key={p.id}>
                                                    <Field name={`people[${i}].firstName`} component={Input} />
                                                    <Field name={`people[${i}].lastName`} component={Input} />
                                                    <div
                                                        onClick={(e)=>remove(i)} >
                                                        remove
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                        <button type="button" 
                                            onClick={(e)=>push({id: new Date().getTime(), firstName:'', lastName:''})} >
                                            add to list
                                        </button>
                                        
                                    </div>
                                )}
                            </FieldArray>
                            <div>
                                <button type="submit" >submit</button>
                            </div>
                            <pre>
                                {JSON.stringify(values, null, 2)}
                            </pre>
                            <br/>
                            <br/>
                            <pre>
                                {JSON.stringify(errors, null, 2)}
                            </pre>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
    
                        </Form>
                    )}

                }
            
            </Formik>

        </div>
    )
}

export default AddressForm;
