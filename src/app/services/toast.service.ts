import { Injectable } from '@angular/core';
import { ToastrConfig, ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class ToastService {
	constructor(
		private toastService: ToastrService
	) {
	}

	success(message: string): void {
		console.log("тостер ра-бо-та-ть")
		this.toastService.success(message, 'Успешно!');
	}

	error(message: string): void {
		this.toastService.error(message, 'Ошибка!');
	}
}
