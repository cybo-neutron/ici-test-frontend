import { FC } from "react";
import ImageView from "./ImageView";

interface ImagesContainerProps {
  files: FileList;
}

const ImagesContainer: FC<ImagesContainerProps> = ({ files }) => {
  return (
    <div className="flex flex-wrap">
      {files && files.length > 0
        ? Array.from(files).map((file) => {
            return <ImageView source={URL.createObjectURL(file)} />;
          })
        : null}
    </div>
  );
};

export default ImagesContainer;
