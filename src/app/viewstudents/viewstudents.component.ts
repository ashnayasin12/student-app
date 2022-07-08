import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=[
  {"Name":"Lorna","Age":24,"Photo":"https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg"},
  {"Name":"Remya","Age":30,"Photo":"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-5.jpg"},
  {"Name":"Alex","Age":35,"Photo":"https://i.pinimg.com/600x315/a6/58/32/a65832155622ac173337874f02b218fb.jpg"},
  {"Name":"Anisha","Age":40,"Photo":"https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"},
  {"Name":"Puni","Age":19,"Photo":"https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg"},
  {"Name":"Mani","Age":21,"Photo":"https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg"}
]
}
