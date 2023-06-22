import {IFormState, IFormStep} from "@/interfaces/Form.interface";
import {IDateInput, IDestination, ISearchInput, ITransport} from "@/interfaces/SearchInput.interface";
import {ISwiperResultItem} from "@/interfaces/Questions.interface";

export const searchInputService = {
    buildFromForm: (formState: IFormState): ISearchInput => {
        return {
            nbPerson: {
                adults: searchInputService.getNbPerson(formState, 'adults'),
                children: searchInputService.getNbPerson(formState, 'children'),
                babies: searchInputService.getNbPerson(formState, 'babies'),
            },
            transport: searchInputService.getFormTransports(formState),
            budget: {
                min: searchInputService.getBudget(formState, 'min'),
                max: searchInputService.getBudget(formState, 'max'),
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

        if (dateStep && dateField && dateField.value) {
            const startDate = dateField.value[0]
            const endDate = dateField.value[1];
            const nbDays = (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 3600 * 24);
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
    },

    findTransportValueByName: (transportsFields: ISwiperResultItem[], name: string) => {
        return transportsFields.find((field) => field.name === name);
    },
    getFormTransports: (formState: IFormState): ITransport => {
        const transportStep = searchInputService.findFormStepByName(formState, 'transports');
        const transportField = transportStep ? searchInputService.findStepFieldByName(transportStep, 'transports') : null;
        const transportValues = transportField ? transportField.value : null;

        if (transportStep && transportField && transportValues) {
            return {
                train: searchInputService.findTransportValueByName(transportValues, 'train')?.choice ?? true,
                car: searchInputService.findTransportValueByName(transportValues, 'car')?.choice ?? true,
                plane: searchInputService.findTransportValueByName(transportValues, 'plane')?.choice ?? true,
                bus: searchInputService.findTransportValueByName(transportValues, 'bus')?.choice ?? true,
                boat: searchInputService.findTransportValueByName(transportValues, 'boat')?.choice ?? true,
                other: searchInputService.findTransportValueByName(transportValues, 'other')?.choice ?? true,
            }
        }

        return {
            train: false,
            car: true,
            plane: true,
            bus: false,
            boat: false,
            other: false,
        }
    },

    getNbPerson(formState: IFormState, name: string): number {
        const nbPersonStep = searchInputService.findFormStepByName(formState, 'nbPersons');
        const nbPersonField = nbPersonStep ? searchInputService.findStepFieldByName(nbPersonStep, 'nbPersons') : null;
        return nbPersonField.value[name] ?? 0;
    },

    getBudget(formState: IFormState, name: string): number {
        const budgetStep = searchInputService.findFormStepByName(formState, 'budget');
        const budgetField = budgetStep ? searchInputService.findStepFieldByName(budgetStep, 'budget') : null;
        return name === 'min' ? budgetField.value[0] : budgetField.value[1];
    }
}