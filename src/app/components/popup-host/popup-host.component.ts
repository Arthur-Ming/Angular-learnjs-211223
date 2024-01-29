import {ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    @Input() template: TemplateRef<unknown> | null = null;

    @HostBinding('class.empty')
    get isTemplateNullable(): boolean {
        return !this.template;
    }

    // @Input()
    // @HostBinding('class.view')
    // template: TemplateRef<unknown> | null = null;
}
