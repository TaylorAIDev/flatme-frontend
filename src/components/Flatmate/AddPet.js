import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { message, Upload, Input, Row, Col, Select, AutoComplete } from 'antd';
import { useEffect } from 'react';
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
function AddPet(props) {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [data, setData] = useState();
    const uploadButton = (
        <div>
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

    const handleChangeData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const onChangeSelect = (value) => {
        setData({
            ...data,
            "kind": value
        })
    }

    console.log("image url", imageUrl);
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
        <div style={{ borderStyle: 'solid', width: '100%', marginLeft: '0', marginBottom: '0', marginTop: '10px', borderRadius: '20px', display: 'flex' }}>
            <Row>
                <Col lg={8} md={24} sm={24} className='d-flex justify-content-center mt-3'>
                    <div>
                        <Upload
                            style={{ transform: 'scale(10)' }}
                            name="avatar"
                            listType="picture-circle"
                            className="avatar-uploader"
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%'
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                    </div>
                </Col>
                <Col lg={16} md={24} sm={24}>
                    <div className='d-flex m-4'>
                        <Input size="large" placeholder="Name" name="name" onChange={handleChangeData}
                            prefix={<UserOutlined />}/>
                    </div>
                    <div className='d-flex m-4'>
                            <Select
                                style={{ width: '50%' }}
                                showSearch
                                placeholder="Kind"
                                optionFilterProp="children"
                                name="kind"
                                onChange={onChangeSelect}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'cat',
                                        label: 'cat',
                                    },
                                    {
                                        value: 'dog',
                                        label: 'dog',
                                    },
                                    {
                                        value: 'fish',
                                        label: 'fish',
                                    },
                                    {
                                        value: 'bird',
                                        label: 'bird',
                                    },
                                    {
                                        value: 'reptile',
                                        label: 'reptile',
                                    },
                                    {
                                        value: 'other',
                                        label: 'other',
                                    }
                                ]}
                            />
                    </div>
                    <Row className='m-4'>
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
    )
}
export default AddPet