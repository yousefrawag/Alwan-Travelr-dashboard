import { MdAttachFile } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlayCircle } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { useRef } from "react";

const UploadFiles = ({ images, setImages, docs, setDocs }) => {
  const videoRef = useRef({});

  const handleDeleteImage = (imageName) => {
    const newImages = images.filter((image) => image.name !== imageName);
    setImages(newImages);
  };

  const handleDeleteDoc = (docName) => {
    const newDocs = docs.filter((doc) => doc.name !== docName);
    setDocs(newDocs);
  };

  const handlePlay = async (imageName) => {
    const video = videoRef.current[imageName];
    try {
      if (video.paused) {
        await video.play().catch((error) => {
          console.log("Play error:", error);
        });
      } else {
        await video.pause();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="uploads mt-8 p-5 rounded-lg border">
      {/* Images and Videos Section */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
          <MdAttachFile className="text-2xl" />
        </span>
        <p>الصور والفديوهات ({images.length})</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:grid-cols-1">
        {images.map((image, i) => (
          <div key={image.name} className="relative rounded-lg overflow-hidden group">
            {image?.type?.includes("image") ? (
              <>
                <img
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-2 transition">
                  <button
                    type="button"
                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white"
                    onClick={() => handleDeleteImage(image.name)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                  <div className="flex justify-between text-white text-sm">
                    <span>
                      {image.size / 1024 < 900
                        ? (image.size / 1024).toFixed(2) + "KB"
                        : (image.size / (1024 * 1024)).toFixed(2) + "MB"}
                    </span>
                    <span>{image.name.substring(0, 10)}...</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="relative w-full h-40 bg-black rounded-lg overflow-hidden">
                <video
                  ref={(video) => (videoRef.current[image.name] = video)}
                  src={URL.createObjectURL(image)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex justify-center items-center transition">
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black"
                    onClick={() => handlePlay(image.name)}
                  >
                    <FaPlayCircle />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <span className="block my-6 h-px bg-gray-200" />

      {/* Documents Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
            <MdAttachFile className="text-2xl" />
          </span>
          <p>المرفقات ({docs.length})</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-1">
          {docs.map((doc, i) => (
            <div
              key={`${doc.name} + item ${i}`}
              className="relative flex items-center justify-between p-4 h-16 bg-red-100 rounded-lg group"
            >
              <div className="flex flex-col">
                <span className="text-red-500 font-semibold">
                  {doc.name.substring(0, 10)}...
                </span>
                <span className="text-sm">
                  {doc.size / 1024 < 900
                    ? (doc.size / 1024).toFixed(2) + "KB"
                    : (doc.size / (1024 * 1024)).toFixed(2) + "MB"}
                </span>
              </div>
              <FaFilePdf className="text-4xl text-red-500" />
              <button
                type="button"
                className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white opacity-0 group-hover:opacity-100 transition"
                onClick={() => handleDeleteDoc(doc.name)}
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
