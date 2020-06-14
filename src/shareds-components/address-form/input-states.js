import React from 'react'
import states from '../../../static-contents/states';
import protoTypes from 'prop-types';
const InputStates = ({errorMessage, stateText, reqFields, params, index, changeState, ...props}) => {
    // const [statesx, setStatesx] = useState([]);
    // const [startState] = useState(states.map((elem, st)=>({...elem, index:st})));
    // console.log(statesx);
    
    // console.log('---------params input state---------');
    // console.log('STATESSSSSSSSSS');
    // console.log('---------params input state---------');
    

    // const initInputStatesuse = useCallback(()=>{
    //     setStatesx(states);
        
    // }, [])

    // useEffect(()=>{
    //     initInputStatesuse()
    // }, [initInputStatesuse])

    return (
        <div className="col-12 m-0 p-0">
            <div className="form-group">
                <label htmlFor="state">{stateText} {reqFields && <sup>*</sup> }</label>
                <select
                onChange={(e)=>{
                    params.state = states.filter(state=>state._id === e.target.value)[0] || {}
                    changeState(e, index, params);
                    // console.log('---------params input state---------');
                    // console.log(params);
                    // console.log(params.country.id);
                    // console.log('---------params input state---------');
                }} 
                className="custom-select" name="state">
                    <option value="">Choose...</option>
                    {
                        states.length > 0 ? 
                            states.map(state=>{
                                return state.country_id === params.country.id ? <option value={state._id} key={state._id}>{state.state} ({state.state_code})</option> : null
                                // return <option value={state._id} key={state.index}>{state.state} ({state.state_code})</option>
                            })
                        : null
                    }
                </select>
            </div>
            {errorMessage}
        </div>
    )
}
InputStates.protoTypes = {
    errorMessage:protoTypes.string,
    stateText:protoTypes.string,
    reqFields:protoTypes.bool,
    params:protoTypes.object,
    index:protoTypes.number,
    changeState:protoTypes.func,
}
export default InputStates;
