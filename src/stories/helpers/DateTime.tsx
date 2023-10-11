const date = new Date()
const day = date.getDate()
const month = date.getMonth()
const hour = date.getHours()
const minutes = date.getMinutes()
export const stringDate = day + '-' + month
export const stringTime = hour + ':' + minutes
