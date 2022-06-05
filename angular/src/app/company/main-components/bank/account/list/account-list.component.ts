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


  constructor(private _List: AccountListService) { }

  ngOnInit(): void {
    this._List.loadAllCards().then((item: AccountDto[]) => {
      this.accounts =item;
   //   console.log(item)
      // item.forEach((i: AccountDto) => {
      //   console.log(i)
      // })
    });
  }

}
