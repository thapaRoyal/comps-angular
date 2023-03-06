import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent {

  data = [
    {
      namae: 'james', age:23, job: 'Designer'
    },
    {
      namae: 'Jill', age:24, job: 'Developer'
    },
    {
      namae: 'Elyse', age:22, job: 'Engineer'
    },
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
  ]

}
