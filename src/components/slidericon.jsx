

import React from 'react';
import { Slider } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

export default function SliderInput({ value = 0, onChange }) {
    return (
        <div style={{ display: "flex" }}>
            <FrownOutlined />
            <div style={{ flex: "1", margin: "0 10px" }}>
                <Slider
                    value={value} onChange={onChange}
                    marks={{
                        0: '0',
                        1: '1',
                        2: '2',
                        3: '3',
                        4: '4',
                        5: '5',
                        6: '6',
                        7: '7',
                        8: '8',
                        9: '9',
                        10: '10',
                    }}
                    initialValues={[0]}
                    min={0}
                    max={10}
                />
            </div>
            <SmileOutlined />
        </div>
    )
}
