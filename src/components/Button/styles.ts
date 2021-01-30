import styled from 'styled-components';

import IButtonProps from './interface';

export const Container = styled.button`
  height: ${(props: IButtonProps) =>
    props.size === 'small' ? '30px' : '50px'};
  background-color: ${(props: IButtonProps) => props.backgroundColor};
`;
