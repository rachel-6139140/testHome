import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

import {Post} from "./post.model";
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient ) { }

  getPosts() {
    this.http.get<{ message: string; posts: any }>("http://localhost:3000/api/posts")
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            name: post.name,
            category: post.category,
            postPath:post.postPath,
            imdb:post.imdb,
            id: post._id,
          };
        });
      }))
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  addNewPost(name: string, postPath: string, imdb: string,category: string){
    if(this.chechNameTwice(name))
      return;
    const newPost:Post = {id: null,name: name, postPath: postPath, imdb: imdb , category: category};
    this.http.post<{ message: string}>('http://localhost:3000/api/posts', newPost).subscribe((responseData)=> {
      console.log(responseData.message);
      console.log(newPost);
      this.posts.push(newPost);
      this.postsUpdated.next([...this.posts]);

    });
  }
  chechNameTwice(name:string){
    for (let post in this.posts) {
      if (this.posts[post].name  === name) {
          return true;
      }
  }  
  return false;

}
  onDeletePost(postId: string){
    this.http.delete("http://localhost:3000/api/posts/" + postId).subscribe(()=>{
      console.log('Deleted!');
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);

    });

  }
}

