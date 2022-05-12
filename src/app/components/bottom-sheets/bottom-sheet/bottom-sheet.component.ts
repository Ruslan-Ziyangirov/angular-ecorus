import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CdkDialogContainer } from '@angular/cdk-experimental/dialog';
import { Portal } from '@angular/cdk/portal';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomSheetComponent extends CdkDialogContainer {
	portal?: Portal<any>;
}

