export function cleanPhoneNumber(phoneNumber: string) {
  const cleanedNumber = phoneNumber.replace(/\D/g, "");
  return cleanedNumber.startsWith("7")
    ? `+${cleanedNumber}`
    : `+7${cleanedNumber}`;
}
