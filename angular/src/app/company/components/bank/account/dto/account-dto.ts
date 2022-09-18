
import { CardDto } from './card-dto';

export class AccountDto {

  institution:string;
  holder:string;
  agency:number;
  account:number;
  pix:string;
  typeaccount:string;
  cards: CardDto[];
  description:string;


}
