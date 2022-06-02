import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})



export class AlertsToastr {


  private ActionsMessages: string[] =
  [
  'Cadastrado.', 'Atualizado.', 'Excluido.',
  'Seja, bem vindo!', 'Falha de login, usuário não autenticado!',
  'Estamos com algum problema.'
  ]


  constructor(private _Toast: ToastrService) { }

  public Notice(personalMessage?: string, actMsg?: number, actMsgType?: string) {
    if (actMsgType == 'success') {
      this._Toast.success(personalMessage + ' ' + this.ActionsMessages[actMsg] + ' Sucesso!!! ')
    }

    if (actMsgType == 'error') {
      this._Toast.error(this.ActionsMessages[actMsg] +', ' + 'Por favor, entre em contato com o suporte técnico.' + ' ' + personalMessage)
    }


    // if (actMsgType != 'error' || 'success') {
    //   this._Toast.warning('Your code!!','ERROR')
    // }



  }



}
