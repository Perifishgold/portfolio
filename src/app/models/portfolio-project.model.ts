export type ProjectType = 'primary' | 'secondary';

export interface ProjectLinkData {
    topLabel: string,
    bottomLabel: string,
    rout: string,
    collection: string
    type: ProjectType,
}

export interface ProjectDescription {
    headline: string;
    "headline-note": string;
    "secondary-headline": string;
    "full-description": string
}

export interface ProjectSelectionView {
    "primary-headline": string,
    "secondary-headline": string
}

export interface PortfolioProject {
    projectSelectionView: ProjectSelectionView,
    projectDescription: ProjectDescription,
    coverImage: string,
    projectImages: string[]
}

export interface PortfolioProjects {
    projects: PortfolioProject[];
}

