import { Component } from '@angular/core';

@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.scss']
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
    // {
    //   avatarImg:'https://i.pravatar.cc/150?img=9',
    //   avatarName: 'Alesanda.B',
    //   onlineStatus: true
    // },
    {
      avatarImg:'https://i.pravatar.cc/150?img=47',
      avatarName: 'Anna.S',
      onlineStatus: true
    },
    {
      avatarImg:'https://i.pravatar.cc/150?img=3',
      avatarName: 'Dadd.H',
      onlineStatus: true
    },
  ]

}
interface avatarArr{
  avatarImg:string,
  avatarName:string,
  onlineStatus:boolean
}
