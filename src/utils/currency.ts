export function convertToCurrency(value: number, option = { format: 'en-US', currency: 'USD' }) {
    return value.toLocaleString(option.format, { style: 'currency', currency: option.currency, minimumFractionDigits: 0 });
}

export function convertSalary(value: number) {
    const result = value.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (value)
        return '$' + result;
    else
        return '';
}
