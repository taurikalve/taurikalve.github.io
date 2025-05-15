export function buildClasses(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
