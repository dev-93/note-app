export function formatDate(value: any) {
  const date = new Date(value);
  const year = date.getFullYear();
  let month: string | number = date.getMonth() + 1;
  month = month > 9 ? month : `0${month}`;
  const day = date.getDate();
  let hours: string | number = date.getHours();
  hours = hours > 9 ? hours : `0${hours}`;
  let minutes: string | number = date.getMinutes();
  minutes = minutes > 9 ? minutes : `0${minutes}`;
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
