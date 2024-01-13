// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import CryptoJS from "crypto-js";

export const createToken = (array: any[]) => {
  array.push({ Password: "7omyals84yq2x88k" });
  const sortedData = array.sort((a, b) => {
    const keyA = Object.keys(a)[0];
    const keyB = Object.keys(b)[0];
    return keyA.localeCompare(keyB);
  });

  const concatenatedValues = sortedData
    .map((obj) => Object.values(obj)[0])
    .join("");
  const hash = CryptoJS.SHA256(concatenatedValues).toString();
  console.log(hash);
  return hash
};
