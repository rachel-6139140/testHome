import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from '../movie.service';

//import  data from "../../data.json";
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit,OnDestroy {
  dataMovies;
  categogies:string[] = [];;
  posts: Post[] = [];
  private postsSub: Subscription;
  
  constructor(private router: Router,private movieService:MovieService ) {
   
   }

  ngOnInit() {
    debugger;
    this.movieService.getPosts();   
    this.postsSub = this.movieService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  
  }
  ngDoCheck()	{
    for(var i = 0 ; i < (this.posts).length; i++){
        this.categogies.push((this.posts[i].category) as string);
    }

    this.categogies = Array.from(new Set(this.categogies)) ;
    console.log(this.categogies);
  }
  onDelete(deleteName){
    debugger;
    this.movieService.onDeletePost(deleteName);
  }
  onAddMovie(){
    this.router.navigate(["/newPost"]);
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.categogies = [];
  }
}
