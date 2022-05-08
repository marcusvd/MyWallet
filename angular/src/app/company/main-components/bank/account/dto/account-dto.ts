import { SocialNetworkDto } from 'src/app/company/shared/shareds-components/contact/dto/social-network-dto';
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
