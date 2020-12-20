import {Injectable} from '@angular/core';


export class ProjectImage {
    public url: string;
    public isCover: boolean;

    constructor(url, isCover) {
        this.url = url;
        this.isCover = isCover;
    }
}

@Injectable({
    providedIn: 'any'
})
export class ImageService {
    private _images: ProjectImage[];
    public selectedImage: ProjectImage;

    set projectImages(images: string[]) {
        this._images = images.map((image) => new ProjectImage(image, false));
    }

    get images(): ProjectImage[] {
        return this._images;
    }

    constructor() {
    }
}
