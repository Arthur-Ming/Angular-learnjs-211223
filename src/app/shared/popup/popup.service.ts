import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PopupTemplate} from './popup-template.interface';

@Injectable({
    providedIn: 'root',
})
export class PopupService {
    private readonly popupTemplateStore$ = new BehaviorSubject<PopupTemplate<object> | null>(null);

    popupTemplateState$ = this.popupTemplateStore$.asObservable();

    openPopup(template: PopupTemplate<object> | null) {
        this.popupTemplateStore$.next(template);
    }

    closePopup() {
        this.popupTemplateStore$.next(null);
    }
}
