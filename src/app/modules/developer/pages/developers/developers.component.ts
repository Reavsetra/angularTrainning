import { DeveloperService } from './../../services/developer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit{

  constructor(private developer: DeveloperService) {}

  ngOnInit(): void {
    this.developer.getDevelopers().subscribe((data) => {
      console.log(data);
    })
  }

}
