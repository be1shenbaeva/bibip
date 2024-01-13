import { createToken } from "@/helpers/createToken";

export const cancelPayment = async ({
  PaymentId,
}: {
  PaymentId: string | null;
  token: string | null;
}) => {
  const res = await fetch(`https://securepay.tinkoff.ru/v2/Cancel`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      TerminalKey: "1675940812852",
      PaymentId: PaymentId,
      Token: createToken([
        { TerminalKey: "1675940812852", PaymentId: PaymentId },
      ]),
    }),
  });

  if (!res.ok) {
    throw new Error("Error in cancel payment by Tinkoff");
  }

  return res.json();
};
