const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6Iis3OTMwMDYyOTU1OSIsInRpbWVzdGFtcCI6IjE2OTkyNjk0NDQuMjg2NDA5NCJ9.VU8ZT1_zQs08_r9QxSt490u2e1NJEJXBOpAQkhMVlC0";

const expirationTime = new Date();
expirationTime.setTime(expirationTime.getTime() + 1 * 60 * 60 * 1000);

document.cookie = `access_token=${accessToken}; expires=${expirationTime.toUTCString()}; path=/`;

const cookies = document.cookie;

export function getCookie(name: string) {
  const value = `; ${cookies}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) return parts.pop()?.split(";").shift();
}
