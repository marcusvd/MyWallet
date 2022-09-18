import { Component, OnInit } from '@angular/core';
import { AccountDto } from '../dto/account-dto';
import { AccountListService } from '../services/account-list.service';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  public accounts: AccountDto[]=[];


  constructor(private _list: AccountListService) { }

  ngOnInit(): void {
    this._list.loadAllCards()

    // .then((item: AccountDto[]) => {
    // //   this.accounts =item;
    // //  console.log(item)
    // //   item.forEach((i: AccountDto) => {
    // //     console.log(i)
    // //   })
    // });



    // this._list.loadCardById();


  }

}
