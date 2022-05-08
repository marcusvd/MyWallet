import { Component, OnInit } from '@angular/core';
import { ClientDto } from '../dto/client-dto';
import { ClientListService } from '../services/client-list.service';

@Component({
  selector: 'app-client-nav',
  templateUrl: './client-nav.component.html',
  styleUrls: ['./client-nav.component.css']
})
export class ClientNavComponent implements OnInit {
  public clients: ClientDto[] = [];
  public showHideBool: boolean = true;
  constructor(
    private _ClientsService: ClientListService
  ) { }



  registerProduct() {
    this.showHideBool = false;


    //return this._ProductService.showHide();
    }



  ngOnInit(): void {
    this._ClientsService.loadClients().subscribe({
      next: (p: ClientDto[]) => {
        this.clients = [...p as ClientDto[]];

      }, error: (err) => {

      }, complete: () => { }
    })

  }


}
