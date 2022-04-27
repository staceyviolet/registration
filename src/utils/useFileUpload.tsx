import { useState } from "react";

export function useFileUpload(
  onFileUpload: (e: any) => void,
  withoutAvatar?: boolean,
  avatarElementId?: string
) {
  const [file, setFile] = useState<File | null>(null);
  const [fileSize, setFileSize] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileErrorMessage, setFileErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleFileUpload = () => {
    if (!file) return;

    if (validateSize(file)) {
      if (withoutAvatar) {
        const avatarSpan = document.getElementById(
          avatarElementId || "avatar"
        ) as HTMLSpanElement;
        avatarSpan.innerHTML =
          '<img class="avatar__chat-new-image" src="' +
          URL.createObjectURL(file) +
          '">';
      } else {
        const avatar = document.getElementById(
          avatarElementId || "avatar"
        ) as HTMLImageElement;
        avatar.src = URL.createObjectURL(file);
      }

      onFileUpload(file);
    } else {
      onFileUpload(null);
    }
  };

  const handleFileRemove = () => {
    setFileErrorMessage(undefined);
    setFileSize("");
    setFileName("");
    setFile(null);
    onFileUpload(null);
  };

  const validateSize = (file: any) => {
    const fileSize = file.size / 1024 / 1024; // in Mb

    const parts = file.name.split(".");
    const fileExtention = parts[parts.length - 1].toLowerCase();

    if (fileSize > 2) {
      setFileErrorMessage("File size exceeds 2Mb");
      setFileSize("");
      setFileName("");
      setFile(null);
      return false;
    } else if (
      fileExtention !== "jpg" &&
      fileExtention !== "jpeg" &&
      fileExtention !== "png"
    ) {
      setFileErrorMessage("Only .jpg and .png files are allowed");
      setFileSize("");
      setFileName("");
      setFile(null);
      return false;
    } else {
      setFileSize(
        file.size > 1024 * 1024
          ? (file.size / 1024 / 1024).toFixed() + " Mb"
          : (file.size / 1024).toFixed() + " Kb"
      );
      setFileName(file.name);
      setFileErrorMessage(undefined);
      return true;
    }
  };

  return {
    handleFileUpload,
    handleFileRemove,
    file,
    fileSize,
    fileName,
    fileErrorMessage,
    setFile,
  };
}
