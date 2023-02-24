import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import LoginApi from '../api/login.api';

const ChangeEmail = (props) => {

    const onFinish = async (values) => {
    };


    return (<div style={{ marginTop: 20 }}>
        <h1 style={{ fontSize: "1.4em", fontWeight: "600", marginBottom: 40 }}>Change Email</h1>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}

            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            layout="vertical"
            autoComplete="off"
        >
            <Form.Item
                label="New Email"
                name="email"
                style={{ color: "white" }}
                rules={[
                    { required: true, message: 'Please input your username!' },
                    { pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Email Format pls' },
                    { min: 5, message: 'min 5 chars pls' },
                ]}
            >
                <Input placeholder='Enter your username' />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    span: 24,
                }}
            >
                <div >
                    <Button style={{ marginTop: 12, height: 40, backgroundColor: "#212121" }} type="primary" htmlType="submit">
                        Change Email
                    </Button>
                </div>
            </Form.Item>
        </Form>


    </div >)
};
export default ChangeEmail;