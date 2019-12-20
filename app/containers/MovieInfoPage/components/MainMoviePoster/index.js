/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import Divider from 'antd/lib/divider';
import Form from 'antd/lib/form';

import Button from 'components/Button/index';
import LazyPercentageCircle from 'components/LazyPercentageCircle/index';
import Wrapper from './styledComponents/Wrapper';

const movieInfoList = [
  {
    key: 'release_date',
    label: 'Ngày công chiếu',
  },
  {
    key: 'created_at',
    label: 'Ngày ra mắt',
  },
  {
    key: 'time',
    label: 'Thời lượng',
    content: '120 phút',
  },
  {
    key: 'language',
    label: 'Ngôn ngữ',
    content: 'Tiếng Anh',
  },
  {
    key: 'rated',
    label: 'Rated',
    content: 'C18 - PHIM CẤM KHÁN GIẢ DƯỚI 18 TUỔI',
  },
];

const MainMovieBanner = ({ movie, onOpenModal }) => (
  <Wrapper gutter={24} className="movie-info-container">
    <div className="left-section">
      <img
        className="main-movie-poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="main-movie-poster"
      />
    </div>
    <div className="movie-info">
      <div className="overview-section">
        <div className="title-and-rating">
          <h2>{movie.title}</h2>
          <LazyPercentageCircle value={movie.vote_average * 10} />
        </div>
        <Button className="book-seat-btn" onClick={onOpenModal}>
          Mua vé</Button>
        <i>Giật gân, Kinh dị</i>
        <Divider />
        <p>{movie.overview}</p>
      </div>
      <div className="user-info-list">
        {movieInfoList.map((info, index) => (
          <div className="info-block" key={index}>
            <span className="info-title">{info.label}:</span>
            <span className="info-content">
              {info.content || movie[info.key]}
            </span>
          </div>
        ))}
      </div>
    </div>
  </Wrapper>
)

MainMovieBanner.propTypes = {
  movie: PropTypes.object.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default Form.create()(MainMovieBanner);
