// utils/currency.js
export function getCurrencySymbol(currency) {
  if (!currency) return '';

  const s = String(currency).trim();

  // If they already passed a symbol, just return it
  const bySymbol = { '$': '$', '₦': '₦', '€': '€', '£': '£' };
  if (bySymbol[s]) return bySymbol[s];

  // ISO codes
  const byCode = { USD: '$', NGN: '₦', EUR: '€', GBP: '£' };
  const iso = s.toUpperCase();
  if (byCode[iso]) return byCode[iso];

  // Common names
  const byName = {
    dollar: '$',
    dollars: '$',
    naira: '₦',
    euro: '€',
    euros: '€',
    pound: '£',
    pounds: '£',
    'pound sterling': '£',
    sterling: '£',
  };

  return byName[s.toLowerCase()] || '';
}
