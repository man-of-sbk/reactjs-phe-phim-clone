/* eslint-disable prettier/prettier */

export const inputs = [
  {
    name: 'name',
    type: 'text',
    label: 'Tên hiển thị',
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
    name: 'address',
    type: 'text',
    label: 'Địa chỉ',
    icon: 'lock',
    rules: validator => [
      {
        validator,
      },
    ],
  },
  {
    name: 'phone_number',
    type: 'text',
    label: 'Số điện thoại',
    icon: 'lock',
    rules: validator => [
      {
        validator,
      },
    ],
  },
  {
    name: 'visa_number',
    type: 'text',
    label: 'Số Visa',
    icon: 'lock',
    rules: validator => [
      {
        validator,
      },
    ],
  },
];
