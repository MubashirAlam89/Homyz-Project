export function formatCompactNumber(number) {
  const formatter = Intl.NumberFormat("en", { notation: "standard" });
  return formatter.format(number);
}
