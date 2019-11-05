/**
 *
 * SignUpForm
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { withPwdConfirmationForm } from 'utils/formHandlers/withPwdConfirmationForm';
import { updateFieldsErrors } from 'utils/formHandlers/updateFieldsErrors';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';

import FormFooter from '../FormFooter/index';

import * as inputsSettings from './constants';

const { Item } = Form;

function SignUpForm({
  form,
  onPwdConfirmationBlur,
  compareToPwd,
  compareToPwdConfirmation,
  onSubmit,
  submitInfo,
  history,
}) {
  const handleSubmit = async e => {
    e.preventDefault();
    const validateRes = await form.validateFields();
    onSubmit(validateRes);
  };

  const handleErrorFromServer = () => {
    const { signUpErrors } = submitInfo;
    if (!signUpErrors) return;

    updateFieldsErrors(signUpErrors, form);
  };

  useEffect(() => {
    if (submitInfo.signUpSuccess) {
      history.push('/login');
    }

    handleErrorFromServer();
  }, [submitInfo.signUpErrors, submitInfo.signUpSuccess]);

  return (
    <Form onSubmit={handleSubmit}>
      {inputsSettings.inputs.map(input => (
        <Item key={input.name}>
          {form.getFieldDecorator(input.name, {
            rules: input.rules(
              input.name === 'password_confirmation'
                ? compareToPwd
                : input.name === 'password' && compareToPwdConfirmation,
            ),
          })(
            input.type === 'password' ? (
              <Input.Password
                className="form-control"
                autoComplete="off"
                prefix={<Icon type={input.icon} />}
                placeholder={input.placeholder}
                name={input.name}
                type={input.type}
                // *** check password_confirmation when password field changes
                onBlur={
                  input.name === 'password_confirmation'
                    ? onPwdConfirmationBlur
                    : () => {}
                }
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
      <FormFooter />
    </Form>
  );
}

SignUpForm.propTypes = {
  form: PropTypes.object,
  onPwdConfirmationBlur: PropTypes.func,
  compareToPwd: PropTypes.func,
  compareToPwdConfirmation: PropTypes.func,
  onSubmit: PropTypes.func,
  submitInfo: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withPwdConfirmationForm({
  errorMessage: 'Mật khẩu nhập lại không trùng nhau',
  pwdConfirmationFieldName: 'password_confirmation',
  pwdFieldName: 'password',
})(SignUpForm);
