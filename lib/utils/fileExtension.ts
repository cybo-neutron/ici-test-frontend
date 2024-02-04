export function getFileNameAndExtension(_fileName: string): {
  fileName: string;
  extension: string;
} {
  const fileName = _fileName.substring(0, _fileName.lastIndexOf("."));
  const extension = _fileName.substring(_fileName.lastIndexOf(".") + 1);

  return {
    fileName,
    extension,
  };
}
