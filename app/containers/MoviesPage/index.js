/* eslint-disable radix */
/* eslint-disable react/no-array-index-key */
/**
 *
 * MoviesPage
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import InfiniteScroll from 'react-infinite-scroller';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Col from 'antd/lib/col';
import Spin from 'antd/lib/spin';
import Row from 'antd/lib/row';
import Pagination from 'antd/lib/pagination';

// import ScrollBot from 'components/ScrollBot/index';
import MovieItem from 'components/MovieItem/index';
import MovieListContainer from 'components/MovieListContainer/index';
import Wrapper from './styledComponents/Wrapper';
import FilterSection from './components/FilterSection';

import makeSelectMoviesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import * as actions from './actions';

export function MoviesPage({
  dispatchFetchMovies,
  moviesPage,
  dispatchSearchMovieByName,
  history,
  location,
}) {
  useInjectReducer({ key: 'moviesPage', reducer });
  useInjectSaga({ key: 'moviesPage', saga });

  const pushNewUrl = ({ sort = 0, page = 1, search = '' }) =>
    history.push(`/movies?sort=${sort}&page=${page}&search=${search}`);
  const parsedQueries = queryString.parse(location.search);

  const page = parsedQueries.page || 1;
  const sort = parsedQueries.sort || 0;
  const search = parsedQueries.search || '';

  useEffect(() => {
    if (search === '') {
      dispatchFetchMovies({ page, sort });
    } else {
      dispatchSearchMovieByName(search);
    }
  }, [location.search]);

  const onSortTypeChange = targetSortType => {
    pushNewUrl({ sort: targetSortType, page });
  };

  const onPaginationChange = targetPage => {
    pushNewUrl({ page: targetPage, sort });
  };

  const onSearchByNameChange = value => {
    pushNewUrl({ search: value });
  };

  return (
    <Spin spinning={moviesPage.isFetchingMovies}>
      {/* <ScrollBot rootComponentId="app" onScrollBot={loadMoreMovie} /> */}
      <Wrapper>
        <Helmet>
          <title>MoviesPage</title>
          <meta name="description" content="Description of MoviesPage" />
        </Helmet>
        <div className="container">
          <MovieListContainer title="Tất cả phim">
            <FilterSection
              onSortTypeChange={onSortTypeChange}
              onSearchByNameChange={onSearchByNameChange}
            />
            <Row gutter={[24, 24]} className="movie-list-container row">
              {moviesPage.movies &&
                moviesPage.movies.map((movie, index) => {
                  return (
                    <Col key={index} xs={12} sm={12} md={8} lg={6}>
                      <MovieItem movie={movie} />
                    </Col>
                  );
                })}
            </Row>
            {moviesPage.totalPage && (
              <Pagination
                defaultCurrent={Number.parseInt(page)}
                onChange={onPaginationChange}
                total={moviesPage.totalPage}
              />
            )}
          </MovieListContainer>
        </div>
      </Wrapper>
    </Spin>
  );
}

MoviesPage.propTypes = {
  dispatchFetchMovies: PropTypes.func.isRequired,
  dispatchSearchMovieByName: PropTypes.func.isRequired,
  moviesPage: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  moviesPage: makeSelectMoviesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchMovies: payloads =>
      dispatch(actions.fetchMoviesAction(payloads)),
    dispatchSearchMovieByName: payloads =>
      dispatch(actions.searchMovieByNameAction(payloads)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MoviesPage);
