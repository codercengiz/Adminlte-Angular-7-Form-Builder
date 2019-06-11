import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.scss']
})
export class AppmenuComponent implements OnInit {
 searchForm  = new FormGroup({
    searchText: new FormControl(''),
  });
  
  constructor() { }

  ngOnInit() {

    

  }

}
