import React, { useState } from 'react';
import { Checkbox, Col, Row} from 'antd';



export default function GPInput({onChange }) {
    const [ambosChecked, setAmbosChecked] = useState(false);
    const [aChecked, setAChecked] = useState(false);
    const [bChecked, setBChecked] = useState(false);    
    const handleAmbosChange = (e) => {
        setAmbosChecked(e.target.checked);
      };
    
    return (
        <div>
        <Checkbox.Group onChange={onChange}>
                  <Row>
                    <Col span={8}>
                      <Checkbox value="1" style={{ lineHeight: '32px' }} disabled={ambosChecked  || bChecked}  onChange={(e) => setAChecked(e.target.checked)}>
                        Cono
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="2" style={{ lineHeight: '32px' }} disabled={ambosChecked || aChecked} onChange={(e) => setBChecked(e.target.checked)}>
                        Cubos
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="3" style={{ lineHeight: '32px' }} disabled={aChecked || bChecked}  onChange={handleAmbosChange}   >
                        Ambos
                      </Checkbox>
                    </Col>                    
                  </Row>
                </Checkbox.Group>
        </div>
    )
}