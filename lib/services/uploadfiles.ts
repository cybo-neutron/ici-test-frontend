import axiosClient from "@/lib/axiosClient";
import { urlConst } from "../urlConsts";
import axios from "axios";
import { supabaseClient } from "@/services/supabase/client";
import { getFileNameAndExtension } from "../utils/fileExtension";
import { v4 as uuidv4 } from "uuid";
const BACKEND_API_URL =
  process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:5111";

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

export async function uploadFilesToSupaBase(files: FileList, folder: string) {
  const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME;

  const result = [];
  //TODO : restrict on accept types for images and documents
  for (let i = 0; i < files.length; i++) {
    const { fileName, extension } = getFileNameAndExtension(files[i].name);
    const data = await supabaseClient.storage
      .from(`${bucketName}`)
      .upload(`${folder}/${uuidv4()}.${extension}`, files[i]);

    result.push(data);
  }
  return result;
}
