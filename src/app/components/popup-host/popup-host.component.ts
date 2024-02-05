import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {tap} from 'rxjs';
import {PopupService} from 'src/app/shared/popup/popup.service';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    template$ = this.popupService.popupTemplateState$.pipe(
        tap(t => {
            this.isEmpty = !t;
        }),
    );

    @HostBinding('class.empty')
    isEmpty = true;

    constructor(private readonly popupService: PopupService) {}

    onPopupClose(): void {
        this.popupService.closePopup();
    }
}
