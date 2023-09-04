const parseToDigits = (value: number) => {
    return value.toLocaleString('ru-RU', {minimumFractionDigits: 2});
}

export {
    parseToDigits
}