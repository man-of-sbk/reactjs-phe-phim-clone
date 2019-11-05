/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { darkGrey2, secondary, primary } from 'cssVariable';
import * as breakpoints from 'breakpoints';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${secondary};
  font-size: 16px;
  padding: 15px;

  .user-info-container {
    max-width: 700px;
    width: 700px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    background-color: ${darkGrey2};
    border-radius: 10px;
    margin: 60px 0 60px 0;

    .user-avatar-container {
      width: 150px;
      object-fit: cover;

      .user-avatar {
        display: block;
        margin-bottom: 20px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
      }

      .upload-btn {
        display: block;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .ant-upload-list {
          display: none;
        }

        .ant-btn {
          color: ${primary};
          border-color: ${primary};

          .anticon {
            color: ${primary};
            margin-right: 5px;
          }
        }
      }
    }

    .user-info {
      flex: 1;
      padding: 0 0 0 30px;

      .ant-divider {
        background-color: ${primary};
      }

      .user-info-header {
        display: flex;
        justify-content: space-between;

        .user-name {
          color: ${secondary};
          font-weight: bold;
          font-size: 23px;
          margin: 0;
        }

        .edit-btn {
          color: ${primary};
          border-color: ${primary};
          padding: 0px 10px;
          height: 33px;

          .anticon {
            margin-right: 5px;
          }
        }
      }

      .user-info-block {
        margin-bottom: 5px;

        .user-infor-key {
          font-weight: bold;
          margin-right: 2px;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.xs}px) {
    .user-info-container {
      .user-avatar-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 30px;

        .user-avatar {
          width: 250px;
          height: 250px;
          margin-bottom: 30px;
        }
      }

      .user-info {
        padding: 0;
      }
    }
  }
`;

export default Wrapper;
