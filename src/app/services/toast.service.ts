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

	success(message: string, config?: ToastrConfig): void {
		this.toastService.success(message, 'У вас все получилось!', config);
	}

	error(message: string, config?: ToastrConfig): void {
		this.toastService.error(message, 'Мне кажется, произошло ошибка...', config);
	}
}
