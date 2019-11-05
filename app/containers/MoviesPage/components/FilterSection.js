/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input';

import Select from 'components/Select/index';

const { Item } = Form;

const firstSelectOptions = [
  { value: 0, content: 'Mới nhất' },
  { value: 1, content: 'Cũ nhất' },
  { value: 2, content: 'Độ phổ biến' },
  { value: 3, content: 'Đánh giá cao nhất' },
];

const FilterSection = ({ onSortTypeChange, onSearchByNameChange }) => {
  const onTextChange = _.debounce(value => {
    onSearchByNameChange(value);
  }, 300);

  const onSelectChange = value => {
    onSortTypeChange(value);
  };

  return (
    <Form layout="inline">
      <Item>
        <Input
          className="form-control bordered"
          placeholder="Tìm theo tên"
          onChange={e => onTextChange(e.target.value)}
        />
      </Item>
      <Item label="Sắp xếp">
        <Select
          defaultValue="Chọn"
          options={firstSelectOptions}
          width="200px"
          onChange={onSelectChange}
        />
      </Item>
    </Form>
  );
};

FilterSection.propTypes = {
  onSortTypeChange: PropTypes.func.isRequired,
  onSearchByNameChange: PropTypes.func.isRequired,
};

export default FilterSection;
