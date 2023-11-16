import { InputBox } from './input.styled';
import { useState } from 'react';

type InputProps = {
    value: string;
}

const Input = (props: InputProps) => {
    let [displayValue, setDisplayValue] = useState<string>('AAA');

    const clickEvent = () => {
        setDisplayValue('bb');
    };

    return (
        <div>
            <InputBox type={'button'} onClick={clickEvent} value={displayValue}></InputBox>
        </div>
    );
};

export default Input;