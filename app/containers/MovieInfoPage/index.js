/**
 *
 * MovieInfoPage
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectApp } from 'containers/App/selectors';

import Spin from 'antd/lib/spin';
import message from 'antd/lib/message';

import SeatBookingPage from 'components/SeatBookingPage/index';
import SmMovieList from 'components/SmMovieList/index';
import BigMovieBanner from './components/BigMovieBanner/index';
import MainMoviePoster from './components/MainMoviePoster/index';
import Wrapper from './styledComponents/Wrapper';

import makeSelectMovieInfoPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import * as actions from './actions';

export function MovieInfoPage({
  dispatchFetchMovie,
  dispatchFetchMovieSeats,
  match,
  movieInfoPage,
  app,
  dispatchSubmitSeats,
  dispatchResetSubmitSeatsSuccess,
}) {
  useInjectReducer({ key: 'movieInfoPage', reducer });
  useInjectSaga({ key: 'movieInfoPage', saga });

  useEffect(() => {
    if (movieInfoPage.submittingSeatsSuccess) {
      message.success('Đặt vé thành công !');
      dispatchResetSubmitSeatsSuccess();
    }
  }, [movieInfoPage.submittingSeatsSuccess]);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmitSeats = seat => {
    dispatchSubmitSeats({
      movieId: match.params.id,
      seat,
    });
  };

  useEffect(() => {
    dispatchFetchMovie(match.params);
    dispatchFetchMovieSeats(match.params);
  }, [match.params]);

  return (
    <Spin spinning={movieInfoPage.isFetchingMovie}>
      <SeatBookingPage
        userId={app.user ? app.user.id : undefined}
        seats={movieInfoPage.seats}
        isFetchingSeats={movieInfoPage.isFetchingSeats}
        title={movieInfoPage.movie ? movieInfoPage.movie.title : undefined}
        visible={openModal}
        onOk={handleSubmitSeats}
        onCancel={handleCloseModal}
      />
      <Wrapper>
        <Helmet>
          <title>Movie Info Page</title>
          <meta name="description" content="Description of Movie Info Page" />
        </Helmet>
        <div className="container">
          {movieInfoPage.movie && (
            <>
              <BigMovieBanner
                src={`http://image.tmdb.org/t/p/original/${
                  movieInfoPage.movie.backdrop_path
                }`}
              />
              <MainMoviePoster
                movie={movieInfoPage.movie}
                onOpenModal={handleOpenModal}
              />
            </>
          )}
          {/* <div
            className="fb-comments"
            data-href="http://localhost:3000/movie/1004"
            data-width="100%"
            data-numposts="5"
            data-colorscheme="dark"
          /> */}
          <SmMovieList
            className="more-movies-list"
            title="Phim khác"
            movies={app.hotMovies}
          />
        </div>
      </Wrapper>
    </Spin>
  );
}

MovieInfoPage.propTypes = {
  dispatchFetchMovie: PropTypes.func.isRequired,
  dispatchFetchMovieSeats: PropTypes.func.isRequired,
  dispatchSubmitSeats: PropTypes.func.isRequired,
  dispatchResetSubmitSeatsSuccess: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  movieInfoPage: PropTypes.object.isRequired,
  app: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  movieInfoPage: makeSelectMovieInfoPage(),
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchMovie: payloads =>
      dispatch(actions.fetchMovieAction(payloads)),
    dispatchFetchMovieSeats: payloads =>
      dispatch(actions.fetchSeatsAction(payloads)),
    dispatchSubmitSeats: payloads =>
      dispatch(actions.submitSeatsAction(payloads)),
    dispatchResetSubmitSeatsSuccess: () =>
      dispatch(actions.resetSubmitSeatsSuccessAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MovieInfoPage);
