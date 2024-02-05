import {TemplateRef} from '@angular/core';

export interface PopupTemplate<T extends object> {
    view: TemplateRef<T>;
    context: T;
}
