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
    private _featuredImage: ProjectImage;
    private _selectedImage: ProjectImage;

    get selectedImage(): ProjectImage {
        return this._selectedImage;
    }

    get images(): ProjectImage[] {
        return this._images;
    }

    set projectImages(images: string[]) {
        this._images = images.map((image) => new ProjectImage(image, false));
    }

    get featuredImage(): ProjectImage {
        return this._featuredImage;
    }

    set coverImage(image: string) {
        this._featuredImage = new ProjectImage(image, true)
    }

    select(projectImage: ProjectImage) {
        this._selectedImage = projectImage
        this._featuredImage = projectImage;
    }

    getNextFeatured() {
        let featuredIndex = this._images.indexOf(this._featuredImage);
        this._featuredImage = this._images[(featuredIndex + 1) % this._images.length]
    }

    getPreviousFeared() {
        let featuredIndex = this._images.indexOf(this._featuredImage);
        this._featuredImage = this._images[(this._images.length + featuredIndex - 1) % this._images.length]
    }

    constructor() {
    }
}
