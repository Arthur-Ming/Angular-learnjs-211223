import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @Input() set template(template: TemplateRef<unknown> | null) {
        this.clearView();
        this.createView(template);
    }

    @ViewChild('popupContent', {read: ViewContainerRef, static: true})
    private readonly popupContentViewContainerRef: ViewContainerRef | null = null;

    clearView(): void {
        if (this.popupContentViewContainerRef) {
            this.popupContentViewContainerRef.clear();
            this.isHidden = true;
        }
    }

    createView(template: TemplateRef<unknown> | null): void {
        if (template && this.popupContentViewContainerRef) {
            this.isHidden = false;
            this.popupContentViewContainerRef.createEmbeddedView(template);
        }
    }

    isHidden = true;
}
