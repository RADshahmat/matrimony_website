import React, { useState, useEffect } from "react";
import Select from "react-select";
import imageCompression from "browser-image-compression";
import styles from "../../styles/CreateCvStyle/PartnerPreferences.module.css";

const districts = [
  { value: "Bandarban", label: "Bandarban" },
  { value: "Barguna", label: "Barguna" },
  { value: "Barisal", label: "Barisal" },
  { value: "Brahmanbaria", label: "Brahmanbaria" },
  { value: "Chandpur", label: "Chandpur" },
  { value: "Chattogram", label: "Chattogram" },
  { value: "Chuadanga", label: "Chuadanga" },
  { value: "Cox's Bazar", label: "Cox's Bazar" },
  { value: "Dhaka", label: "Dhaka" },
  { value: "Dinajpur", label: "Dinajpur" },
  { value: "Faridpur", label: "Faridpur" },
  { value: "Feni", label: "Feni" },
  { value: "Gaibandha", label: "Gaibandha" },
  { value: "Gazipur", label: "Gazipur" },
  { value: "Gopalganj", label: "Gopalganj" },
  { value: "Habiganj", label: "Habiganj" },
  { value: "Jamalpur", label: "Jamalpur" },
  { value: "Jashore", label: "Jashore" },
  { value: "Jatiyo", label: "Jatiyo" },
  { value: "Jhalokati", label: "Jhalokati" },
  { value: "Jhangirnagar", label: "Jhangirnagar" },
  { value: "Jhenaidah", label: "Jhenaidah" },
  { value: "Joypurhat", label: "Joypurhat" },
  { value: "Khagrachari", label: "Khagrachari" },
  { value: "Khulna", label: "Khulna" },
  { value: "Kishoreganj", label: "Kishoreganj" },
  { value: "Kurigram", label: "Kurigram" },
  { value: "Kushtia", label: "Kushtia" },
  { value: "Lakshmipur", label: "Lakshmipur" },
  { value: "Lalmonirhat", label: "Lalmonirhat" },
  { value: "Madaripur", label: "Madaripur" },
  { value: "Magura", label: "Magura" },
  { value: "Manikganj", label: "Manikganj" },
  { value: "Meherpur", label: "Meherpur" },
  { value: "Moulvibazar", label: "Moulvibazar" },
  { value: "Mymensingh", label: "Mymensingh" },
  { value: "Naogaon", label: "Naogaon" },
  { value: "Narail", label: "Narail" },
  { value: "Narayanganj", label: "Narayanganj" },
  { value: "Narsingdi", label: "Narsingdi" },
  { value: "Natore", label: "Natore" },
  { value: "Netrokona", label: "Netrokona" },
  { value: "Nilphamari", label: "Nilphamari" },
  { value: "Noakhali", label: "Noakhali" },
  { value: "Pabna", label: "Pabna" },
  { value: "Panchagarh", label: "Panchagarh" },
  { value: "Patuakhali", label: "Patuakhali" },
  { value: "Pirojpur", label: "Pirojpur" },
  { value: "Rajbari", label: "Rajbari" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Rangamati", label: "Rangamati" },
  { value: "Rangpur", label: "Rangpur" },
  { value: "Satkhira", label: "Satkhira" },
  { value: "Shariatpur", label: "Shariatpur" },
  { value: "Shatkhira", label: "Shatkhira" },
  { value: "Sherpur", label: "Sherpur" },
  { value: "Sirajganj", label: "Sirajganj" },
  { value: "Sunamganj", label: "Sunamganj" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Tangail", label: "Tangail" },
  { value: "Thakurgaon", label: "Thakurgaon" },
];

const PartnerPreferences = (props) => {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    age: "20",
    height: "",
    district: "",
    educationalQualification: "",
    employmentStatus: "Unemployed",
    heightPreference: "",
    preferredHeightLimit: "",
    agePreference: "",
    preferredAgeLimit: "",
    notReferredDistricts: [],
    minimumEducationalQualification: "",
  });
  useEffect(() => {
    if (props.formDataFunc) {
      const {
        age,
        height,
        district,
        educationalQualification,
        employmentStatus,
        heightPreference,
        preferredHeightLimit,
        agePreference,
        preferredAgeLimit,
        notReferredDistricts,
        minimumEducationalQualification,
      } = props.formDataFunc;

      setFormData((prevData) => ({
        ...prevData,
        age,
        height,
        district,
        educationalQualification,
        employmentStatus,
        heightPreference,
        preferredHeightLimit,
        agePreference,
        preferredAgeLimit,
        notReferredDistricts,
        minimumEducationalQualification,
      }));
      setImages(props.images1);
    }
  }, [props.formDataFunc]);

  const options = {
    age: [{ value: "20", label: "20" }],
    height: [{ value: "5'", label: "5'" }],
    educationalQualification: [
      { value: "Higher Secondary", label: "Higher Secondary" },
    ],
    heightPreference: [{ value: "more than", label: "Not More Than" },{ value: "less Than", label: "Not Less Than" }],
    agePreference: [{ value: "more than", label: "Not More Than" },{ value: "less Than", label: "Not Less Than" }],
    minimumEducationalQualification: [
      { value: "Higher Secondary", label: "Higher Secondary" },
    ],
  };

  const handleChange = (eventOrOption, actionMeta) => {
    if (actionMeta) {
      // This handles react-select's onChange
      const { name } = actionMeta;
      // Check if it's for notReferredDistricts
      if (name === "notReferredDistricts") {
        const selectedValues = eventOrOption
          ? eventOrOption.map((option) => option.value)
          : [];
        setFormData({
          ...formData,
          [name]: selectedValues,
        });
      } else {
        setFormData({
          ...formData,
          [name]: eventOrOption ? eventOrOption.value : "",
        });
      }
    } else {
      // This handles regular input's onChange
      const { name, value } = eventOrOption.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const compressedImages = await Promise.all(
      images.map(async (image) => {
        const response = await fetch(image);
        const blob = await response.blob();
        if (blob.size < 30 * 1024) {
          return new File([blob], `${props.formDataFunc.fullName}.webp`, {
            type: "image/webp",
          });
        }

        const options = {
          maxSizeMB: 0.1,
          maxWidthOrHeight: 800,
          useWebWorker: true,
          fileType: "image/webp",
        };

        const compressedBlob = await imageCompression(blob, options);
        return new File(
          [compressedBlob],
          `${props.formDataFunc.fullName}.webp`,
          { type: "image/webp" }
        );
      })
    );

    const data = { ...props.formDataFunc, ...formData };
    props.images(compressedImages);

    //alert("Form submitted successfully!");
    props.submitCV(data, compressedImages);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 10) {
      alert("You can only select up to 10 images.");
      return;
    }
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const prev = () => {
    props.pageFunc(3);
  };
  const filteredDistricts = districts.filter(
    (district) => !formData.notReferredDistricts.includes(district.value)
  );
  //console.log(props.formDataFunc, props.images1, "yooooooooo");
  return (
    <div className={styles.container}>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <h4 className={styles.title}>
          Personal Preferences For Partners (Optional)
        </h4>
        <div className={styles.row}>
            <div className={styles.column}>
              <label className={styles.label}>Age</label>
              <input
                type="number"
                className={styles.input}
                placeholder="Enter age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className={styles.column}>
              <label className={styles.label}>Height</label>
              <input
                type="number"
                className={styles.input}
                placeholder="Enter height"
                name="height"
                value={formData.height}
                onChange={handleChange}
              />
            </div>
          </div>


        <div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label}>District</label>
            <Select
              options={districts}
              name="district"
              value={districts.find(
                (option) => option.value === formData.district
              )}
              onChange={handleChange}
            />
          </div>

          <div className={styles.column}>
            <label className={styles.label}>Educational Qualification</label>
            <Select
              options={options.educationalQualification}
              name="educationalQualification"
              value={options.educationalQualification.find(
                (option) => option.value === formData.educationalQualification
              )}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label}>Employment Status</label>
            <input
              type="text"
              className={styles.input}
              name="employmentStatus"
              placeholder="Current Status"
              value={formData.employmentStatus}
              onChange={handleChange}
            />
          </div>
        </div>

        <h4 className={styles.title}>Preference Expectants (Optional)</h4>
        <div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label}>Height</label>
            <div className={styles.inputGroup}>
              <Select
                options={options.heightPreference}
                name="heightPreference"
                value={options.heightPreference.find(
                  (option) => option.value === formData.heightPreference
                )}
                onChange={handleChange}
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Enter height"
                name="preferredHeightLimit"
                value={formData.preferredHeightLimit}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.column}>
            <label className={styles.label}>Age</label>
            <div className={styles.inputGroup}>
              <Select
                options={options.agePreference}
                name="agePreference"
                value={options.agePreference.find(
                  (option) => option.value === formData.agePreference
                )}
                onChange={handleChange}
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Enter Age"
                name="preferredAgeLimit"
                value={formData.preferredAgeLimit}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row}>
            <div className={styles.column}>
              <label className={styles.label}>Not Referred District</label>
              <Select
                options={filteredDistricts}
                name="notReferredDistricts"
                value={districts.filter((option) =>
                  formData.notReferredDistricts.includes(option.value)
                )}
                onChange={(selectedOptions) =>
                  handleChange(selectedOptions, {
                    name: "notReferredDistricts",
                  })
                }
                isMulti
              />
            </div>
          </div>

          <div className={styles.column}>
            <label className={styles.label}>
              Minimum Educational Qualification
            </label>
            <Select
              options={options.minimumEducationalQualification}
              name="minimumEducationalQualification"
              value={options.minimumEducationalQualification.find(
                (option) =>
                  option.value === formData.minimumEducationalQualification
              )}
              onChange={handleChange}
            />
          </div>
        </div>

        <label className={styles.label}>
          Additional Image: {images.length}/10
        </label>

        {/* Image Upload Section */}
        <div className={styles.imageUploadContainer}>
          <div className={styles.imageInputContainer}>
            <input
              type="file"
              className={styles.fileInput}
              accept="image/jpeg,image/png,image/jpg"
              multiple
              onChange={handleImageChange}
              id="imageInput"
            />
            <label htmlFor="imageInput" className={styles.imageInputLabel}>
              Choose Multiple Images
            </label>
          </div>
          <p>Max 10 images | Accepted: jpg, png, jpeg</p>

          <div className={styles.imagePreviewContainer}>
            {images
              .slice()
              .reverse()
              .map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <img
                    src={`${image}`}
                    alt={`preview-${index}`}
                    className={styles.imageThumbnail}
                  />
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={() => removeImage(images.length - 1 - index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" onClick={prev} className={styles.backButton}>
            Previous
          </button>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerPreferences;
