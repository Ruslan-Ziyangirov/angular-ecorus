import { BottomSheetComponent } from '@components/bottom-sheets/bottom-sheet/bottom-sheet.component';
import { ModalContainerComponent } from '@components/modals/modal-container/modal-container.component';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk-experimental/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BottomSheetService {
	constructor(private bottomSheet: Dialog) {
	}

	openDialog<T>(component: ComponentType<T>, config: DialogConfig = {}): DialogRef<ModalContainerComponent> {
		return this.bottomSheet.openFromComponent(component, {
			maxWidth: 'none',
			...config,
			containerComponent: BottomSheetComponent,
		});
	}

	closeDialog = () => {
		this.bottomSheet.closeAll()
	}
}
