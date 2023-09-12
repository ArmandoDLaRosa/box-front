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
        match_id: match_id,
        robot_id: robot_id,
        stats: JSON.stringify(values) || "",
        created_by: user,
        updated_by: user
      }),
    })
      .then(() => {
        alert('Match posted!');
        form.resetFields();
        setActiveSections(['section1']);

      })
      .catch((error) => {
          console.error(error);
          if ('serviceWorker' in navigator && 'SyncManager' in window) {
            // Register a sync event and queue the request
            navigator.serviceWorker.ready
              .then((registration) => {
                // Queue the failed request
                registration.sync.register('pitSync').then(() => {
                  // Clear input variables
                  form.resetFields();
                  setActiveSections(['section1']);
      
                  // Show queued message
                  alert('Match queued!');
      
                  // Listen for sync event to know when the sync is complete
                  navigator.serviceWorker.addEventListener('message', (event) => {
                    if (event.data.type === 'syncComplete') {
                      // Show success message
                      alert('Adding successful!');
                    }
                    else{
                      alert('Adding failed! Try again when you are online.')
                    }
                  });
                });
              })
              .catch((err) => console.error(err));
          } else {
            // Show error message if browser doesn't support Background Sync
            alert('Adding failed! Try again when you are online.');
          }
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
              <Form.Item label="Team Number" name="field1" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Match Number" name="field2" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Scouter" name="field3" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Panel>
            <Panel header="Auto" key="section2" id="section2">
              <Form.Item label="Robot's starting position" name="field4">
                <Radio.Group>
                  <Card hoverable style={{ width: 200, height: 170 }} cover={<img alt="field" src={require(`../image/STARTING.jpg`)} />} />
                  <Radio value="1">A</Radio>
                  <Radio value="2">B</Radio>
                  <Radio value="3">C</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Number of game pieces placed on the 1st level" name="field5">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Number of game pieces placed on the 2nd level" name="field6">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Number of game pieces placed on the 3rd level" name="field7">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Zone(s) where game pieces where placed" name="field8" >
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
              <Form.Item label="Game Piece Type(s)" name="field9" >
                <GPInput />
              </Form.Item>
              <Form.Item label="Mobility Points" name="field10">
                <Radio.Group>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Yes</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Charge Station State" name="field11">
                <Radio.Group>
                  <Radio value="1">Docked</Radio>
                  <Radio value="2">Engaged</Radio>
                </Radio.Group>
              </Form.Item>
            </Panel>
            <Panel header="Teleop" key="section3" id="section3">
              <Form.Item label="Number of game pieces placed on the 1st level" name="field12">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Number of game pieces placed on the 2nd level" name="field13">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Number of game pieces placed on the 3rd level" name="field14">
                <ClickerInput />
              </Form.Item>
              <Form.Item label="Zone(s) where game pieces where placed" name="field15" >
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
              <Form.Item label="Game Piece Type(s)" name="field16" >
                <GPInput />
              </Form.Item>
              <Form.Item label="Charge Station State" name="field17">
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
                  <Radio value="0">No</Radio>
                  <Radio value="1">Yes</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Defense" name="field19">
                <Radio.Group onChange={handleDefenseChange} value={defenseValue}>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Yes</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Defense Score" name="field20">
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
              <Form.Item label="Disconnection" name="field21" >
                <Radio.Group onChange={handleDefenseChange} value={defenseValue}>
                  <Radio value="0">No</Radio>
                  <Radio value="1">Yes</Radio>
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