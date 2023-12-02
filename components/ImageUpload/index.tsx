"use client";

import { cn } from "@/lib/utils";
import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ubuntu } from "@/lib/fonts";
import { uploadFiles } from "@/lib/services/uploadfiles";
import ImageView from "./ImageView";
import ImagesContainer from "./ImagesContainer";

interface ImageUploadProps {}

const ImageUpload: FC<ImageUploadProps> = ({}) => {
  const filesInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileList>();

  const showImages = () => {
    if (files) return <ImagesContainer files={files} />;
    else return null;
  };

  const uploadImages = (files: FileList) => {
    const formData = new FormData();
    if (files && files.length) {
      console.log("Here");
      for (let i = 0; i < files?.length; i++) {
        console.log("here");
        console.log(files[i]);
        formData.append("files", files[i] as File);
      }
    }
    formData.append("name", "roh");

    console.log(files);
    console.log(formData);
    uploadFiles(formData);
  };

  return (
    <div
      className={cn(
        "bg-slate-300/10  backdrop-blur p-2 h-[500px] w-[400px] border-[1px] border-zinc-300/20",
        "flex flex-col gap-2",
        ubuntu.className
      )}
    >
      <h2 className="text-xl font-bold text-center text-zinc-300">
        Upload image
      </h2>

      <div
        className={cn(
          "border-[1px] border-dashed border-zinc-300/30",
          " flex-1 flex flex-col justify-center items-center text-zinc-100/70"
        )}
        onDragOver={(e) => {
          e.preventDefault();
          //   console.log(e);
          console.log(e.dataTransfer.files);
        }}
        onDrop={(e) => {
          e.preventDefault();
          console.log(e.dataTransfer.files);

          setFiles(e.dataTransfer.files);
        }}
      >
        {showImages()}
        <div>Drag and drop files here</div>
        <b>OR</b>
        <Button
          className={cn(
            "border-[0.1px] border-zinc-300/30 bg-zinc-800 text-md hover:bg-zinc-700/30"
          )}
          onClick={() => {
            console.log("Select button clicked");
            filesInputRef.current?.click();
          }}
        >
          Select files
        </Button>

        <input
          type="file"
          multiple
          hidden
          ref={filesInputRef}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target && e.target.files) setFiles(e.target.files);
            // console.log(e.target.files);
          }}
        />
      </div>

      <Button
        className={cn(
          "mt-auto font-semibold uppercase text-xl bg-gradient-to-r from-red-800/70 via-indigo-500/50 to-indigo-600/70 "
        )}
        //TODO : disable upload button if no file is selected OR when file is being uploaded
        onClick={() => {
          if (files) uploadImages(files);
        }}
      >
        Upload
      </Button>
    </div>
  );
};

export default ImageUpload;
