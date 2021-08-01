import React, { useState } from "react";
import { Row, Col, Button, Input, Form , Upload  } from "antd";
import ImgCrop from 'antd-img-crop';

const Update = (data) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  React.useEffect((key) => {
    form.setFieldsValue({
      image: data.image,
      address: data.address,
      username: data.username,
      Role: data.Role,
      Company: data.Company,
    });
  }, []);
  return (
    <>
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <Col lg={12} style={{ paddingRight: "20px", width: "100%" }}>
            <Form.Item
              label="รูปภาพ"
              name="image"
              style={{ width: "100%" }}
            >
              <ImgCrop rotate>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && '+ Upload'}
            </Upload>
          </ImgCrop>
          
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
          </Col>


          <Col lg={12} style={{ width: "100%" }}>
            <Form.Item
              label="Role"
              name="Role"
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Company"
              name="Company"
              style={{ width: "100%" }}
            >
              <Input />
            </Form.Item>
          </Col>


        </Row>
        <Form.Item style={{ textAlign: "center" }}>
          <Button htmlType="button">ยกเลิก</Button>
          <Button
            htmlType="submit"
            style={{
              borderRadius: "2px",
              color: "white",
              background: "#21B253",
              border:"2px #21B253",
            }}
          >
            บัมทึก
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Update
