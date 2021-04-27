import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getSinglePost, submitUpdate } from "../components/patchApiCall";
import { UserContext } from "../App";
import { Button, Col, Form, Input, Row, Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function UpdatePost() {
  const [form] = Form.useForm();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const { mode, id } = useParams();
  const history = useHistory();
  const [fields, setFields] = useState();

  useEffect(() => {
    if (mode === "update") {
      getSinglePost(id, setPost);

      console.log(id, "getsingpost update page");
    }
  }, [mode, id]);

  useEffect(() => {
    if (mode === "update") {
      form.setFieldsValue({
        post: post && post.data.post,
      });
    }
    console.log({ post });
  }, [post]);

  return (
      <>
    <Row justify="center">
      <Col span={10}>
        <Form
          form={form}
          layout="horizontal"
          fields={fields}
          onFieldsChange={(changedField, allFields) => setFields(allFields)}
          onFinish={(post) => {
            submitUpdate(post, fields, user, history, id, setLoading);
          }}
        >
            <br/>
            <br/>
            
          <Form.Item
            label="Edit Your Post"
            name="post"
            rules={[
              {
                required: true,
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Row justify="end">
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
              
            </Row>
          </Form.Item>
        </Form>
      </Col>
    </Row>
    </>
  );
}

export default UpdatePost;
