import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getSinglePost, submitUpdate } from "../components/patchApiCall";
import { UserContext } from "../App";
import { Button, Col, Form, Input, Row, Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function UpdatePost() {
  const [form] = Form.useForm();
  const [post, setPost] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const { id, mode } = useParams();
  const history = useHistory();
  const [fields, setFields] = useState();

  useEffect(() => {
    if (mode === "update") {
      getSinglePost(id, setPost);
    }
  }, [id]);

  useEffect(() => {
    const initialPost = {
      post: post && post.post,
    };

    form.setFieldsValue(initialPost);
  }, [post]);

  return (
    <Row justify="center">
      <Col span={10}>
        <Form
          layout="horizontal"
          enterButton="Post"
          style={{ width: 400 }}
          onFinish={(post) => {
            submitUpdate(post, fields, user, history, id, setLoading);
          }}
          fields={fields}
          onFieldsChange={(changedField, field) => setFields(field)}
        >
          <Form.Item label="Update Post" name="post">
            <Input />
          </Form.Item>
          <Form.Item>
            <Row justify="end">
              <Button type="primary" htmlType="submit">
                Submit
                {loading && <Spin indicator={antIcon} />}
              </Button>
            </Row>
            <p id="formPrompt"></p> <br /> &nbsp;
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default UpdatePost;
