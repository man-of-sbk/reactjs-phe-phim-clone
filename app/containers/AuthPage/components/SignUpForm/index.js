/**
 *
 * SignUpForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';

import { withPwdConfirmationForm } from 'utils/withPwdConfirmationForm';

import Input from 'components/Input/index';
import FormFooter from '../FormFooter/index';

import * as inputsSettings from './constants';

const { Item } = Form;

function SignUpForm({
  form,
  onPwdConfirmationBlur,
  compareToPwd,
  compareToPwdConfirmation,
}) {
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
            rules: input.rules(
              input.name === 'password_confirmation'
                ? compareToPwd
                : input.name === 'password' && compareToPwdConfirmation,
            ),
          })(
            <Input
              autoComplete="off"
              prefix={<Icon type={input.icon} />}
              placeholder={input.placeholder}
              name={input.name}
              type={input.type}
              onBlur={
                input.name === 'password_confirmation'
                  ? onPwdConfirmationBlur
                  : () => {}
              }
            />,
          )}
        </Item>
      ))}

      <FormFooter />
    </Form>
  );
}

SignUpForm.propTypes = {
  form: PropTypes.object,
  onPwdConfirmationBlur: PropTypes.func,
  compareToPwd: PropTypes.func,
  compareToPwdConfirmation: PropTypes.func,
};

export default withPwdConfirmationForm({
  errorMessage: 'Mật khẩu nhập lại không trùng nhau',
  pwdConfirmationFieldName: 'password_confirmation',
  pwdFieldName: 'password',
})(SignUpForm);