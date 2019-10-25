/**
 *
 * FormFooter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Form from 'antd/lib/form';
import Button from 'components/Button/index';

const { Item } = Form;

function FormFooter({ form }) {
  const isLoginForm = form === 'login';

  return (
    <>
      <Item>
        <Button htmlType="submit">Đăng nhập</Button>
      </Item>
      <Item className="login-footer-addition-info">
        <span>
          Hoặc{' '}
          <Link to={isLoginForm ? '/signup' : '/login'}>
            {isLoginForm ? 'Đăng ký ngay' : 'Đăng nhập'}
          </Link>
        </span>
      </Item>
    </>
  );
}

FormFooter.propTypes = {
  form: PropTypes.string,
};

export default FormFooter;
