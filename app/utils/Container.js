import styled, { css } from 'styled-components';
import Media from './StyleUtils';

export default styled.div`
  display: flex;
  max-width: 100rem;
  width: calc(100% - 4rem);
  margin: auto;
  ${Media.phablet`
    width: calc(100% - 5rem);
  `};
  ${Media.tablet`
    width: calc(100% - 7.5rem);
  `};
  ${Media.giant`
    max-width: 115rem;
  `};
  ${props =>
    props.header &&
    css`
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      ${Media.handheld`
      `};
      ${Media.phablet`
      `};
      ${Media.desktop`
      `};
    `};
  ${props =>
    props.main &&
    css`
      position: relative;
      justify-content: center;
      align-items: flex-start;
      flex-flow: column nowrap;
      padding: 3rem 0;
      ${Media.handheld`
        padding: 4rem 0;
      `};
      ${Media.phablet`
        padding: 6rem 0;
      `};
    `};
  ${props =>
    props.banner &&
    css`
      position: relative;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      padding: 2rem 0;
      ${Media.tablet`
        justify-content: space-around;
      `};
    `};
  ${props =>
    props.tips &&
    css`
      position: relative;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      padding: 2rem 0;
      ${Media.handheld`
          padding: 4rem 0;
        `};
      ${Media.phablet`
          padding: 6rem 0;
        `};
    `};
  ${props =>
    props.footer &&
    css`
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      padding: 3rem;
      margin: auto;
      ${Media.tablet`
        padding: 3.5rem;
      `};
    `};
  ${props =>
    props.post &&
    css`
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      padding: 10rem 0 5rem 0;
      background-color: rgb(250, 250, 250);
      background-image: url(https://s3.amazonaws.com/chiper/web/logo.svg);
      background-size: contain;
      background-repeat: no-repeat;
      background-blend-mode: color-dodge;
      background-position: 0rem 15rem;
      ${Media.phablet`
        padding: 12rem 0 6rem 0;
      `};
    `};
`;
