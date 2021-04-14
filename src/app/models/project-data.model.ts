export type ProjectLevel = 'primary' | 'secondary';

export interface ProjectData {
    topLabel: string,
    bottomLabel: string,
    link: string,
    type: ProjectLevel,
    index: number

}
