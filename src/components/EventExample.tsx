import React, {FC, useRef, useState} from 'react';

const EventExample: FC = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        console.log(inputRef.current?.value)
    }

    const clickHandler = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(value)
    }
    return (
        <div>
            <input type="text" value={value} onChange={changeHandler}/>
            <input placeholder='неуправляемый' type="text" ref={inputRef} onChange={changeHandler}/>
            <button onClick={clickHandler}>click</button>
        </div>
    );
};

export default EventExample;