/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Form from 'antd/lib/form';

export const withPwdConfirmationForm = ({
  pwdFieldName,
  errorMessage,
  pwdConfirmationFieldName,
}) => Component => {
  function Wrapper({ form, ...rest }) {
    const [isPwdConfirmDirty, setIsPwdConfirmDirty] = useState(false);

    const onPwdConfirmBlur = () => {
      setIsPwdConfirmDirty(true);
    };

    const compareToPwd = (rule, value, callback) => {
      if (value && value !== form.getFieldValue(pwdFieldName)) {
        callback(errorMessage);
      } else {
        callback();
      }
    };

    const compareToPwdConfirmation = (rule, value, callback) => {
      if (value && isPwdConfirmDirty) {
        form.validateFields([pwdConfirmationFieldName]);
      }
      callback();
    };

    return (
      <Component
        {...rest}
        form={form}
        onPwdConfirmationBlur={onPwdConfirmBlur}
        // isPwdConfirmDirty={isPwdConfirmDirty}
        compareToPwd={compareToPwd}
        compareToPwdConfirmation={compareToPwdConfirmation}
      />
    );
  }

  Wrapper.propTypes = {
    form: PropTypes.object,
  };

  return Form.create()(Wrapper);
};
