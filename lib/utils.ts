/**
 * Formats a number as standard U.S. money ($ with exactly two decimal places).
 * Defaults to USD.
 * 
 * @param value - The numeric value to format.
 * @param currency - The currency code (e.g., 'USD', 'EUR'). Defaults to 'USD'.
 * @returns The formatted currency string.

export const formatCurrency = (value: number | string, currency: string = 'USD'): string => {
  try {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(numericValue)) {
      throw new Error('Invalid numeric value');
    }

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericValue);
  } catch (error) {
    console.error('Error formatting currency:', error);
    
    // Fallback logic
    try {
      const fallbackValue = typeof value === 'string' ? parseFloat(value) : value;
      const amount = isNaN(fallbackValue) ? 0 : fallbackValue;
      return `$${amount.toFixed(2)}`;
    } catch (innerError) {
      return '$0.00';
    }
  }
};*/

import dayjs from "dayjs";

export const formatCurrency = (value: number, currency = "USD"): string => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return value.toFixed(2);
  }
};

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not provided";
  const parsedDate = dayjs(value);
  return parsedDate.isValid() ? parsedDate.format("MM/DD/YYYY") : "Not provided";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};
