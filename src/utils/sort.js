export const sortByDate = (data) => data.sort((a, b) => new Date(b.date) - new Date(a.date));

export const sortByDateRange = (data) =>
  data.sort((a, b) => {
    let yearA = a.date.split(" - ")[1];
    yearA = yearA === "Present" ? Date.now().toString() : yearA;
    let yearB = b.date.split(" - ")[1];
    yearB = yearB === "Present" ? Date.now().toString() : yearB;
    return new Date(yearB) - new Date(yearA);
  });
