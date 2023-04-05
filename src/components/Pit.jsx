import React, { useEffect, useState } from "react";
import { Col, Checkbox, Row, Radio, Button, Collapse, Form, Input, Typography, Select } from 'antd';
import ClickerInput from "./clicker";
import SliderInput from "./slidericon";
import TeamInput from "./teams";
import LengthInput from "./lngt_unit";
import WeightInput from "./wght_unit";

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
      field4_unit: 'section2',
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
      field33: 'section6',
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
        <Form form={form} onFinish={onFinish} onFinishFailed={onError} scrollToFirstError={true} style={{ width: '100%', fontSize: '1.8em' }}>
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
              <Form.Item label="Altura del robot" name="field4">
                <LengthInput />
              </Form.Item>
              <Form.Item label="Peso del robot" name="field5" >
                <WeightInput />
              </Form.Item>
              <Form.Item label="# de motores en el chasis" name="field6" >
                <ClickerInput />
              </Form.Item>
              <Form.Item label="# de motores en el intake" name="field7" >
                <ClickerInput />
              </Form.Item>
              <Form.Item label="# de motores en el elevador" name="field8" >
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Tipo de chasis" name="field9">
                <Select>
                  <Select.Option value="KOP">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/KOP.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>KOP</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Tread Tank">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/TREAD.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Tread Tank</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="West coast">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/WEST.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>West coast</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="H-drive">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/HDRIVE.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>H-drive</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Mecanum">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/MECANUM.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Mecanum</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Swerve">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/SWERVE.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Swerve</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Holonomic">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/HOLONOMIC.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Holonomic</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Kiwi">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/KIWI.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Kiwi</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Butterfly">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/BUTTERFLY.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Butterfly</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Hybrid">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/HYBRID.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.5em" }}>Hybrid</div>
                    </div>
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Type of wheels" name="field10">
                <Select mode="multiple">
                  <Select.Option value="KOP">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/KOP_wheel.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>KOP</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Plaction">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/PLACTION_wheel.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Plaction</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Neumática">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/NEUMATICA_wheel.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Neumática</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Omni">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/OMNI_wheel.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Omni</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Traction">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/TRACTION_wheel.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Traction</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Colson">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/COLSON_wheel.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Colson</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Swerve">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/SWERVE_wheel.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Swerve</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Ninguna">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/OTHER_wheel.jpg`)} style={{ width: 70, height: 50 }} />
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
                      <img alt="field" src={require(`../image/GYROSCOPE.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Giroscopio</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Ultrasónico">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/ULTRASONIC.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Ultrasónico</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Navx">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/NAVX.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Navx</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Encoders">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/ENCODERS.jpg`)} style={{ width: 70, height: 50 }} />
                      <div style={{ marginLeft: "0.5em", marginTop: "-1.975em" }}>Encoders</div>
                    </div>
                  </Select.Option>
                  <Select.Option value="Otro">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt="field" src={require(`../image/SENSOR.jpg`)} style={{ width: 70, height: 50 }} />
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
                  <Radio value="2">Tal vez</Radio>
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
              <Form.Item label="Charge Station Status" name="field20">
                <Radio.Group>
                  <Radio value="1">Docked</Radio>
                  <Radio value="2">Engaged</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="¿Recoge gp en autónomo?" name="field21">
                <Radio.Group>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Sí</Radio>
                  <Radio value="2">Tal vez</Radio>
                </Radio.Group>
              </Form.Item>
            </Panel>
            <Panel header="Mecanismos" key="section4" id="section4">
              <Form.Item label="¿De dónde recoge las gp?" name="field22" >
                <Checkbox.Group >
                  <Row style={{ display: "inline" }}>
                    <Col span={8}>
                      <Checkbox value="A" style={{ lineHeight: '32px' }} >
                        Piso
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="B" style={{ lineHeight: '32px' }} >
                        Single substation
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="C" style={{ lineHeight: '32px' }}>
                        Double substation
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item label="¿En qué nivel coloca las gp en teleop?" name="field23" >
                <Checkbox.Group >
                  <Row style={{ display: "box" }}>
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
              <Form.Item label="Tipo de mecanismo del intake" name="field24">
                <Radio.Group>
                  <Radio value="0">Neumático</Radio>
                  <Radio value="1">Motorizado</Radio>
                  <Radio value="2">Actuadores Lineales</Radio>
                  <Radio value="3">Posicionamiento</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Tipo de mecanismo del elevador" name="field25" >
                <Checkbox.Group >
                  <Row style={{ display: "inline" }}>
                    <Col span={8}>
                      <Checkbox value="A" style={{ lineHeight: '32px' }} >
                        Neumático
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="B" style={{ lineHeight: '32px' }} >
                        Motorizado
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="C" style={{ lineHeight: '32px' }}>
                        Disparador
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="D" style={{ lineHeight: '32px' }}>
                        Catapulta
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="E" style={{ lineHeight: '32px' }}>
                        Torreta
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="F" style={{ lineHeight: '32px' }}>
                        Rampa
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="G" style={{ lineHeight: '32px' }}>
                        Everybot
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item label="¿Se balancea?" name="field26">
                <Radio.Group>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Sí</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="¿De manera automática?" name="field27">
                <Radio.Group>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Sí</Radio>
                </Radio.Group>
              </Form.Item>
            </Panel>
            <Panel header="Pre visualización del partido" key="section5" id="section5">
              <Form.Item label="Número de gp colocadas" name="field28">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="¿Hace defensa?" name="field29">
                <Radio.Group>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Sí</Radio>
                  <Radio value="2">Tal vez</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Prioridad del equipo" name="field30" >
                <Checkbox.Group >
                  <Row style={{ display: "inline" }}>
                    <Col span={8}>
                      <Checkbox value="A" style={{ lineHeight: '32px' }} >
                        Conos
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="B" style={{ lineHeight: '32px' }} >
                        Cubos
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="C" style={{ lineHeight: '32px' }}>
                        Nivel específico
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="D" style={{ lineHeight: '32px' }}>
                        Asistir a alianza/defensa
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Panel>
            <Panel header="Comentarios" key="section6" id="section6">
              <Form.Item label="Evaluación del robot" name="field31">
                <SliderInput />
              </Form.Item>
              <Form.Item label="Evaluación del equipo" name="field32">
                <SliderInput />
              </Form.Item>
              <Form.Item label="Comentario" name="field33">
                <Input.TextArea showCount maxLength={100} />
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