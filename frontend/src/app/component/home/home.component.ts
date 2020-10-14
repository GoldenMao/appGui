import { Component, OnInit } from '@angular/core';
import { HttpsService} from '../../network/https.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public config: any;
  constructor(public https: HttpsService) { }

  ngOnInit(): void {
  }
   axiosGetData(){
    const config = {
      url: '/api/',
      method: 'get' ,
    }
    this.https.axiosData(config).then(
      res => {
        this.config = res
      }
    )
  }
}
