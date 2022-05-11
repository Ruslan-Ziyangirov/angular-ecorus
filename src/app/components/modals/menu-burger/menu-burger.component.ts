import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuBurgerComponent implements OnInit {

  constructor(public dialog: DialogService) { }

  ngOnInit(): void {
  }

}
