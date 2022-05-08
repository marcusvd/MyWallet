import { AddressDto } from 'src/app/company/shared/shareds-components/address/dto/address-dto';
import { ContactDto } from 'src/app/company/shared/shareds-components/contact/dto/contact-dto';


export class ClientDto {
  id: number;
  name: string;
  segment: string;
  ie: number;
  im: number;
  cnpj: string;
  address: AddressDto;
  contact: ContactDto;
}
