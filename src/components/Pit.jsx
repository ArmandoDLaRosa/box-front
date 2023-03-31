import React, { useEffect, useState } from "react";
import { Card, Col, Checkbox, Row, Radio, Button, Collapse, Form, Input, Typography, InputNumber, Select } from 'antd';
import ReactQuill from 'react-quill';
import ClickerInput from "./clicker";
import 'react-quill/dist/quill.snow.css';

const { Title } = Typography;
const { Panel } = Collapse;

export default function Qual() {
  const [form] = Form.useForm();
  const [activeSections, setActiveSections] = useState(['section1']);

  const onFinish = (values) => {
    console.log(values)
    form.resetFields();
    setActiveSections(['section1']);
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
      // Section 3
      field11: 'section3',
      field12: 'section3',
      field13: 'section3',
      field14: 'section3',
      field15: 'section3',
      field16: 'section3',
      field17: 'section3',
      field18: 'section3',
      field19: 'section3',
      field20: 'section3',
      field21: 'section3',
      // Section 4
      field22: 'section4',
      field23: 'section4',
      field24: 'section4',
      field25: 'section4',
      field26: 'section4',
      field27: 'section4',
      // Section 5
      field28: 'section5',
      field29: 'section5',
      field30: 'section5',
      // Section 6
      field31: 'section6',
      field32: 'section6',
    };
    setActiveSections(fieldsWithError.map(({ name }) => fieldToPanelMap[name]));
    form.scrollToField(fieldsWithError[0].name);
  };



  const handleSectionChange = (openPanels) => {
    // keep only the last panel that was opened
    setActiveSections(openPanels.slice(-1));
    const lastOpenedPanel = openPanels.slice(-1)[0];

    // Scroll to the top of the opened section   
    if (lastOpenedPanel) {
      // This is for Desktop
      const openedSection = document.getElementById(lastOpenedPanel);
      openedSection.scrollIntoView({ behavior: "smooth" });

      // This is for Mobile
      const offset = openedSection.offsetTop;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Title>Pits</Title>
        </Col>
      </Row>
      <Row gutter={[5, 5]}>
        <Form form={form} onFinish={onFinish} onFinishFailed={onError} scrollToFirstError={{ behavior: 'smooth' }} style={{ width: '100%', fontSize: '1.8em' }}>
          <Collapse activeKey={activeSections} onChange={handleSectionChange} className="quant-collapse">
            <Panel header="Team Data" key="section1" id="section1">
              <Form.Item label="Número de Equipo" name="field1" rules={[{ required: true, message: 'Falta!' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Nombre del Equipo" name="field2" rules={[{ required: true, message: 'Falta!' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Scouter" name="field3" rules={[{ required: true, message: 'Falta!' }]}>
                <Input />
              </Form.Item>
            </Panel>
            <Panel header="Especificaciones del robot" key="section2" id="section2">
              <Form.Item label="Altura del robot (metros)" name="field4" >
                <InputNumber
                  defaultValue="0"
                  min="0"
                  max="10"
                  step="0.01"
                  stringMode
                />
              </Form.Item>
              <Form.Item label="Peso del robot (kilos)" name="field5" >
                <InputNumber
                  defaultValue="0"
                  min="0"
                  max="10"
                  step="0.01"
                  stringMode
                />
              </Form.Item>
              <Form.Item label="# de motores en el chasis" name="field6" >
                <InputNumber
                  defaultValue="0"
                  min="0"
                  step="1"
                  stringMode
                />
              </Form.Item>
              <Form.Item label="# de motores en el intake" name="field7" >
                <InputNumber
                  defaultValue="0"
                  min="0"
                  step="1"
                  stringMode
                />
              </Form.Item>
              <Form.Item label="# de motores en el elevador" name="field8" >
                <InputNumber
                  defaultValue="0"
                  min="0"
                  step="1"
                  stringMode
                />
              </Form.Item>
              <Form.Item label="Tipo de chasis" name="field9">
                <Select >

                  <Select.Option value="KOP">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>KOP</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Tread Tank">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Tread Tank</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="West coast">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>West coast</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="H-drive">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>H-drive</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Mecanum">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Mecanum</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Swerve">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Swerve</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Holonomic">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Holonomic</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Kiwi">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Kiwi</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Butterfly">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Butterfly</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Hybrid">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Hybrid</div>
                    </div>
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Type of wheels" name="field10">
                <Select mode="multiple">
                  <Select.Option value="KOP">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>KOP</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Plaction">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Plaction</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Neumática">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Neumática</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Omni">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Omni</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Traction">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Traction</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Colson">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Colson</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Swerve">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Swerve</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Ninguna">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Ninguna de las anteriores</div>
                    </div>
                  </Select.Option>
                </Select>
              </Form.Item>
            </Panel>
            <Panel header="Especificaciones de programación" key="section3" id="section3">
              <Form.Item label="Lenguaje de programación" name="field11">
                <Radio.Group>
                  <Radio value="1">Java</Radio>
                  <Radio value="2">LabView</Radio>
                  <Radio value="3">C++</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Visión por computadora" name="field12">
                <Radio.Group>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Sí</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="# de cámaras" name="field13">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="¿Usa sensores?" name="field14">
                <Radio.Group>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Sí</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Tipos de sensores usados" name="field15">
                <Select mode="multiple">
                  <Select.Option value="Giroscopio">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Giroscopio</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Ultrasónico">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Ultrasónico</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Navx">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Navx</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Encoders">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Encoders</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Otro">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/STARTING.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Otro</div>
                    </div>
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="¿Tiene autónomo?" name="field16">
                <Radio.Group>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Sí</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="¿Hace el mobility?" name="field17">
                <Radio.Group>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Sí</Radio>
                  <Radio value="1">Tal vez</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="¿Cuántas game pieces coloca en el autónomo?" name="field18">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Nivel en que las coloca" name="field19" >
                <Checkbox.Group >
                  <Row style={{ display: "flex" }}>
                    <Col span={8}>
                      <Checkbox value="A" style={{ lineHeight: '32px' }} >
                        1
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="B" style={{ lineHeight: '32px' }} >
                        2
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="C" style={{ lineHeight: '32px' }}>
                        3
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Panel>
            <Panel header="Mecanismos" key="section4" id="section4">
            </Panel>
            <Panel header="Pre visualización del partido" key="section5" id="section5">
              <Panel header="Comentarios" key="section6" id="section6">
              </Panel>
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