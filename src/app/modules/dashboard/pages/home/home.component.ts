import { Component, OnInit } from '@angular/core';

import { AppService } from '../../../../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  results: any;
  dataNotFound: boolean;

  constructor(private appService: AppService) {

    this.getAllPosts();

  }

  getAllPosts() {
    this.appService.getPosts().subscribe(
      data => {
        this.results = data;
        if (this.results === 0) {
          this.dataNotFound = true;
          console.log('data not found');
        }
        console.log(this.results);
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }
  ngOnInit(): void {
  }

}
