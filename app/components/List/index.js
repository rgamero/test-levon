import React from 'react';
import styled, { css } from 'styled-components';

const WrapList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fafafa;
  width: 100%;
  max-width: 20rem;
  background-color: #eaeaea;
  padding: 1rem 2rem;
  margin: 0.75rem 0;
  border-radius: 4px;
  box-shadow: rgba(170, 170, 170, 0.5) 0px 2px 4px 0px;
`;

const Icon = styled.span`
  font-size: 1.6rem;
  margin-right: 1rem;
`;

const List = props => (
  <WrapList>
    {props.items.map((item, index) => (
      <ListItem key={index} index={index}>
        <Icon className="glyphicon glyphicon-ok icon" aria-hidden="true" />
        Item number {item + 1}
      </ListItem>
    ))}
  </WrapList>
);

export default List;
