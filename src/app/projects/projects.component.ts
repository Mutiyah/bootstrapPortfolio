import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
project1 : string = "assets/images/project1.jpeg";
project2: string = "assets/images/project2.jpeg";
project3: string = "assets/images/project3.jpeg";
project4: string = "assets/images/project4.jpeg";
reactProject1 : string = "assets/images/reactProject1.jpg";
reactProject2 : string = "assets/images/netflix.jpg";
reactProject3 : string = "assets/images/linkedin.jpg";



  constructor() { }

  ngOnInit(): void {
  }

}
