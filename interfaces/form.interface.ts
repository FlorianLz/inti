export interface IFormState {
    index: number;
    selected_index: number;
    steps: Array<IFormStep>;
}

export interface IFormStep {
    name: string;
    fields: Array<any>;
    component: any;
}