import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);

    const updateBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        step="10"
                        style={{ marginLeft: '5px' , size: 10}}
                        onChange={(event) => updateBudget(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;
