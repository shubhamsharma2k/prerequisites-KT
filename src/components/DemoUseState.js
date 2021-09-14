import React,{useState} from 'react'

const DemoUseState = () => {
    
    const [value,setValue] = useState(0);

    const handleDecrease = e => {

        if(value >0 ){
            setValue(value-1);
        }
    }
                                
    const handleIncrease = e => {

        if(value < 10 ){
            setValue(value+1);
        }
    }

    return (
        <div className='container'>
            <button className='btn btn-primary mx-4' onClick={e=> handleDecrease(e)}>-</button>
            <span>{value}</span>
            <button className='btn btn-primary mx-4' onClick={e=> handleIncrease(e)}>+</button>
        </div>
    )
}

export default DemoUseState
