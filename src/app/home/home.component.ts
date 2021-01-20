import {Component, OnInit} from '@angular/core';
import {MyAppService} from '../service/myapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // creating new variable so i dont overwrite the api data
  entireAppObject: any;

  constructor(private myAppService: MyAppService) {
  }

  ngOnInit() {
    // fetch the pictsum api
    this.myAppService.callToGetData();
    // filling in the new variable with api data
    this.myAppService.appServiceSubject
      .filter(data => data)
      .subscribe(data => {
        this.entireAppObject = data;
        this.entireAppObject.showModal = true;
        this.myAppService.removeLoader();
      });
  }
  // change event for the modal popup
  disableConfirmation(event): void {
    event.preventDefault();
    this.entireAppObject.showModal = !this.entireAppObject.showModal;
  }

}
