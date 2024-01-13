import { createToken } from "../helpers/createToken";
import { setPaymentData } from "@/var/sessionStorage";

export const makePayment = async ({
  amount,
  orderId,
  phoneNumber,
  email,
}: {
  amount: string;
  orderId: string;
  phoneNumber: string;
  email: string;
}) => {
  const requestData = {
    TerminalKey: "1675940812852",
    Amount: 1000,
    OrderId: orderId,
    Description: "Билет на автобус",
    PayType: "O",
    SuccessURL: "https://bibiptrip.vercel.app/success-payment",
    Token: createToken([
      { TerminalKey: "1675940812852" },
      { Amount: 1000 },
      { OrderId: orderId },
      { Description: "Билет на автобус" },
    ]),
    DATA: {
      Phone: phoneNumber,
      Email: email,
    },
    Receipt: {
      Email: email,
      Phone: phoneNumber,
      Taxation: "osn",
      Items: [
        {
          Name: "Билет на автобус",
          Price: 1000,
          Quantity: 1,
          Amount: 1000,
          Tax: "vat0",
        },
      ],
    },
  };

  const response = await fetch(` https://securepay.tinkoff.ru/v2/Init`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const result = await response.json();

  const { PaymentURL } = result;
  const { PaymentId } = result;
  setPaymentData({ paymentId: PaymentId, paymentToken: requestData.Token });
  return PaymentURL;
};
