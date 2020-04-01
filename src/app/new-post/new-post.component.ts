import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  categogies:any[] = [
    {value: 'action'},
    {value: 'comedy'},
    {value: 'dramq'},
    {value: 'other'}
  ];
  constructor(private movieService: MovieService,private router: Router) { }

  ngOnInit() {
  }
  onAddPost(input){
    this.movieService.addNewPost(input.name,input.postPath, input.imdb, 'action');
    this.router.navigate(["/secure"]);

  }
  onCancel(){
    this.router.navigate(["/secure"]);

  }
  onOptionsSelected(e){
    console.log(e);
  }

}
