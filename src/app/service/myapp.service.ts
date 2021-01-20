import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class MyAppService implements OnInit {
  appServiceSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  // response from the picsum api and storing the data in a variable
  callToGetData(): void {
    this.getData()
      .map((data: any[]) => {
        return data.map(eachData => { // loop thru the data to add a new property
          eachData.display_url = `https://picsum.photos/id/${eachData.id}/500/500`;
          return eachData;
        });
      })
      .subscribe(pictureData => { // on success storing the data in a variable
        this.appServiceSubject.next(pictureData);
      }, (err) => {
        console.log(`${err}!`); // api erroring out
      });
  }

  // fetch the picsum api
  getData() {
    const locationUrl = 'https://picsum.photos/v2/list';
    return this.httpClient.get(locationUrl);
  }

  // remove the loader from the page
  removeLoader(): void {
    let loader = document.querySelector('[data-loader]');
    if (loader) {
      loader.remove();
    }
  }

}
// TODO
// handle error case scenario
// lazy loading
// update angular version
// use sass
// ng-redux
// better styling
// better ui (modal)