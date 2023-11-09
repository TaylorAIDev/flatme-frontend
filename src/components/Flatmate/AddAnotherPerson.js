import React, { useState, useEffect } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload, Input, Row, Col, Radio, Space, Select, AutoComplete} from 'antd';
import { Label } from 'reactstrap'
import '../../App.css'

const { TextArea } = Input;

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const onSelect = (value) => {
    console.log('onSelect', value);
};

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
function AddAnotherPerson(props) {
    const [value, setValue] = useState(1);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [data, setData] = useState();

    const handleChangeData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const onChangeSelect = (value) => {
        setData({
            ...data,
            "age": value
        })
    }

    const uploadButton = (
        <div >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    const handleSearch = (value) => {
        setOptions(
            !value
                ? []
                : [
                    {
                        value,
                    },
                    {
                        value: value + value,
                    },
                    {
                        value: value + value + value,
                    },
                ],
        );
    }
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const handleChange = (info) => {
        console.log(info.file)
        if (info.file.percent === 100) {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
            setLoading(false)
            return;
        }
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

    };

    useEffect(() => {
        props.onChangeInput(data);

        return () => {

        }
    }, [data])

    return (
        <div>
            <div style={{ display: 'flex', borderStyle: 'solid', width: '100%', borderRadius: '20px'}}>
                <Row style={{display: 'flex', justifyContent: "center"}} align="top">
                    <Col lg={8} md={24} sm={24} className='d-flex justify-content-center mt-3'>
                        <div>
                            <Upload
                                name="avatar"
                                listType="picture-circle"
                                className="avatar-uploader"
                                showUploadList={false}
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? (
                                    <div>
                                        <img
                                            src={imageUrl}
                                            alt="avatar"
                                            style={{
                                                width: '100px',
                                                height: '100px',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    </div>

                                ) : (
                                    uploadButton
                                )}
                            </Upload>
                        </div>
                    </Col>
                    <Col lg={16} md={24} sm={24}>
                            <div className="form-floating d-flex m-4">
                                <Input type="text" className="form-control" name='name' onChange={handleChangeData}
                                    id="firstnamefloatingInput" placeholder="name" />
                                <Label htmlFor="firstnamefloatingInput">Name</Label>
                            </div>
                        <Row className='mt-3'>
                            <Col span={10} offset={2}>
                                <Radio.Group onChange={onChange} value={value} name="gender">
                                    <Space direction="vertical" >
                                        <Radio value={1}>Male</Radio>
                                        <Radio value={2}>Female</Radio>
                                        <Radio value={3}><Input disabled={value === 3? false: true} /></Radio>
                                    </Space>
                                </Radio.Group>
                            </Col>
                            <Col span={12}>
                                <Select
                                    style={{ width: '80%' }}
                                    showSearch
                                    placeholder="Age"
                                    optionFilterProp="children"
                                    onChange={onChangeSelect}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'Infant 0-2',
                                            label: 'Infant 0-2',
                                        },
                                        {
                                            value: 'Child 3-12',
                                            label: 'Child 3-12',
                                        },
                                        {
                                            value: 'Teen 13-15',
                                            label: 'Teen 13-15',
                                        },
                                        {
                                            value: 'Teen 16-19',
                                            label: 'Teen 16-19',
                                        },
                                        {
                                            value: '20s',
                                            label: '20s',
                                        },
                                        {
                                            value: '30s',
                                            label: '30s',
                                        },
                                        {
                                            value: '40s',
                                            label: '40s',
                                        },
                                        {
                                            value: '50s',
                                            label: '50s',
                                        },
                                        {
                                            value: '60s+',
                                            label: '60s+',
                                        },
                                    ]}
                                />
                            </Col>
                        </Row>
                        <Row className='m-2'>
                            <AutoComplete
                                options={options}
                                style={{
                                    width: 500,
                                }}
                                onSelect={onSelect}
                                onSearch={handleSearch}
                            >
                                <TextArea
                                    placeholder="input here"
                                    className="custom"
                                    name='text'
                                    onChange={handleChangeData}
                                    style={{
                                        height: 60,
                                    }}
                                />
                            </AutoComplete>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default AddAnotherPerson