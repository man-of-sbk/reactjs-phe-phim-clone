/* eslint-disable prettier/prettier */

export const inputs = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Tên hiển thị',
    icon: 'user',
    rules: validator => [
      {
        required: true,
        message: 'Vui lòng nhập tên hiển thị',
      },
      {
        validator,
      },
    ],
  },
  {
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    icon: 'mail',
    rules: validator => [
      {
        required: true,
        message: 'Vui lòng nhập Email',
      },
      {
        type: 'email',
        message: 'Email không hợp lệ',
      },
      {
        validator,
      },
    ],
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Mật khẩu',
    icon: 'lock',
    rules: validator => [
      {
        required: true,
        message: 'Vui lòng nhập mật khẩu',
      },
      {
        min: 6,
        message: 'Mật khẩu phải chứa trên 6 ký tự',
      },
      {
        validator,
      },
    ],
  },
  {
    name: 'password_confirmation',
    type: 'password',
    placeholder: 'Nhập lại mật khẩu',
    icon: 'lock',
    rules: validator => [
      {
        required: true,
        message: 'Vui lòng nhập lại mật khẩu',
      },
      {
        validator,
      },
    ],
  },
];
