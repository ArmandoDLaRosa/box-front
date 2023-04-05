import React, { useState } from 'react';
import { Form, Input, Button, Slider, Collapse, Checkbox, Card, Col, Row, Radio, Typography } from 'antd';
import ClickerInput from "./clicker";
import GPInput from "./gp";

const { Panel } = Collapse;
const { Title } = Typography;


export default function Quant() {
  const [form] = Form.useForm();
  const [activeSections, setActiveSections] = useState(['section1']);
  const [defenseValue, setDefenseValue] = useState('');

  const onFinish = (values) => {
    const match_id = values['field2'];
    const robot_id = values['field1'];
    const user = values['field3'];
    delete values['field2'];
    delete values['field1'];
    delete values['field3'];
    fetch('https://siabox.herokuapp.com/quant', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          match_id:  match_id,
          robot_id:  robot_id, 
          stats:  JSON.stringify(values), 
          created_by: user, 
          updated_by: user
        }),
      })
      .then(() => {
        console.log("Success: ", values)
        form.resetFields();
        setActiveSections(['section1']);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  const onError = (values) => {
    const fieldsWithError = form.getFieldsError().filter(({ errors }) => errors.length > 0);
    const fieldToPanelMap = {
      // Section 1
      field1: 'section1',
      field2: 'section1',
      field3: 'section1',
      // Section 2
      field4: 'section2',
      field5: 'section2',
      field6: 'section2',
      field7: 'section2',
      field8: 'section2',
      field9: 'section2',
      field10: 'section2',
      field11: 'section2',
      // Section 3
      field12: 'section3',
      field13: 'section3',
      field14: 'section3',
      field15: 'section3',
      field16: 'section3',
      field17: 'section3',
      // Section 4
      field18: 'section4',
      field19: 'section4',
      field20: 'section4',
      field21: 'section4',
    };
    setActiveSections(fieldsWithError.map(({ name }) => fieldToPanelMap[name]));
    form.scrollToField(fieldsWithError[0].name);
  };


  
  const handleSectionChange = (openPanels) => {
    console.log(openPanels);

    setActiveSections(openPanels.slice(-1)); // keep only the last panel that was opened
    const lastOpenedPanel = openPanels.slice(-1)[0];

    // Scroll to the top of the opened section   
    if (lastOpenedPanel) {
      const openedSection = document.getElementById(lastOpenedPanel);
      openedSection.scrollIntoView({ behavior: "smooth" });
      const offset = openedSection.offsetTop;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const handleDefenseChange = (e) => {
    setDefenseValue(e.target.value);
  };

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Title>Quantitave</Title>
        </Col>
      </Row>
      <Row gutter={[5, 5]}>
        <Form form={form} onFinish={onFinish} onFinishFailed={onError} scrollToFirstError={true} style={{ width: '100%', fontSize: '1.8em' }}>
          <Collapse activeKey={activeSections} onChange={handleSectionChange} className="quant-collapse">
            <Panel header="Match Data" key="section1" id="section1">
              <Form.Item label="Número de Equipo" name="field1" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Número de Partido" name="field2" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Scouter" name="field3" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Panel>
            <Panel header="Autonomo" key="section2" id="section2">
              <Form.Item label="Punto de inicio del robot" name="field4">
                <Radio.Group>
                  <Card hoverable style={{ width: 200, height: 170 }} cover={<img alt="field" src={require(`../image/STARTING.jpg`)} />} />
                  <Radio value="1">A</Radio>
                  <Radio value="2">B</Radio>
                  <Radio value="3">C</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Número de piezas colocadas en el primer nivel" name="field5">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Número de piezas colocadas en el segundo nivel" name="field6">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Número de piezas colocadas en el tercer nivel" name="field7">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Zona en la que colocó las gp" name="field8" >
                <Checkbox.Group >

                  <Row style={{ display: "block" }}>
                    <Col span={24}>
                      <Card hoverable style={{ width: 200, height: 140 }} cover={<img alt="field" src={require(`../image/GAMEP.jpg`)} style={{ display: 'block' }} />} />
                    </Col>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="1" style={{ lineHeight: '32px' }} >
                          A
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="2" style={{ lineHeight: '32px' }} >
                          B
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="3" style={{ lineHeight: '32px' }}>
                          C
                        </Checkbox>
                      </Col>
                    </Row>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item label="Tipo de Game Piece manejada" name="field9" >
                <GPInput />
              </Form.Item>
              <Form.Item label="Mobility Points" name="field10">
                <Radio.Group>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Yes</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Estado de la rampa" name="field11">
                <Radio.Group>
                  <Radio value="1">Docked</Radio>
                  <Radio value="2">Engaged</Radio>
                </Radio.Group>
              </Form.Item>
            </Panel>
            <Panel header="Teleoperado" key="section3" id="section3">
              <Form.Item label="Número de piezas colocadas en el primer nivel" name="field12">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Número de piezas colocadas en el segundo nivel" name="field13">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Número de piezas colocadas en el tercer nivel" name="field14">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Zona en la que colocó las gp" name="field15" >
                <Checkbox.Group >

                  <Row style={{ display: "block" }}>
                    <Col span={24}>
                      <Card hoverable style={{ width: 200, height: 140 }} cover={<img alt="field" src={require(`../image/GAMEP.jpg`)} style={{ display: 'block' }} />} />
                    </Col>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="1" style={{ lineHeight: '32px' }} >
                          A
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="2" style={{ lineHeight: '32px' }} >
                          B
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="3" style={{ lineHeight: '32px' }}>
                          C
                        </Checkbox>
                      </Col>
                    </Row>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item label="Tipo de Game Piece manejada" name="field16" >
                <GPInput />
              </Form.Item>
              <Form.Item label="Estado de la rampa" name="field17">
                <Radio.Group>
                  <Radio value="0">Parked</Radio>
                  <Radio value="1">Docked</Radio>
                  <Radio value="2">Engaged</Radio>
                </Radio.Group>
              </Form.Item>
            </Panel>
            <Panel header="End" key="section4" id="section4">
              <Form.Item label="Feeder" name="field18">
                <Radio.Group>
                  <Radio value="0">NO</Radio>
                  <Radio value="1">YES</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Defensa" name="field19">
                <Radio.Group onChange={handleDefenseChange} value={defenseValue}>
                  <Radio value="0">NO</Radio>
                  <Radio value="1">YES</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Calificación de defensa" name="field20">
                <Slider
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
                  disabled={defenseValue === '0'}
                />
              </Form.Item>
              <Form.Item label="Desconexión" name="field21" >
                <Radio.Group onChange={handleDefenseChange} value={defenseValue}>
                  <Radio value="0">NO</Radio>
                  <Radio value="1">YES</Radio>
                </Radio.Group>
              </Form.Item>
            </Panel>
          </Collapse>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  )
}