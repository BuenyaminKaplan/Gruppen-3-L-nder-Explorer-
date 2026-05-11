const API_URL =
  'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,languages,currencies,cca3';

export async function fetchCountries() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Länder konnten nicht geladen werden.');
  }

  return response.json();
}
