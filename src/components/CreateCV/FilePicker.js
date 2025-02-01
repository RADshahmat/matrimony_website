import React, { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../cropImage";
import imageCompression from 'browser-image-compression';
import { MdOutlineCheck } from "react-icons/md";
import styles from "../../styles/CreateCvStyle/filepicker.module.css"

const FilePicker = (props) => {
  const [image, setImage] = useState(null);

  const [croppedImage, setCroppedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [cropping, setCropping] = useState(false);

  useEffect(() => {
    if (props.images instanceof File) {
      setImage(URL.createObjectURL(props.images));
    } else {
      setImage(null);
    }
  }, [props.images]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setCropping(true);
    }
  };

  const handleSaveCrop = async () => {
    try {
      const croppedImg = await getCroppedImg(image, croppedAreaPixels);

      const options = {
        maxSizeMB: 0.1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
        fileType: 'image/webp',
      };

      const croppedBlob = await fetch(croppedImg).then((res) => res.blob());
      const compressedBlob = await imageCompression(croppedBlob, options);
      const compressedFile = new File([compressedBlob], 'dp.webp', { type: 'image/webp' });

      setCroppedImage(URL.createObjectURL(compressedFile));
      props.setImageFunc(compressedFile);
      setCropping(false);
    } catch (error) {
      console.error("Error compressing the image:", error);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setCropping(true);
    }
  };
  //console.log('the image', image)
  return (
    <div style={{ display: 'flex', gap: "20px" }}>
      <div
        className="d-flex flex-column align-items-center rounded p-3"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{  position: "relative", border: '0px ' }}
      >
        {!cropping ? (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <img
              src={image || croppedImage || `${process.env.PUBLIC_URL}/assets/image.png`}
              alt="Selected"
              className={styles.thumbnail}
            />
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}

            />
          </div>
        ) : (
          <>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                style={{ containerStyle: { height: "350px", width: "290px", background: 'darkslategrey', zIndex: '500' }, background: 'darkslategrey' }}
              />
            </div>
            <button
              type="button"
              className="btn"
              onClick={handleSaveCrop}
              style={{ position: "absolute", bottom: "-2rem", zIndex: '501', bottom: '100px', right: '-270px' }}
            >
              <MdOutlineCheck size={25} />
            </button>
          </>
        )}
      </div>
      <div>
        <img  className={styles.tips} src={`${process.env.PUBLIC_URL}/assets/tips.png`} alt="Tips" />
      </div>
    </div>
  );
};

export default FilePicker;