import React, { useState } from 'react';
import ProfileInformation from './ProfileInformation';
import AddressInfo from './Address';
import EducationProfessionForm from './EducationProfession';
import FamilyInformationForm from './FamilyInfo';
import PartnerPreferences from './PartnerPreferences';
import axiosInstance from '../../Axios/axios_instance';
import { useNavigate } from 'react-router-dom';

const MatrimonialForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (data, compressedImages) => {
    try {
      // Send the form data
      const response = await axiosInstance.post('/submit_cv', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Form data response:', response.data);

      // Retrieve the userId from the response (assuming it's returned as response.data.userId)
      const userId = response.data.userId;

      // Then, send the images if there are any
      if (compressedImages.length > 0) {
        const formDataImages = new FormData();
        compressedImages.forEach((image) => {
          formDataImages.append('images', image);
        });
        formDataImages.append('images', images);
        formDataImages.append('dp', images.name);

        const responseImages = await axiosInstance.post('/upload_images', formDataImages, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Image upload response:', responseImages.data);
      }

      // Navigate to the CV preview page with the userId as a parameter
      navigate(`/cvpreview/${userId}`);
      
    } catch (error) {
      console.error('Error submitting form or uploading images:', error);
    }
  };

  return (
    <div>
      {page === 0 && <ProfileInformation pageFunc={setPage} formDataFunc={setFormData} images={setImages} />}
      {page === 1 && <AddressInfo pageFunc={setPage} formDataFunc={setFormData} />}
      {page === 2 && <EducationProfessionForm pageFunc={setPage} formDataFunc={setFormData} />}
      {page === 3 && <FamilyInformationForm pageFunc={setPage} formDataFunc={setFormData} />}
      {page === 4 && (
        <PartnerPreferences
          pageFunc={setPage}
          formDataFunc={formData}
          submitCV={handleSubmit}
          images={setImages}
        />
      )}
    </div>
  );
};

export default MatrimonialForm;
