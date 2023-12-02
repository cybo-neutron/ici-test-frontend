import axiosClient from "@/lib/axiosClient";
import { urlConst } from "../urlConsts";
import axios from "axios";
const BACKEND_API_URL = process.env.BACKEND_API_URL || "http://localhost:5111";

export async function uploadFiles(files: FormData) {
  // const url = `${BACKEND_API_URL}${urlConst.IMAGE_UPLOAD}`;
  const url = `${BACKEND_API_URL}/test`;
  // return await axios.post(`${BACKEND_API_URL}/${urlConst.IMAGE_UPLOAD}`, {
  //   files,
  // });
  return await axiosClient.request({
    method: "post",
    url,
    headers: { "Content-Type": "multipart/form-data" },
    data: files,
  });
}
