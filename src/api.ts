import axios from "axios";
// import { getToken } from "helpers";

type RequestType = {
  url: string;
  method: string;
  data?: { [key: string]: any };
  contentType?: "json" | "form";
  responseType?: "blob";
  signal?: AbortSignal;
};

class Api {
  baseUrl = "http://192.168.1.73:8000";
  request = async ({
    url,
    method,
    data,
    contentType = "form",
    responseType,
    signal,
  }: RequestType) => {
    // const token = getToken();
    return axios({
      method,
      url: this.baseUrl + url,
      data,
      signal,
      headers: {
        "Content-Type":
          contentType === "form" ? "multipart/form-data" : "application/json",
        // Authorization: token ? `Bearer ${token}` : "",
      },
      responseType,
    });
  };
  post = async (request: Omit<RequestType, "method">) => {
    return await this.request({ ...request, method: "post" });
  };
  get = async (request: Omit<RequestType, "method">) => {
    return await this.request({ ...request, method: "get" });
  };
}

export default new Api();
