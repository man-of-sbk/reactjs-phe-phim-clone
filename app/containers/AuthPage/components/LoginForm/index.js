/**
 *
 * LoginForm
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Form from 'antd/lib/form';
import message from 'antd/lib/message';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';

import FormFooter from '../FormFooter/index';

import * as inputsSettings from './constants';

const { Item } = Form;

function LoginForm({
  form,
  onSubmit,
  submitInfo,
  resetSubmitSuccess,
  resetSubmitFailed,
  history,
  location,
}) {
  const handleSubmit = async e => {
    e.preventDefault();
    const validateRes = await form.validateFields();
    onSubmit(validateRes);
  };

  useEffect(() => {
    if (submitInfo.logInErrors) {
      message.error('Đăng nhập không thành công');
      resetSubmitFailed();
    }

    if (submitInfo.signUpSuccess) {
      message.success('Đăng ký thành công');
      resetSubmitSuccess();
    }

    if (
      submitInfo.logInSuccess &&
      (location.state && !location.state.requestFromProfile)
    ) {
      message.success('Đăng nhập thành công');
      resetSubmitSuccess();
      history.replace('/');
    }
  }, [
    submitInfo.logInErrors,
    submitInfo.signUpSuccess,
    submitInfo.logInSuccess,
  ]);

  return (
    <Form onSubmit={handleSubmit}>
      {inputsSettings.inputs.map(input => (
        <Item key={input.name}>
          {form.getFieldDecorator(input.name, {
            rules: input.rules,
          })(
            input.type === 'password' ? (
              <Input.Password
                className="form-control"
                autoComplete="off"
                prefix={<Icon type={input.icon} />}
                placeholder={input.placeholder}
                name={input.name}
                type={input.type}
              />
            ) : (
              <Input
                className="form-control"
                autoComplete="off"
                prefix={<Icon type={input.icon} />}
                placeholder={input.placeholder}
                name={input.name}
                type={input.type}
              />
            ),
          )}
        </Item>
      ))}

      <FormFooter form="login" />
    </Form>
  );
}

LoginForm.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
  submitInfo: PropTypes.object.isRequired,
  resetSubmitSuccess: PropTypes.func.isRequired,
  resetSubmitFailed: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Form.create({ name: 'login_form' })(LoginForm);
