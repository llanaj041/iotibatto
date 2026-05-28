"use client";

import { CldUploadWidget } from "next-cloudinary";

export default function ImageUpload({
  setImageUrl,
}: {
  setImageUrl: (url: string) => void;
}) {

  return (

    <CldUploadWidget
      uploadPreset="iotibatto"
      onSuccess={(result: any) => {
        setImageUrl(result.info.secure_url);
      }}
    >

      {({ open }) => {

        return (

          <button
            onClick={() => open()}
            className="bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-2xl font-semibold"
          >
            Carica Immagine
          </button>

        );
      }}

    </CldUploadWidget>

  );
}