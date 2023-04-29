import React, { useState } from "react";
import { useFormik } from "formik";
import StyleTotal from "./cssLoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import { ConfigProvider, Form, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN_SAGA } from "../../../redux/actionSaga/AuthActionSaga";


const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(
        LOGIN_SAGA({
          userLogin: values,
        })
      );
    },
  });

  return (
    <StyleTotal>
      <div className="loginForm">
        <div className="welcomeBack mb-12">
          <div className="icon_logo">
            <FontAwesomeIcon className="icon" icon={faSnowflake} />
          </div>
          <h2 className="title">Welcome back!</h2>
        </div>

        <ConfigProvider
          theme={{
            token: {
              colorTextBase: "#d4d4d4",
              colorBgBase: "#202021",
              lineWidth: 0,
              controlHeight: 40,
              borderRadius: 0,
            },
          }}
        >
          <Form
            className="w-full"
            style={{ width: "70%" }}
            onFinish={formik.handleSubmit}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Input
                placeholder="Email"
                allowClear
                prefix={<MailOutlined />}
                onChange={formik.handleChange}
              ></Input>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
                onChange={formik.handleChange}
              ></Input.Password>
            </Form.Item>
            <button
              type="submit"
              className="btn btn-primary w-full h-9 mb-4 mt-3 font-bold"
            >
              Login
            </button>
          </Form>
        </ConfigProvider>
        <div className="anotherLogin mt-10">
          <div className="title relative">
            <span className="absolute" style={{ color: "#d4d4d4" }}>
              or login with
            </span>
            <hr />
          </div>
          <div className="loginTool mt-10 w-full">
            <div className="google h-10">
              <span className="icon mr-2">
                <img src="./images/google.svg" alt="google" />
              </span>
              <span>Continue with Gmail</span>
            </div>
            <div className="github mt-4 h-10">
              <span className="icon mr-2">
                <img src="./images/github.svg" alt="github" />
              </span>
              <span>Continue with Github</span>
            </div>
          </div>
        </div>

        <div className="noAccount text-center mt-8">
          <span>Don't you have an account yet? </span>
          <span className="signUp ml-1">
            <NavLink to="/register">Sign up</NavLink>
          </span>
        </div>
      </div>
    </StyleTotal>
  );
};

export default LoginForm;