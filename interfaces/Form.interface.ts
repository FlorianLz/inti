export interface IFormState {
    index: number;
    steps: Array<IFormStep>;
}

export interface IFormStep {
    name: string;
    fields: Array<any>;
    component: any;
}

export interface IFormContext {
    formState: IFormState;
    setFormState?: (state: IFormState) => void;
}