type FormatType = '2-digit' | 'numeric';

interface Format {
  hour?: FormatType;
  minute?: FormatType;
  day: FormatType;
  month: FormatType;
  year: FormatType;
}

const exchangeToRem = (pixel: number, base = 16): string =>
  `${pixel / base}rem`;

export const pixelToRem = (...pixel: Array<number>): string =>
  pixel.map((px: number) => exchangeToRem(px)).join(' ');

export const stringNumberPattern = (text: string): boolean => {
  return /^[a-zA-Z0-9_.-]*$/.test(text);
};

export const formatDate = (dateAdded: string, longFormat: boolean): string => {
  const format: Format = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  if (longFormat) {
    format['hour'] = '2-digit';
    format['minute'] = '2-digit';
  }

  const date = new Date(dateAdded).toLocaleDateString('de-DE', format);

  return date.toString();
};
