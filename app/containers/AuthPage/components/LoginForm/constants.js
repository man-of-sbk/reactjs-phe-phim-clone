/* eslint-disable prettier/prettier */

export const inputs = [
  {
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    icon: 'mail',
    rules: [
      {
        required: true,
        message: 'Vui lòng nhập Email',
      },
      {
        type: 'email',
        message: 'Email không hợp lệ',
      },
    ],
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Mật khẩu',
    icon: 'lock',
    rules: [
      {
        required: true,
        message: 'Vui lòng nhập mật khẩu',
      },
      {
        min: 6,
        message: 'Mật khẩu phải chứa trên 6 ký tự',
      },
    ],
  },
];
