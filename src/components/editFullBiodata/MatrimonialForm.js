import React, { useState,useEffect } from 'react';
import ProfileInformation from './ProfileInformation';
import AddressInfo from './Address';
import EducationProfessionForm from './EducationProfession';
import FamilyInformationForm from './FamilyInfo';
import PartnerPreferences from './PartnerPreferences';
import Header from '../header';
import Footer from '../footer';
import axiosInstance from '../../Axios/axios_instance';
import { useNavigate } from 'react-router-dom';

const MatrimonialForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState();
  const [images1,setImages1]=useState([]);
  const [userId, setUserId] = useState(null); // Initialize userId correctly as null
  const navigate = useNavigate();
  useEffect(() => {
    getCvs();
  }, []);

  const getCvs=async()=>{

    const response=await axiosInstance.get('getCV');
    console.log('dekhi ki Ai',response.data.result1)
    setFormData(response.data.result[0])
    setImages(`https://backend.butterfly.hurairaconsultancy.com/${response.data.result1[0].path}`)
    setImages1(response.data.images)

  }
  
  console.log('dp: ', images);

  const handleSubmit = async (data, compressedImages) => {
    try {
      console.log('this is the data:  ', data);
      const response = await axiosInstance.post('/update_cv', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setUserId(response.data.userId);

      console.log('Form data response:', response.data.userId);
      console.log(compressedImages,'egula images')
      if (compressedImages.length > 0) {
      
        const formDataImages = new FormData();
        compressedImages.forEach((image) => {
          formDataImages.append('images', image);
        });
        console.log('dp name', userId);
        formDataImages.append('images', images);
        formDataImages.append('dp', images.name);

        const responseImages = await axiosInstance.post(`/update_images`, formDataImages, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Image upload response:', responseImages.data);
      }else{
        const formDataImages = new FormData();
        formDataImages.append('images', images);
        formDataImages.append('dp', images.name);

        const responseImages = await axiosInstance.post(`/upload_images?userId=${response.data.userId}`, formDataImages, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Image upload response:', responseImages.data);
      }

      navigate(`/cvpreview/${response.data.userId}`);
    } catch (error) {
      console.error('Error submitting form or uploading images:', error);
    }
  };

  console.log('dp name', images);
  
  return (
    <div>
      <Header />
      {page === 0 && <ProfileInformation pageFunc={setPage} formDataFunc={setFormData} formData={formData} image={images} images={setImages} />}
      {page === 1 && <AddressInfo pageFunc={setPage} formDataFunc={setFormData} formData={formData} />}
      {page === 2 && <EducationProfessionForm pageFunc={setPage} formDataFunc={setFormData} formData={formData} />}
      {page === 3 && <FamilyInformationForm pageFunc={setPage} formDataFunc={setFormData} formData={formData} />}
      {page === 4 && (
        <PartnerPreferences
          pageFunc={setPage}
          formDataFunc={formData} 
          submitCV={handleSubmit}
          images={setImages1}
          images1={images1}
        />
      )}
      <Footer />
    </div>
  );
};

export default MatrimonialForm;
