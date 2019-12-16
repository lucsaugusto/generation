import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  //Atributos
  posts: Array<Post> = new Array<Post>();

  //Construtor
  constructor(private postService: PostService) { }

  //É chamado assim que baixar todos os componentes e serviços na maquina do usuario;
  ngOnInit() {

  }

  //Começa a minha aplicação
  findAllPost() {
    this.postService.getAll().subscribe((postOut: Post[]) => {
      this.posts = postOut;
    });
  }

  btnPostClick() {
    this.postService.getAll().subscribe((postOut: Post[]) => {
      this.posts = new Array<Post>();
      this.posts.push(postOut[0]);
    });
  }

  btnPostsClick() {
    this.findAllPost();
  }
}
