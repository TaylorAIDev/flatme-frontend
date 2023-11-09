import React, { useState, useEffect } from 'react';
import { PlusOutlined, MinusCircleOutlined} from '@ant-design/icons';
import { Button, Form } from 'antd';
import AddAnotherPerson from './AddAnotherPerson';
import AddPet from './AddPet'
import '../../App.css'

const Register = (props) => {

    const [data, setData] = useState([{}]);
    const [flagArray, setFlagArray] = useState([]);
    //let flagArray = [];

    const formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 20,
                offset: 4,
            },
        },
    };

    const handleChange = (subData, index) => {
        let tempData = [...data];
        tempData[index] = { ...subData };
        setData([...tempData]);
    }

    console.log("input data", data);

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    useEffect(() => {
        window.$('.flatmate-sb-else').children().children().css({display: "flex", justifyContent: "center"});
        window.$('.flatmate-sb-else').children().children().children().removeClass("ant-col-sm-offset-4");

        props.setFlat(data);

        return () => {

        }
    }, [data])
    return (
        <div className="zoomout">
            <h2>Who else will be living at the flat?</h2>
            <Form
                name="dynamic_form_item"
                {...formItemLayoutWithOutLabel}
                onFinish={onFinish}
            >
                <Form.List
                    name="names"
                    className='m-2'
                >
                    {(fields, { add, remove }, { errors }) => (

                        <div className='flatmate-sb-else'>
                            <Form.Item><AddAnotherPerson onChangeInput={(subData) => { handleChange(subData, 0) }} /></Form.Item>
                            {fields.map((field, index) => (
                                <Form.Item>
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: "Please input passenger's name or delete this field.",
                                            },
                                        ]}
                                        style={{ 'position': 'relative' }}
                                    >
                                        {flagArray[index] && <AddPet onChangeInput={(subData) => { handleChange(subData, index + 1) }} />}
                                        {!flagArray[index] && <AddAnotherPerson onChangeInput={(subData) => { handleChange(subData, index + 1) }} />}
                                        {console.log("index", index)}
                                        {console.log("flagArray", flagArray)}
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => {
                                                flagArray.pop(flagArray[index]);
                                                data.pop(data[index + 1]);
                                                remove(field.name);
                                            }}
                                        />
                                    </Form.Item>
                                </Form.Item>

                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        flagArray.push(false)
                                        add('The head item', 0);
                                    }}
                                    style={{
                                        width: '100%',
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    😀Add another person
                                </Button>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        flagArray.push(true);
                                        data.push({});
                                        add();
                                    }}
                                    style={{
                                        width: '100%',
                                        marginTop: '20px',
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    🐾Add a pet
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </div>
                    )}
                </Form.List>
            </Form>
        </div>
    );
};
export default Register;

