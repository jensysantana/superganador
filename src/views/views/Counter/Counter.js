import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import './style.css'
import { NavLink } from 'react-router-dom'
import Loadding from '../../components/loadding/loadding'
const Counter = props => {
    
    const [state, setState] = useState(st=>{
        return {
            ...st,
            one:{ start:0, isLoadding:false },
            two: { start:0, isLoadding:false },
            three:{ start:0, isLoadding:false },
            four:{ start:0, isLoadding:false },
            five:{ start:0, isLoadding:false },
            six:{ start:0, isLoadding:false },
            seven:{ start:0, isLoadding:false },
        }
    })

    const sleep = (ms)=>{
        return new Promise((resolve)=>setTimeout(resolve, ms))
    }
    const animateNumbers = async (position)=>{
        for (let b = 1; b <= 9; b++) {
            await sleep(2000);
            setState(st=>{
                return {
                    ...st,
                    [position]:{
                        ...st[position],
                        start:b
                    }
                }
            })
        }
    }
    const getRandonNumber = async ()=>{
        await sleep(5000);
        return Math.floor((Math.random() * 9) + 0)
    }

    const startGetWinner = async (position)=>{
        await animateNumbers(position);
        await sleep(5000);
        setState(st=>{
            return {
                ...st,
                [position]:{
                    ...st[position],
                    isLoadding: true
                }
            }
        })
        
        const getWinnerNumber = await getRandonNumber();
        
        setState(st=>{
            return {
                ...st,
                [position]:{
                    start:getWinnerNumber,
                    isLoadding: false
                }
            }
        })
    }
        
        return (
            <div id="countdown" className="bg-danger">
            <div id='tiles'>
                <span className="spaners">
                    <NavLink to="#" onClick={(e)=>{
                        e.preventDefault();
                        startGetWinner('seven');
                    }} className="starter">Start</NavLink>
                    {state.seven.start}
                    {state.seven.isLoadding && <Loadding inLine={true} className="bg-info"></Loadding>}
                </span>
                <span className="spaners">
                    <NavLink to="#" onClick={(e)=>{
                        e.preventDefault();
                        startGetWinner('six');
                    }} className="starter">Start</NavLink>
                    {state.six.start}
                    {state.six.isLoadding && <Loadding inLine={true} className="bg-info"></Loadding>}
                </span>
                <span className="spaners">
                    <NavLink to="#" onClick={(e)=>{
                        e.preventDefault();
                        startGetWinner('five');
                    }} className="starter">Start</NavLink>
                    {state.five.start}
                    {state.five.isLoadding && <Loadding inLine={true} className="bg-info"></Loadding>}
                </span>
                <span className="spaners">
                    <NavLink to="#" onClick={(e)=>{
                        e.preventDefault();
                        startGetWinner('four');
                    }} className="starter">Start</NavLink>
                    {state.four.start}
                    {state.four.isLoadding && <Loadding inLine={true} className="bg-info"></Loadding>}
                </span>
                <span>
                    <NavLink to="#" onClick={(e)=>{
                        e.preventDefault();
                        startGetWinner('three');
                    }} className="starter">Start</NavLink>
                    {state.three.start}
                    {state.three.isLoadding && <Loadding inLine={true} className="bg-info"></Loadding>}
                </span>
                <span>
                    <NavLink to="#" onClick={(e)=>{
                        e.preventDefault();
                        startGetWinner('two');
                    }} className="starter">Start</NavLink>
                    {state.two.start}
                    {state.two.isLoadding && <Loadding inLine={true} className="bg-info"></Loadding>}
                </span>
                <span>
                    <NavLink to="#" onClick={(e)=>{
                        e.preventDefault();
                        startGetWinner('one');
                    }} className="starter">Start</NavLink>
                    {state.one.start}
                    {state.one.isLoadding && <Loadding inLine={true} className="bg-info"></Loadding>}
                </span>
            </div>
            {/* <div className="labels mt-5">
                <p className="mt-3">Raffle Basket</p>
            </div> */}
        </div>
    )
}

// Counter.propTypes = {

// }

export default Counter;
