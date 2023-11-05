/**
 * Check if invoice id is correct (XX0000)
 * @param {string} invoiceId Invoice id to check
 * @returns {boolean} true if invoice id is correct with id template
 */
export const isInvoiceIdCorrect = (invoiceId: string): boolean => {
  const regexPattern = /^[A-Z]{2}\d{4}$/;
  return regexPattern.test(invoiceId);
}
