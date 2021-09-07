import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appZoomIn]'
})
export class ZoomInDirective {
    private readonly SCALE_FACTOR = 'scale(1.025)';

    private el: ElementRef

    constructor(el: ElementRef) {
        this.el = el;
        this.el.nativeElement.style.transition = 'transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84)';
    }

    @HostListener('mouseover') onMouseEnter() {
        this.zoom(true);
    }

    @HostListener('mouseout') onMouseLeave() {
        this.zoom(false);
    }

    private zoom(zoomIn: boolean) {
        this.el.nativeElement.style.transform = zoomIn ? this.SCALE_FACTOR : null;
    }

}
