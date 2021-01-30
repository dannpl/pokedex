import ITag from '../Tag/interface';

export default interface IPokeCard {
  id: string;
  name: string;
  tags: ITag[];
}
