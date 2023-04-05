import React, { useEffect, useState } from "react";
import { Col, Row, Button, Collapse, Form, Input, Typography } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const { Title } = Typography;
const { Panel } = Collapse;

export default function Qual() {
  const [value, setValue] = useState('');
  const [form] = Form.useForm();
  const [activeSections, setActiveSections] = useState(['section1']);
  
  const onFinish = (values) => {
    fetch('http://127.0.0.1:5000/qual', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          match_id:  values["field2"],
          robot_id:  values["field1"], 
          analysis:  values["field4"], 
          created_by: values["field3"], 
          updated_by: values["field3"]
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
      field4: 'section2'
    };
    setActiveSections(fieldsWithError.map(({ name }) => fieldToPanelMap[name]));
    form.scrollToField(fieldsWithError[0].name);
  };

  const handleSectionChange = (openPanels) => {
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

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Title>Qualitative</Title>
        </Col>
      </Row>
      <Row gutter={[5, 5]}>
        <Form form={form} onFinish={onFinish} onFinishFailed={onError} scrollToFirstError={true} style={{ width: '100%', fontSize: '1.8em' }}>
          <Collapse activeKey={activeSections} onChange={handleSectionChange} className="quant-collapse">
            <Panel header="Match Data" key="section1" id="section1">
              <Form.Item label="Número de Equipo" name="field1" rules={[{ required: true, message: 'Falta!' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Número de Partido" name="field2" rules={[{ required: true, message: 'Falta!' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Scouter" name="field3" rules={[{ required: true, message: 'Falta!' }]}>
                <Input />
              </Form.Item>
            </Panel>
            <Panel header="Match" key="section2" id="section2">
              <Form.Item label="Análisis" name="field4" rules={[{ required: true, message: 'Falta!' }]}>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
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