
import React from 'react';
import { Select } from 'antd';


export default function TeamInput({ value, onChange }) {
  return (
    <div>
      <Select
        value={value}
        onChange={onChange}
        showSearch
        placeholder="Select a team"
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) => (optionA?.value - optionB?.value)}
        options={[
          {
            value: 31,
            label: '31 - Prime Movers',
          },
          {
            value: 935,
            label: '935 - RaileRobotics',
          },
          {
            value: 1209,
            label: '1209 -Robo Hornets',
          },
          {
            value: 1339,
            label: '1339 - AngelBotics',
          },
          {
            value: 1561,
            label: '1209 -Robo Hornets',
          },
          {
            value: 1750,
            label: '1209 -Robo Hornets',
          },
          {
            value: 1806,
            label: '1209 -Robo Hornets',
          },
          {
            value: 1986,
            label: '1209 -Robo Hornets',
          }
        ]}
      />
    </div>
  )
}

