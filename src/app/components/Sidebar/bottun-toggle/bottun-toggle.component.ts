import { Component } from '@angular/core';

@Component({
  selector: 'app-bottun-toggle',
  templateUrl: './bottun-toggle.component.html',
  styleUrls: ['./bottun-toggle.component.scss']
})
export class BottunToggleComponent {

  buttons:btnArr[] = [
    {
      isSelected: true,
      icon: 'schedule',
      name: 'Browse'
    },
    {
      isSelected: false,
      icon: 'favorite',
      name: 'Watch List'
    },
    {
      isSelected: false,
      icon: 'calendar_month',
      name: 'Coming Soon'
    },
  ]
  
}

interface btnArr{
  isSelected: boolean
  icon: string
  name: string
}
