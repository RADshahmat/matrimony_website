import React, { useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import { toast,ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 
import '../styles/UserStyle/reportmodal.css';
import axiosInstance from '../Axios/axios_instance';

const ReportModal = ({ isOpen, onClose, peerId, matchId }) => {
  const [violenceType, setViolenceType] = useState('');
  const [actions, setActionType] = useState('');
  const [details, setDetails] = useState('');
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const violenceOptions = [
    'Physical Violence',
    'Emotional Abuse',
    'Sexual Harassment',
    'Cyberbullying',
    'Other',
  ];

  const actionsOptions = [
    'Just Report',
    'Block'
  ];

  const compressImage = async (file) => {
    const options = {
      maxSizeMB: 0.2, 
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      fileType: 'image/webp',
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const newFile = new File([compressedFile], file.name, {
        type: 'image/webp',
        lastModified: Date.now(),
      });
      return newFile;
    } catch (error) {
      console.error('Error compressing image:', error);
      return file;
    }
  };

  const handleImageChange = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    
    if (images.length + selectedFiles.length > 3) {
      toast.error('You can only upload a maximum of 3 images.');
      return;
    }

    const newImages = [];
    const newFiles = [];

    for (const file of selectedFiles) {
      const processedFile = file.size > 200 * 1024 ? await compressImage(file) : file;
      newImages.push(URL.createObjectURL(processedFile));
      newFiles.push(processedFile);
    }

    setImages((prevImages) => [...prevImages, ...newImages]);
    setImageFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); 

    const formData = new FormData();
    formData.append('violenceType', violenceType);
    formData.append('details', details);
    formData.append('actions', actions);
    formData.append('reported', peerId);
    formData.append('matchId', matchId);
    
    imageFiles.forEach((file, index) => {
      formData.append('images', file);
    });

    try {
      const response = await axiosInstance.post('/report', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Report submitted successfully');
      closeModal();
    } catch (error) {
      console.error('Error submitting report:', error);
      toast.error('Failed to submit the report. Please try again.');
    } finally {
      setIsSubmitting(false); 
    }
  };

  const closeModal = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setViolenceType('');
      setDetails('');
      setImages([]);
      setImageFiles([]);
      setIsAnimatingOut(false);
      onClose();
    }, 300); 
  };

  useEffect(() => {
    if (isOpen) {
      setIsAnimatingOut(false);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimatingOut) return null;

  return (
    <>
      <ToastContainer /> {/* Add the ToastContainer component */}
      <div className={`report-modal-overlay ${isAnimatingOut ? 'fade-out' : 'fade-in'}`}>
        <div className={`report-modal ${isAnimatingOut ? 'slide-out' : 'slide-in'}`}>
          <button className="close-button" onClick={closeModal}>&times;</button>
          <h2>Report Violence</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="violenceType">Type of Violence</label>
              <select
                id="violenceType"
                value={violenceType}
                onChange={(e) => setViolenceType(e.target.value)}
                required
              >
                <option value="">Select a type</option>
                {violenceOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="details">Details</label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Provide more details..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="action">What do you want to do?</label>
              <select
                id="action"
                value={actions}
                onChange={(e) => setActionType(e.target.value)}
                required
              >
                <option value="">Select an Action</option>
                {actionsOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="images">Upload Images (max 3)</label>
              <input
                type="file"
                id="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="image-preview">
              {images.map((image, index) => (
                <div key={index} className="image-preview-item">
                  <img src={image} alt={`Preview ${index + 1}`} />
                  <button
                    type="button"
                    className="remove-image-button"
                    onClick={() => handleRemoveImage(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Report'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReportModal;
