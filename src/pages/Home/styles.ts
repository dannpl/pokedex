import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 40px 0 40px;
`;

export const WrapperTitle = styled.div`
  margin-top: 37.5px;
  margin-bottom: 45px;

  .title {
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 10px;
  }

  .subtitle {
    line-height: 19px;
    color: #747476;
    display: block;
    margin-bottom: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    max-height: 20px;
    max-width: 20px;
    margin: 0 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const PokeballBackground = styled.img`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;
