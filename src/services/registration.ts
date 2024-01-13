export const registration = async ({
  phoneNumber,
  email,
  firstName,
}: {
  phoneNumber: string;
  email?: string;
  firstName?: string;
}) => {
  const res = await fetch(`https://bibiptrip.com/api/users/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: phoneNumber,
      email,
      firstname: firstName,
    }),
  });

  if (!res.ok) {
    throw new Error(`registration fetch is not ok`);
  }

  return res.json();
};
