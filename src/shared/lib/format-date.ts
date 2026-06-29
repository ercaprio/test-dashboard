export const formatDate = (date: Date, type: "hour" | "weekday") => {
  const dayMonth = date
    .toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "short",
    })
    .replace(".", "");

  const timeType =
    type === "weekday"
      ? date.toLocaleDateString("ru-RU", {
          weekday: "short",
        })
      : date.toLocaleTimeString("ru-RU", {
          timeStyle: "short",
        });

  return `${dayMonth}, ${timeType}`;
};
