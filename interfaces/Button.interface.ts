export interface ButtonComponentProps {
    buttons: ButtonComponentItemProps[]
    onChange?: (value: string) => void;
}

export interface ButtonComponentItemProps {
    text: string;
    value: string;
}