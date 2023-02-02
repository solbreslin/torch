export const addOrdinalSuffix = (i: number) => {
  const j = i % 10;
  const k = i % 100;

  if (j === 1 && k !== 11) {
    return i + 'st';
  }

  if (j === 2 && k !== 12) {
    return i + 'nd';
  }
  if (j === 3 && k !== 13) {
    return i + 'rd';
  }

  return i + 'th';
};

export const formatPrice = (price: number) => '£' + price.toLocaleString();

export const pageTitle = (title: string, price: number) =>
  `${title} - To rent now for ${formatPrice(price)} p/m`;

export const formatISODateStringToString = (dateString: string) => {
  const dateParts = dateString.split('-');
  const date = new Date(
    parseInt(dateParts[0]),
    parseInt(dateParts[1]) - 1,
    parseInt(dateParts[2])
  );

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // @ts-ignore
  return date.toLocaleDateString('en-GB', options);
};
