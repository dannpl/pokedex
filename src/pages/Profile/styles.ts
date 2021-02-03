import styled from 'styled-components';

import { IProfileProps } from './interface';

import Cicle from '../../assets/img/Circle.png';
import PokeballProfile from '../../assets/img/PokeballProfile.png';

export const Container = styled.div`
  background-color: ${(props: IProfileProps) => props.backgroundColor};
`;

export const Header = styled.div`
  min-height: 315px;
  position: relative;
`;

export const NameBg = styled.p`
  background: -webkit-linear-gradient(
    259deg,
    rgb(255 255 255 / 0%) 0%,
    rgba(255, 255, 255, 0) 76.04%
  );
  font-weight: bold;
  font-size: 100px;
  line-height: 119px;
  text-transform: uppercase;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #ffffff21;
  padding-top: 25px;
`;

export const PatternBg = styled.img`
  position: fixed;
  top: 182px;
  right: 0;
  height: 65px;
`;

export const PokemonImage = styled.img`
  width: 130px;
  margin-right: 25px;
  position: relative;
  z-index: 1;
`;

export const Back = styled.img`
  height: 20px;
  margin-top: 40px;
  position: absolute;
  margin-left: 40px;
  z-index: 1;
`;

export const Infos = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
`;

export const WrapperImage = styled.div`
  &::before {
    background-image: url(${Cicle});
    background-size: 140px 140px;
    display: inline-block;
    width: 140px;
    height: 140px;
    margin-top: -12px;
    margin-left: -6px;
    content: '';
    position: absolute;
    z-index: 0;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PokemonId = styled.div`
  color: rgba(23, 23, 27, 0.6);
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

export const PokemonName = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 14px;
`;

export const Tab = styled.p`
  font-weight: ${(props: IProfileProps) => (props.active ? 'bold' : 'normal')};
  font-size: 16px;
  line-height: 19px;
  position: relative;
  min-width: 100px;
  color: ${(props: IProfileProps) =>
    props.active ? '#fff' : 'rgb(255 255 255 / 60%)'};
  text-align: center;

  &::before {
    background-image: url(${PokeballProfile});
    background-size: 100px 100px;
    display: ${(props: IProfileProps) =>
      props.active ? 'inline-block' : 'none'};
    width: 100px;
    height: 100px;
    margin-top: -17px;
    left: 0px;
    content: '';
    position: absolute;
    z-index: 0;
  }
`;

export const TabContent = styled.div`
  overflow: auto;
  background-color: #fff;
  border-radius: 30px 30px 0px 0px;
`;
