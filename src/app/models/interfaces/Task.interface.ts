export enum Levels{
    "Info",
    "Urgent",
    "Blocking"
}

export interface Itask {
    title: string;
    description?: string;
    completed: boolean;
    level: Levels;
}
