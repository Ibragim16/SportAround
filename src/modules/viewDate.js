export const viewDate = (event) => {
  const dateStart = new Date(event.dt_start)
    .toLocaleDateString({ year: "numeric", month: "numeric", day: "numeric" })
    .split(".");
  const dateEnd = new Date(event.dt_end)
    .toLocaleDateString({ year: "numeric", month: "numeric", day: "numeric" })
    .split(".");
  if (dateStart[2] - dateEnd[2] < 0) {
    return `${dateStart[0]}.${dateStart[1]}.${dateStart[2]}-${dateEnd[0]}.${dateEnd[1]}.${dateEnd[2]}`;
  }
  if (dateStart[1] - dateEnd[1] < 0) {
    return `${dateStart[0]}.${dateStart[1]}-${dateEnd[0]}.${dateEnd[1]}.${dateStart[2]}`;
  }
  if (dateStart[0] - dateEnd[0] < 0) {
    return `${dateStart[0]}-${dateEnd[0]}.${dateEnd[1]}.${dateStart[2]}`;
  }
  if (dateStart[0] - dateEnd[0] === 0) {
    return `${dateStart[0]}.${dateEnd[1]}.${dateStart[2]}`;
  }
};
