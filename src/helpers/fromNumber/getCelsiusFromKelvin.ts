import { KELVIN_FOR_CELSIUS_DIFF } from '../../constants';

export const getCelsiusFromKelvin = (kelvin?: number) => {
    if (kelvin) {
        const celsius = kelvin - KELVIN_FOR_CELSIUS_DIFF;

        return celsius.toFixed(2);
    }

    return kelvin;
};
