import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.css']
})
export class PostIdComponent implements OnInit {
  
  post: Post = new Post(0, 0, '', '');
  id:number;
  constructor(public postService:PostService) { }

  ngOnInit() {
  }

  btnClick(){
    this.postService.getById(this.id).subscribe((postOut: Post)=>{
      this.post = postOut;
    })
  }
}
