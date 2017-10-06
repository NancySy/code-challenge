import styled from 'styled-components';

export const Button = styled.div`
  background-color: ${props => (props.save ? '#2BC3A1' : '')};
  color: ${props => (props.save ? 'white' : '#A3A3A3')};
  height: 48px;
  line-height: 1;
  font-size: 18px;
  padding: 15px 30px;
  cursor: pointer;
  font-weight: 300;
  border-radius: 4px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  min-height: 250px;
  margin-bottom: 20px;
`;

export const Profile = styled.div`
  background-color: white;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 20px;
  vertical-align: middle;
  margin: 0 auto;
`;
