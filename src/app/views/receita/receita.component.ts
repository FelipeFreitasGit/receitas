import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReceitas } from 'src/app/interfaces/receitas';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss']
})
export class ReceitaComponent implements OnInit {

  state: any;

  constructor(
    private router: Router,
    private receitasService: ReceitasService
    ) {
      const route = this.router.getCurrentNavigation();
      this.state = route?.extras.state;
    }
    
    ngOnInit(): void {
          
      this.receitasService.getReceita(this.state.id)
        .subscribe((response: IReceitas) => {

          console.log(response)
        })
  }
}