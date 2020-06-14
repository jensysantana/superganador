import React, { Fragment, useState, useRef } from 'react';
// import countries from '../../../static-contents/countries.json';
import protoTypes from 'prop-types';
import './styles.scss'
import 'flag-icon-css/css/flag-icon.css';

const AutoCompleteInputCountries = ({ placeholder, label, onClicks, ...props}) => {
    const [state, setState] = useState([]);
    const [notFound, setNotFound] = useState(false);

    const search = useRef(null)
    const searchCountry = async e=>{

        let { value } = e.target;
        if (value === '') {
            setNotFound(s=>false)
            setState([]);
            onClicks('');
            return ;
        }
        const res = await fetch(`/assets/js/countries.json`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
        });

        const country = await res.json();
        let matches =[];
        matches = country.filter(ct=>{
        const regex = new RegExp(`^${value.trim()}`, 'gi');
            return ct.code.match(regex) || ct.name.match(regex);
        });

        if (matches.length === 0) {
            matches = []
            setNotFound(s=>true)
        }

        setState(matches);
    }

    /*
    const htmlOutPut = (matches)=>{
        if (matches) {
            const html = matches.map(match=>`
                <div className="card card-body">
                    <h4>${match.name} (${match.name})</4>
                    <span className="text-primary>${match.dial_code} </span>
                    <small>Lat:45161 / Long: 51611616
                <div>
            `).join('')
        }
    }

    const handleGetJson = ()=>{
        console.log("inside handleGetJson");
        fetch(`/assets/js/countries.json`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        })
        .then((response) => response.json())
        .then((messages) => {console.log("messages");});
    }
    */
   
    return (
        <Fragment>
            <div className="form-group mb-0 mb-2">
                <label>{label}<sup>*</sup></label>
                {/* <label>Country<sup>*</sup></label> */}
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder={placeholder || "Enter country name or code..."} 
                    {...props}
                    onChange={(e)=>{
                        searchCountry(e)
                        props.onChange(e)
                    }}
                    ref={search}
                />
            </div>
            <section className="container-country">
                {state.length > 0 && state.map((match, ix)=>
                    <div 
                        className="card card-body cursor-pointer bg-dark" 
                        tabIndex={ix} key={ix} 
                        onClick={()=>{
                            search.current.value = match.name;
                            onClicks(match, null);
                            setState(st=>[])
                            setNotFound(s=>false)
                        }}
                        
                    >
                        <h6>{match.name } ({match.code}) <span className={`flag-icon flag-icon-${match.code.toLowerCase()}`}></span></h6>
                        {/* <span className="flag-icon flag-icon-gr"></span>
                        <span className="flag-icon flag-icon-gr flag-icon-squared"></span> */}
                        <span className="text-white">Prefix code &nbsp; {match.dial_code} </span>
                        {/* <small>Lat: {match.lat} / Long: {match.log}</small> */}
                    </div>
                )
                }

                {state.length === 0 && notFound &&
                    <p className="error">No country found</p>
                }
            </section>
        </Fragment>
    )
}

AutoCompleteInputCountries.prototype = {
    onClicks:protoTypes.func, 
    label:protoTypes.string
}
export default AutoCompleteInputCountries;