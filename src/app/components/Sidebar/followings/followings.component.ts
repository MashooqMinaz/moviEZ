import { Component } from '@angular/core';

@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html'
})
export class FollowingsComponent {
  avatars:avatarArr[] = [
    {
      avatarImg:'https://i.pravatar.cc/150?img=12',
      avatarName: 'Ikako.t',
      onlineStatus: false
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=13',
      avatarName: 'Nick.B',
      onlineStatus: true
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=32',
      avatarName: 'Vika.J',
      onlineStatus: false
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=47',
      avatarName: 'Anna.S',
      onlineStatus: true
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=3',
      avatarName: 'Dadd.H',
      onlineStatus: false
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=49',
      avatarName: 'Alesanda.B',
      onlineStatus: true
    },


    {
      avatarImg:'https://i.pravatar.cc/150?img=33',
      avatarName: 'Shahil',
      onlineStatus: false
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=22',
      avatarName: 'jithu',
      onlineStatus: false
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=20',
      avatarName: 'Aysha',
      onlineStatus: true
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=51',
      avatarName: 'Aadhil',
      onlineStatus: false
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=63',
      avatarName: 'Faiz',
      onlineStatus: false
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=64',
      avatarName: 'Akshay',
      onlineStatus: true
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=66',
      avatarName: 'Albin',
      onlineStatus: false
    },

  ]


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
interface avatarArr{
  avatarImg:string,
  avatarName:string,
  onlineStatus:boolean
}
