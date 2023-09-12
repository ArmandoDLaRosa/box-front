import React from 'react';
import { InputNumber, Button } from 'antd';

export default function ClickerInput({ value = 0, onChange }) {
  const handleIncrease = () => {
    onChange(value + 1);
  };

  const handleDecrease = () => {
    onChange(value - 1);
  };

  return (
    <div className="input-group">
      <Button onClick={handleDecrease}>-</Button>
      <InputNumber value={value} onChange={onChange} className="my-input-number" />
      <Button onClick={handleIncrease}>+</Button>
    </div>
  )
}