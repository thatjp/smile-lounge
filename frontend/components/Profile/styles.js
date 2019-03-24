import styled from 'styled-components';

const ProfileStyles = styled.div`

  .container {  
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-flow: row;
    padding: 60px;
  }

  .link {
    width: 25%;
    padding: 30px;
    margin: 30px;
    text-align: center;
    border: 1px solid ${props => props.theme.black}
  }

  .link .two{
    /* width: 25%; */
  }
`;

export default ProfileStyles;
