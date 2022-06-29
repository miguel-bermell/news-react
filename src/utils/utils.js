// Normalize date
export const normalizeDate = (date) => new Intl.DateTimeFormat('es-ES').format(new Date(date))

// Load abort
export const loadAbort = () => {
  const controller = new AbortController()
  return controller
}
