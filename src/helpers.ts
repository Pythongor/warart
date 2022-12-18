export const setCookie = (key: string, value: string, expiry: string) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + +expiry * 24 * 60 * 60 * 1000);
  document.cookie = `${key}=${value};expires=${expires.toUTCString()}; SameSite=Strict`;
};

export const getCookie = (key: string) => {
  const keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  return keyValue ? keyValue[2] : null;
};

export const eraseCookie = (key: string) => {
  const keyValue = getCookie(key);
  keyValue && setCookie(key, keyValue, "-1");
};

export const getToken = () => {
  const currentUser = getCookie("currentUser");
  return getCookie(currentUser || "");
};
