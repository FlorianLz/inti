import {IFormState, IFormStep} from "@/interfaces/form.interface";
import {IDateInput, IDestination, ISearchInput} from "@/interfaces/SearchInput.interface";

export const searchInputService = {
    buildFromForm: (formState: IFormState): ISearchInput => {
        return {
            nbPerson: {
                adults: 4,
                children: 0,
                babies: 0,
            },
            transport: {
                train: false,
                car: true,
                plane: true,
                bus: false,
                boat: false,
                other: false,
            },
            budget: {
                min: 0,
                max: 10000,
            },
            departure: {
                latitude: 50.63249610631816,
                longitude: 3.052219302864069,
            },
            destination: searchInputService.getFormDestination(formState),
            date: searchInputService.getFormDate(formState),
            handicap: false,
            mood: 8,
            locationType: {
                hotel: true,
                apartment: false,
                camping: false,
                other: false,
            },
            formuleType: {
                allInclusive: true,
                halfBoard: false,
                fullBoard: false,
                breakfast: false,
                nothing: false,
            },
            landscape: {
                sea: true,
            },
            nearFromCity: false,
            equipments: {
                swimmingPool: true,
            },
        };
    },

    findFormStepByName: (formState: IFormState, name: string) => {
        return formState.steps.find((step) => step.name === name);
    },

    findStepFieldByName: (formStep: IFormStep, name: string) => {
        return formStep.fields.find((field) => field.name === name);
    },

    getFormDestination: (formState: IFormState): IDestination => {
        const destinationStep = searchInputService.findFormStepByName(formState, 'destination');
        const destinationField = destinationStep ? searchInputService.findStepFieldByName(destinationStep, 'destination') : null;

        if (destinationStep && destinationField) {
            return {
                city: destinationField.value.city,
                country: destinationField.value.country,
            }
        }

        return {
            country: 'France',
        }
    },

    getFormDate: (formState: IFormState): IDateInput => {
        const dateStep = searchInputService.findFormStepByName(formState, 'date');
        const dateField = dateStep ? searchInputService.findStepFieldByName(dateStep, 'date') : null;

        if (dateStep && dateField) {
            const startDate = dateField.value[0]
            const endDate = dateField.value[1];
            const nbDays = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
            return {
                startDate: startDate,
                endDate: endDate,
                nbDays: nbDays,
                isFlexible: false,
            }
        }

        return {
            startDate: '2023-07-20',
            endDate: '2023-07-27',
            nbDays: 8,
            isFlexible: false,
        }
    }
}