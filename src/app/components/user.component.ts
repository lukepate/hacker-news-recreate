import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts:Post[];
  todos:Todo[];
  users:User[];

  constructor(private postsService: PostsService){
    this.name = 'John Doe';
    this.email = 'john@gmail.com',
    this.address = {
        street: '12 Main st',
        city: 'Boston',
        state: 'MA'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;


    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    });
    this.postsService.getTodos().subscribe(todos => {
        this.todos = todos;
    });
    this.postsService.getUsers().subscribe(users => {
        this.users = users;
    });
  }


  toggleHobbies(){
      this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: any){
      this.hobbies.push(hobby);
  }

  deleteHobby(i: any){
      this.hobbies.splice(i, 1);
  }
}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}
interface Todo{
    id: number;
    title: string;
    completed: string;
}
interface User{
    id: number;
    name: string;
    email: string;
}
