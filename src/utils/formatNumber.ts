/**
 * Utility to convert Latin numerals (0-9) to Eastern Arabic-Indic numerals (٠-٩)
 * when rendering in Arabic locale.
 */
export const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

export function toArabicNumerals(input: string | number): string {
  if (input === null || input === undefined) return '';
  return String(input).replace(/[0-9]/g, (digit) => ARABIC_DIGITS[Number(digit)] || digit);
}

export function formatLocalizedNumber(
  val: number,
  locale: string,
  options?: Intl.NumberFormatOptions
): string {
  if (locale === 'ar') {
    const standard = val.toLocaleString('en-US', options);
    return toArabicNumerals(standard);
  }
  return val.toLocaleString(locale, options);
}
