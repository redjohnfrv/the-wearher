import { KELVIN_FOR_CELSIUS_DIFF } from '../../constants';

export const getCelsiusFromKelvin = (kelvin: number) => {
    const celsius = kelvin - KELVIN_FOR_CELSIUS_DIFF;

    return celsius.toFixed(2);
};
