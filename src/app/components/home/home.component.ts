import { Component } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private api: HttpService) { }

  cycles: any = []
  ngOnInit() {
    this.api.loadData().subscribe((data) => {
      this.cycles = data
      console.log(this.cycles);

    })

  }

}
