import styled, { css } from 'styled-components';
import Media from '../../utils/StyleUtils';

export const Form = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 50rem;
  min-width: auto;
  min-height: auto;
  margin: 0;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  background-color: white;
  border-radius: 4px;
  ${Media.phablet`
    width: 90%;
    padding: 4rem 0;
  `};
`;

export const FirstFormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  transition: opacity 0.3s linear;
  opacity: 1;
  min-width: auto;
  min-height: auto;
  ${Media.phablet`
    width: 100%;
  `};
`;

export const Titulo = styled.h1`
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: #4a4a4a;
  text-align: center;
  padding: 6rem 0 4rem;
  margin: 0;
  ${Media.tablet`
    font-size: 5rem;
  `};
  ${Media.desktop`
    font-size: 5.5rem;
  `};
`;

export const StepText = styled.p`
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  text-transform: uppercase;
  color: #1880e7;
  text-align: center;
  margin: 0.5rem 0 2rem;
  transition: opacity 0.3s linear;
  ${Media.phablet`
    font-size: 1.5rem;
    margin: 0 0 2rem;
  `};
  ${props =>
    props.selected &&
    css`
      display: none;
    `};
`;

export const InputContent = styled.input`
  width: 85%;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  background: rgb(220, 220, 220);
  border: none;
  margin: 0.5rem 0;
  transition: all 0.3s;
  -webkit-appearance: none;
  ${Media.handheld`
    width: 80%;
  `};
  ${Media.phablet`
    margin: 1rem 0;
    font-size: 1.6rem;
  `};
  &:focus {
    outline: none;
    background-color: #eee;
    ${Media.phablet`
      width: 85%;
    `};
  }
  &:checked + label:after {
    opacity: 1;
  }
  &::placeholder {
    color: #000;
    opacity: 0.5;
    transition: opacity 0.35s ease-in-out;
  }
  &:hover::placeholder {
    opacity: 0.75;
    transition: opacity 0.2s ease-in-out;
  }
  &:focus::placeholder {
    opacity: 0.25;
    transition: opacity 0.2s ease-in-out;
  }
}
${props =>
  props.hidden &&
  css`
    display: none;
  `};
${props =>
  props.password &&
  css`
    ${Media.handheld`
      width: 80%;
    `};
    ${Media.phablet`
      width: 60%;
      margin: 1rem 0;
    `};
    ${Media.tablet`
      max-width: 35rem;
    `};
    &:focus {
      outline: none;
      background-color: #eee;
      ${Media.phablet`
        width: 65%;
      `};
      ${Media.tablet`
        max-width: 37.5rem;
      `};
    }
  `};
${props =>
  props.addressNumber &&
  css`
    width: 48%;
    margin: 0.5rem 0;
    ${Media.handheld`
      width: 48%;
    `};
    ${Media.phablet`
      width: 25%;
      margin: 1rem 0;
    `};
    &:focus {
      outline: none;
      background-color: #eee;
      ${Media.phablet`
        width: 25%;
      `};
  `};
  ${props =>
    props.addressHome &&
    css`
      width: 40%;
      margin: 0.5rem 0;
      ${Media.handheld`
        width: 40%;
      `};
      ${Media.phablet`
        width: 17.5%;
        margin: 1rem 0;
      `};
      &:focus {
        outline: none;
        background-color: #eee;
        ${Media.phablet`
          width: 17.5%;
        `};
    `};
    ${props =>
      props.addressHood &&
      css`
        width: 49%;
        margin: 0.5rem 0;
        ${Media.handheld`
          width: 49%;
        `};
        ${Media.phablet`
          width: 49%;
          margin: 1rem 0;
        `};
        &:focus {
          outline: none;
          background-color: #eee;
          ${Media.phablet`
            width: 49%;
          `};
      `};
`;

export const LabelText = styled.span`
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  text-transform: uppercase;
  color: #9b9b9b;
  text-align: left;
  margin: 2rem 0 0.75rem;
  ${Media.phablet`
    font-size: 1.5rem;
    margin: 2.5rem 0 0.5rem;
  `};
`;

export const AddressWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  ${Media.handheld`
    width: 80%;
  `};
  ${Media.phablet`
    width: 80%;
    flex-flow: row nowrap;
  `};
`;

export const LabelSelect = styled.label`
  position: relative;
  width: 85%;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  background: rgb(220, 220, 220);
  border: none;
  margin: 0.5rem 0;
  transition: all 0.3s;
  -webkit-appearance: none;
  ${Media.handheld`
    width: 80%;
  `};
  ${Media.phablet`
    width: 80%;
    margin: 1rem 0;
    font-size: 1.6rem;
  `};
  &::after {
    content: '';
    position: absolute;
    right: 1.5rem;
    top: 1.8rem;
    border: 0.5rem solid #999;
    border-color: #999 transparent transparent transparent;
    transition: 0.3s all ease-in-out;
    ${Media.phablet`
      right: 1.5rem;
      top: 1.9rem;
      border: 0.6rem solid #999;
      border-color: #999 transparent transparent transparent
    `};
  }
  &:hover::after {
    border: 0.5rem solid #666;
    border-color: #666 transparent transparent transparent;
    ${Media.phablet`
      border: 0.6rem solid #666;
      border-color: #666 transparent transparent transparent
    `};
  }
  ${props =>
    props.address &&
    css`
      width: 48%;
      margin-right: 0.5rem;
      ${Media.handheld`
        width: 48%;
        margin-right: 0.75rem;
      `};
      ${Media.phablet`
        width: 35%;
        margin-right: 0.75rem;
      `};
    `};
`;

export const WarnMsg = styled.label`
  display: none;
  position: relative;
  top: 0;
  font-size: 1rem;
  color: #9b9b9b;
  margin: 0;
  width: 85%;
  line-height: 1.1;
  transition: all 0.2s ease-in-out;
  ${Media.handheld`
    width: 80%;
  `};
  ${Media.phablet`
    font-size: 1.25rem;
    line-height: 1.25;
    width: 60%;
  `};
  ${props =>
    props.selected &&
    css`
      display: block;
      color: red;
    `};
`;

export const AddressChar = styled.span`
  font-size: 1.4rem;
  color: #9b9b9b;
  margin: 0 0.35rem;
  ${Media.phablet`
    font-size: 1.6rem;
    margin: 0 0.5rem;
  `};
`;

export const SelectItem = styled.select`
  margin: 0;
  border-radius: 4px;
  background: transparent;
  color: #000;
  opacity: ${props => (props.focussing ? '1' : '0.5')};
  width: 100%;
  border: none;
  outline: none;
  display: inline-block;
  appearance: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.75;
  }
  &:focus {
    opacity: 1;
  }
`;

export const CheckboxLabelWrap = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem 0 1.5rem;
  ${props =>
    props.clone &&
    css`
      width: 100%;
      align-items: center;
    `};
`;

export const CheckboxWrap = styled.div`
  width: 25px;
  margin: 0 0.25rem 0 0;
  position: relative;
  ${Media.phablet`
    margin: 0 1.25rem 0 0;
  `};
`;

export const LabelChecked = styled.label`
  cursor: pointer;
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 1rem;
  transform: translateY(-50%);
  left: 0;
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 2rem;
  transition: all 0.3s;
  -webkit-appearance: none; /* for box shadows to show on iOS */
  &:hover {
    background: #eee;
  }
  &::after {
    opacity: 0;
    content: '';
    position: absolute;
    background: transparent;
    width: 1.1rem;
    height: 6px;
    top: 6px;
    left: 4px;
    border: 3px solid #666;
    border-top: none;
    border-right: none;
    transition: all 0.3s;
    transform: rotate(-45deg);
    ${Media.phablet`
      width: 1.3rem;
      height: 7px;
      top: 7.5px;
      left: 5px;
    `};
  }
  ${Media.phablet`;
    top: 1.25rem;
    width: 2.5rem;
    height: 2.5rem;
  `};
  ${props =>
    props.clone &&
    css`
      top: 0;
      ${Media.phablet`;
        top: 0;
      `};
    `};
`;

export const CheckboxInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  &:checked + label:after {
    opacity: 1;
  }
`;

export const LabelTerms = styled.p`
  font-size: 1rem;
  color: #9b9b9b;
  max-width: 75%;
  ${Media.phablet`
    font-size: 1.1rem;
    max-width: 32rem;
  `};
  ${props =>
    props.passwordGen &&
    css`
      font-size: 1.25rem;
      width: 75%;
      ${Media.phablet`
        font-size: 1.5rem;
        max-width: 30rem;
      `};
    `};
  ${props =>
    props.clone &&
    css`
      margin: 0;
    `};
`;

export const Enlace = styled.a`
  color: #1880e7;
  font-size: inherit;
  cursor: pointer;
  text-decoration: none;
  ${Media.phablet`
    font-size: 1.1rem;
  `};
  ${props =>
    props.passwordGen &&
    css`
      font-size: 1.25rem;
      ${Media.phablet`
        font-size: 1.5rem;
      `};
    `};
  ${props =>
    props.backForm &&
    css`
      padding-top: 1rem;
      font-size: 1.75rem;
      text-align: center;
      margin: 0;
      ${Media.phablet`
        padding-top: 1.5rem;
        font-size: 2rem;
      `};
    `};
`;

export const BackFormIcon = styled.a`
  display: none;
  position: absolute;
  top: 0.5rem;
  left: 1.5rem;
  color: #1880e7;
  font-size: 2rem;
  cursor: pointer;
  ${Media.phablet`
    font-size: 3rem;
    top: 1rem;
    left: 2.5rem;
  `};
  ${props =>
    props.show &&
    css`
      display: block;
    `};
`;

export const Message = styled.p`
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.3;
  color: #9b9b9b;
  text-align: center;
  margin: 2rem 0 1rem;
  width: 80%;
  ${Media.phablet`
    font-size: 1.75rem;
  `};
  ${Media.tablet`
    font-size: 2rem;
  `};
  ${props =>
    props.thanks &&
    css`
      color: #333;
      font-weight: 700;
      font-size: 2.5rem;
      ${Media.phablet`
        font-size: 2.75rem;
      `};
      ${Media.tablet`
        font-size: 3rem;
      `};
      ${Media.desktop`
        font-size: 3.5rem;
      `};
    `};
`;

export const ButtonWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 25rem;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  background-color: #1880e7;
  padding: 0.75rem;
  margin-top: 1.5rem;
  color: white;
  font-weight: 500;
  font-size: 1.75rem;
  text-decoration: none;
  transition: opacity 0.3s;
  ${Media.handheld`
    font-size: 2rem;
    padding: 1rem 0;
  `};
  ${Media.tablet`
    font-size: 2.2rem;
    padding: 1.25rem 0;
    margin-top: 2rem;
  `};
  ${props =>
    props.styleDisable &&
    css`
      opacity: 0.6;
      cursor: default;
    `};
`;

export const ButtonLink = ButtonWrap.withComponent('a');
