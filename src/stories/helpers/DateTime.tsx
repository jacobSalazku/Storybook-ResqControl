const date = new Date();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
export const stringDate = day.toString(); // Convert day to a string
export const stringTime = `${hour}:${minutes}:${seconds}`; //
