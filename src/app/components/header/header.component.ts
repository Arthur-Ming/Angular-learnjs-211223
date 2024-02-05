import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';
import {PopupService} from 'src/app/shared/popup/popup.service';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Input() applicationConfig: ApplicationConfig | null = null;

    @Output() readonly menuClick = new EventEmitter<void>(true);

    /*   @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly favoritePopupTempalte?: ViewContainerRef; */

    constructor(private readonly popupService: PopupService) {}

    onMenuClick() {
        this.menuClick.emit();
    }

    openPopup(template: TemplateRef<object>) {
        this.popupService.openPopup({
            view: template,
            context: {
                $implicit: this.applicationConfig?.title,
            },
        });
    }

    closePopup() {
        this.popupService.closePopup();
    }
}
