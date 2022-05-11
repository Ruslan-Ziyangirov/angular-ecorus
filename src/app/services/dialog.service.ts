import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk-experimental/dialog';
import { ModalContainerComponent } from '@components/modals/modal-container/modal-container.component';
import { SigninFormComponent } from '@components/forms/signin-form/signin-form.component';


interface DialogData{
	title: string,
}

@Injectable({
	providedIn: 'root'
})

export class DialogService {
	constructor(private dialog: Dialog) {}

	openDialog<T>(component: ComponentType<T>,data: DialogData,config: DialogConfig = {}): DialogRef<ModalContainerComponent> {
		this.dialog.closeAll();
		return this.dialog.openFromComponent(component, {
			maxWidth: 'none',
			data: data,
			...config,
			containerComponent: ModalContainerComponent,
		});
	}
}
