/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/**
 *
 * NavbarDrawer
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import { updateFieldsErrors } from 'utils/formHandlers/updateFieldsErrors';

import Button from 'components/Button/index';
import StyledDrawer from '../styledComponents/StyledDrawer';
// import RightNavbar from 'components/RightNavbar/index';
// import styled from 'styled-components';

import { inputs } from '../configs';

const { Item } = Form;

function EditDrawer({
  onClose,
  visible,
  width,
  onSubmit,
  form,
  errorsFromServer,
  userInfo,
  ...rest
}) {
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = async e => {
    e.preventDefault();
    const validateRes = await validateFields();
    onSubmit(validateRes);
  };

  // *** validate errors from server
  useEffect(() => {
    if (!errorsFromServer) return;

    updateFieldsErrors(errorsFromServer, form);
  }, [errorsFromServer]);

  return (
    <StyledDrawer
      {...rest}
      width={width || 340}
      title="Chỉnh sửa thông tin cá nhân"
      placement="right"
      closable
      visible={visible}
      onClose={onClose}
    >
      <Form onSubmit={handleSubmit}>
        <Row gutter={24}>
          {userInfo &&
            inputs.map(input => (
              <Col xs={24} md={12} key={input.name}>
                <Item label={input.label}>
                  {getFieldDecorator(
                    input.name,
                    userInfo[input.name]
                      ? {
                          initialValue: userInfo[input.name],
                          rules: input.rules(),
                        }
                      : {
                          rules: input.rules(),
                        },
                  )(<Input type={input.type} placeholder={input.label} />)}
                </Item>
              </Col>
            ))}
        </Row>
      </Form>
      <div className="edit-drawer-footer">
        <Button
          bordered
          onClick={handleSubmit}
          className="submit-btn"
          type="primary"
          iconType="check"
        >
          Lưu
        </Button>
      </div>
    </StyledDrawer>
  );
}

EditDrawer.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  width: PropTypes.number,
  errorsFromServer: PropTypes.object,
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
};

export default Form.create()(EditDrawer);
