import { InputNumber, Select } from 'antd';
import { useState } from 'react';

const { Option } = Select;

export default function WeightInput({ value = {}, onChange }) {
    const [number, setNumber] = useState();
    const [currency, setCurrency] = useState('kg');
    const triggerChange = (changedValue) => {
        onChange?.({
            number,
            currency,
            ...value,
            ...changedValue,
        });
    };
    const onNumberChange = (e) => {
        const newNumber = e || 0.0;
        if (Number.isNaN(number)) {
            return;
        }
        if (!('number' in value)) {
            setNumber(newNumber);
        }
        triggerChange({
            number: newNumber,
        });
    };
    const onCurrencyChange = (newCurrency) => {
        if (!('currency' in value)) {
            setCurrency(newCurrency);
        }
        triggerChange({
            currency: newCurrency,
        });
    };
    return (
        <span>
            <InputNumber
                placeholder={"0.00"}
                min="0"
                max="10"
                step="0.01"
                stringMode
                value={value.number || number}
                onChange={onNumberChange}
            />
            <Select
                value={value.currency || currency}
                style={{
                    width: 80,
                    margin: '0 8px',
                }}
                onChange={onCurrencyChange}
            >
                <Option value="lbs">lbs</Option>
                <Option value="kg">kg</Option>
            </Select>
        </span>
    );
};