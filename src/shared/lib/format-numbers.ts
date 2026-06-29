export const formatNumbers = (numbers: number): string => {
  if (numbers == null) return "0";

  return Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: numbers % 1 !== 0 ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(numbers);
};

