export const getCode = async ({ login }: { login: string }) => {
  const res = await fetch(
    `https://bibiptrip.com/api/users/registration_get_code`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login }),
    },
  );

  if (!res.ok) {
    throw new Error(`registration_get_code fetch is not ok`);
  }

  return res.json();
};
