import styled from 'styled-components';

export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  border: 3px solid #aa5c3b;
  font-family: LeagueSpartanBold;
  text-transform: uppercase;
  color: #aa5c3b;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`

export const ButtonDiv = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding: 5rem;
`