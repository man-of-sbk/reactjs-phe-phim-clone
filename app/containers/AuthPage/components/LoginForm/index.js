/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';

import PasswordInput from 'components/PasswordInput/index';
import Input from 'components/Input/index';
import FormFooter from '../FormFooter/index';

import * as inputsSettings from './constants';

const { Item } = Form;

function LoginForm({ form }) {
  const onSubmit = async e => {
    e.preventDefault();

    const validateRes = await form.validateFields();

    console.log(validateRes);
  };

  return (
    <Form onSubmit={onSubmit}>
      {inputsSettings.inputs.map(input => (
        <Item key={input.name}>
          {form.getFieldDecorator(input.name, {
            rules: input.rules,
          })(
            input.type === 'password' ? (
              <PasswordInput
                autoComplete="off"
                prefix={<Icon type={input.icon} />}
                placeholder={input.placeholder}
                name={input.name}
                type={input.type}
              />
            ) : (
              <Input
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
};

export default Form.create({ name: 'login_form' })(LoginForm);
