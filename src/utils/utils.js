// Normalize date
export const normalizeDate = (date) => new Intl.DateTimeFormat('es-ES').format(new Date(date))
