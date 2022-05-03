import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Portal } from '@angular/cdk/portal';
import { CdkDialogContainer } from '@angular/cdk-experimental/dialog';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContainerComponent extends CdkDialogContainer {
	portal?: Portal<any>;
	dialogTitle: any  = this._config.data.title
}
