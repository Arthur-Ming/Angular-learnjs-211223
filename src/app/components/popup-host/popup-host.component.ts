import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @Input() set template(template: TemplateRef<unknown> | null) {
        if (this.popupContentViewContainerRef) {
            this.popupContentViewContainerRef.clear();
            template && this.popupContentViewContainerRef.createEmbeddedView(template);
        }
    }

    @ViewChild('popupContent', {read: ViewContainerRef, static: true})
    private readonly popupContentViewContainerRef: ViewContainerRef | null = null;

    isHidden() {
        return !this.popupContentViewContainerRef?.length;
    }
}
