import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../services/app.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  title = 'Users List';
  results: any;
  resultById: any;
  showById: boolean;
  doUpdate: boolean;
  dataNotFound: boolean;

  // form input data
  id: string;
  name: string;
  email: string;

  constructor(private appService: AppService) {

    this.getAllData();
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

  getAllData() {
    this.appService.getData().subscribe(
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

  getDataById(id) {
    this.appService.getDataById(id).subscribe(
      data => {
        this.resultById = data;
        console.log(this.resultById);
        this.showById = true;
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }

  deleteData(id) {
    this.appService.deleteData(id).subscribe(
      data => {
        console.log('user of id ' + id + ' are removed');
        this.getAllData();
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }


  postData() {
    const pdata = {
      id: this.id,
      name: this.name,
      email: this.email
    }
    this.appService.postData(pdata).subscribe(
      data => {
        this.id = '';
        this.name = '';
        this.email = '';
        this.dataNotFound = false;
        console.log('success');
        console.log(pdata);
        this.getAllData();

      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }
  update(id) {
    this.appService.getDataById(id).subscribe(
      data => {
        this.resultById = data;
        this.id = this.resultById.id;
        this.name = this.resultById.name;
        this.email = this.resultById.email;
        this.doUpdate = true;
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }
  putData() {
    const udata = {
      id: this.id,
      name: this.name,
      email: this.email
    };
    this.appService.putData(this.id, udata).subscribe(
      data => {
        this.getAllData();
        this.id = '';
        this.name = '';
        this.email = '';
        console.log('success');
        this.doUpdate = false;
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }


  ngOnInit(): void {


  }


}
