/* eslint-disable no-extra-boolean-cast */
export function dateFormat(dateStr) {
  const date = dateStr !== undefined ? new Date(dateStr) : new Date();
  const month = Number(date.getMonth()) + 1;
  return {
    fullDate: `${String(date.getDate()).padStart(2, "0")}.${String(
      month
    ).padStart(2, "0")}.${date.getFullYear()} 
        ${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}`,
    date: date,
  };
}
