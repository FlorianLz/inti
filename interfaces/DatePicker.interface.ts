export interface DatePickerProps {
    value?: null | string | number | Date | readonly (string | number | Date)[] | undefined
    onChange: (selectedDate: string[] | null) => void;
}
