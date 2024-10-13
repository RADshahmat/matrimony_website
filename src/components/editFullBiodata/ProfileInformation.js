import React, { useState, useEffect, useRef } from "react";
import FilePicker from "./FilePicker";
import Select from "react-select";
import styles from "../../styles/CreateCvStyle/profileInformation.module.css";

const ProfileInformation = (props) => {
  const [images, setImages] = useState();
  const [errors, setErrors] = useState({});
  const filePickerRef = useRef(null);
  const [localFormData, setLocalFormData] = useState({
    fullName: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    bloodGroup: null,
    gender: null,
    heightFeet: "",
    heightInches: "",
    maritalStatus: null,
    nidNumber: "",
    phoneNumber: "",
    email: "",
    physicalStatus: null,
    religion: null,
    comments: "",
  });

  useEffect(() => {
    if (props.formData) {
      setLocalFormData(props.formData);
      setImages(props.image);
    }
  }, [props.formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption, name) => {
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption ? selectedOption.value : "",
    }));
  };

  // Email validation function
  const validateEmail = (email) => {
    // Simple email regex validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Phone number validation function (optional: adjust regex as needed)
  const validatePhoneNumber = (phoneNumber) => {
    // Example: Allows 10-15 digits
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Image validation
    if (!images) {
      validationErrors.image = "Please upload an image.";
    }

    // Marital Status validation
    if (!localFormData.maritalStatus) {
      validationErrors.maritalStatus = "Please select your marital status.";
    }

    // Email validation
    if (!localFormData.email) {
      validationErrors.email = "Email is required.";
    } else if (!validateEmail(localFormData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    // Phone Number validation
    if (!localFormData.phoneNumber) {
      validationErrors.phoneNumber = "Phone number is required.";
    } else if (!validatePhoneNumber(localFormData.phoneNumber)) {
      validationErrors.phoneNumber = "Please enter a valid phone number.";
    }

    // Additional validations can be added here (e.g., fullName, NID, DOB)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      if (validationErrors.image) {
        filePickerRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    setErrors({});
    props.formDataFunc((prevData) => ({
      ...prevData,
      ...localFormData,
    }));
    props.images(images);
    props.pageFunc(1);
  };

  const options = {
    religion: [
      { value: "Islam", label: "Islam" },
      { value: "Christianity", label: "Christianity" },
      { value: "Hinduism", label: "Hinduism" },
      { value: "Buddhism", label: "Buddhism" },
      { value: "Sikhism", label: "Sikhism" },
      { value: "Judaism", label: "Judaism" },
      { value: "Atheism", label: "Atheism" },
      { value: "Agnosticism", label: "Agnosticism" },
      { value: "Other", label: "Other" },
    ],

    gender: [
      { value: "Female", label: "Female" },
      { value: "Male", label: "Male" },
    ],
    physicalStatus: [
      { value: "Normal", label: "Normal" },
      { value: "Physically Challenged", label: "Physically Challenged" },
    ],

    bloodGroup: [
      { value: "A (+ve) Positive", label: "A (+ve) Positive" },
      { value: "A (-ve) Negative", label: "A (-ve) Negative" },
      { value: "B (+ve) Positive", label: "B (+ve) Positive" },
      { value: "B (-ve) Negative", label: "B (-ve) Negative" },
      { value: "AB (+ve) Positive", label: "AB (+ve) Positive" },
      { value: "AB (-ve) Negative", label: "AB (-ve) Negative" },
      { value: "O (+ve) Positive", label: "O (+ve) Positive" },
      { value: "O (-ve) Negative", label: "O (-ve) Negative" },
    ],

    maritalStatus: [
      { value: "married", label: "Married" },
      { value: "unmarried", label: "Unmarried" },
      { value: "divorced", label: "Divorced" },
      { value: "separated", label: "Separated" },
      { value: "widow", label: "Widow" },
    ],
  };

  console.log("image in info", images);
  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div ref={filePickerRef}>
          <FilePicker images={images} setImageFunc={setImages} />
          {errors.image && (
            <small className={styles.errorMessage}>{errors.image}</small>
          )}
        </div>

        <h2 className={styles.title}>Personal Information*</h2>

        {/* Full Name */}
        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.label}>
            Your Full Name
          </label>
          <input
            type="text"
            className={`${styles.input} ${
              errors.fullName ? styles.inputError : ""
            }`}
            id="fullName"
            name="fullName"
            placeholder="Enter Your Full Name"
            value={localFormData.fullName || ""}
            onChange={handleChange}
            required
          />
          {errors.fullName && (
            <small className={styles.errorMessage}>{errors.fullName}</small>
          )}
        </div>

        <div className={styles.formGroupContainer}>
          {/* Religion */}
          <div className={styles.formGroup}>
            <label htmlFor="religion" className={styles.label}>
              Religion
            </label>
            <Select
              id="religion"
              name="religion"
              options={options.religion}
              className={`${styles.select} ${
                errors.religion ? styles.inputError : ""
              }`}
              value={
                options.religion.find(
                  (option) => option.value === localFormData.religion
                ) || null
              }
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "religion")
              }
              isSearchable={false}
              required
            />
            {errors.religion && (
              <small className={styles.errorMessage}>{errors.religion}</small>
            )}
          </div>

          {/* Gender */}
          <div className={styles.formGroup}>
            <label htmlFor="gender" className={styles.label}>
              Gender
            </label>
            <Select
              id="gender"
              name="gender"
              options={options.gender}
              className={`${styles.select} ${
                errors.gender ? styles.inputError : ""
              }`}
              value={
                options.gender.find(
                  (option) => option.value === localFormData.gender
                ) || null
              }
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "gender")
              }
              isSearchable={false}
              required
            />
            {errors.gender && (
              <small className={styles.errorMessage}>{errors.gender}</small>
            )}
          </div>
        </div>

        <div className={styles.formGroupContainer}>
          {/* Height */}
          <div className={styles.formGroup}>
            <label htmlFor="heightFeet" className={styles.label}>
              Height
            </label>
            <div className={styles.dobGroup}>
              <input
                type="text"
                className={`${styles.input} ${
                  errors.heightFeet ? styles.inputError : ""
                }`}
                id="heightFeet"
                name="heightFeet"
                placeholder="Feet"
                value={localFormData.heightFeet || ""}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className={`${styles.input} ${
                  errors.heightInches ? styles.inputError : ""
                }`}
                id="heightInches"
                name="heightInches"
                placeholder="Inches"
                value={localFormData.heightInches || ""}
                onChange={handleChange}
                required
              />
            </div>
            {errors.heightFeet && (
              <small className={styles.errorMessage}>{errors.heightFeet}</small>
            )}
            {errors.heightInches && (
              <small className={styles.errorMessage}>
                {errors.heightInches}
              </small>
            )}
          </div>

          {/* Physical Status */}
          <div className={styles.formGroup}>
            <label htmlFor="physicalStatus" className={styles.label}>
              Physical Status
            </label>
            <Select
              id="physicalStatus"
              name="physicalStatus"
              options={options.physicalStatus}
              className={`${styles.select} ${
                errors.physicalStatus ? styles.inputError : ""
              }`}
              value={
                options.physicalStatus.find(
                  (option) => option.value === localFormData.physicalStatus
                ) || null
              }
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "physicalStatus")
              }
              isSearchable={false}
              required
            />
            {errors.physicalStatus && (
              <small className={styles.errorMessage}>
                {errors.physicalStatus}
              </small>
            )}
          </div>
        </div>

        <div className={styles.formGroupContainer}>
          {/* Phone Number */}
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>
              Phone Number
            </label>
            <input
              type="tel"
              className={`${styles.input} ${
                errors.phoneNumber ? styles.inputError : ""
              }`}
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={localFormData.phoneNumber || ""}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && (
              <small className={styles.errorMessage}>
                {errors.phoneNumber}
              </small>
            )}
          </div>

          {/* Email Address */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              className={`${styles.input} ${
                errors.email ? styles.inputError : ""
              }`}
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={localFormData.email || ""}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <small className={styles.errorMessage}>{errors.email}</small>
            )}
          </div>

          {/* Blood Group */}
          <div className={styles.formGroup}>
            <label htmlFor="bloodGroup" className={styles.label}>
              Blood Group
            </label>
            <Select
              id="bloodGroup"
              name="bloodGroup"
              options={options.bloodGroup}
              className={`${styles.select} ${
                errors.bloodGroup ? styles.inputError : ""
              }`}
              value={
                options.bloodGroup.find(
                  (option) => option.value === localFormData.bloodGroup
                ) || null
              }
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "bloodGroup")
              }
              isSearchable={false}
              required
            />
            {errors.bloodGroup && (
              <small className={styles.errorMessage}>{errors.bloodGroup}</small>
            )}
          </div>
        </div>

        {/* Marital Status */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Marital Status</label>
          <div className={styles.radioGroup}>
            {options.maritalStatus.map((status) => (
              <div key={status.value} className={styles.radioContainer}>
                <input
                  type="radio"
                  className={styles.radioInput}
                  id={status.value}
                  name="maritalStatus" // Ensure the name is properly set
                  checked={localFormData.maritalStatus === status.value} // Checked logic
                  onChange={() =>
                    handleSelectChange({ value: status.value }, "maritalStatus")
                  }
                  autoComplete="off"
                />

                <label className={styles.radioLabel} htmlFor={status.value}>
                  {status.label}
                </label>
              </div>
            ))}
          </div>
          {errors.maritalStatus && (
            <small className={styles.errorMessage}>
              {errors.maritalStatus}
            </small>
          )}
        </div>

        <div className={styles.formGroupContainer}>
          {/* Date Of Birth */}
          <div className={styles.formGroup}>
            <label htmlFor="dob" className={styles.label}>
              Date Of Birth
            </label>
            <div className={styles.dobGroup}>
              <input
                type="text"
                className={`${styles.input} ${
                  errors.dobDay ? styles.inputError : ""
                }`}
                id="dobDay"
                name="dobDay"
                placeholder="Day"
                value={localFormData.dobDay || ""}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className={`${styles.input} ${
                  errors.dobMonth ? styles.inputError : ""
                }`}
                id="dobMonth"
                name="dobMonth"
                placeholder="Month"
                value={localFormData.dobMonth || ""}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className={`${styles.input} ${
                  errors.dobYear ? styles.inputError : ""
                }`}
                id="dobYear"
                name="dobYear"
                placeholder="Year"
                value={localFormData.dobYear || ""}
                onChange={handleChange}
                required
              />
            </div>
            {errors.dob && (
              <small className={styles.errorMessage}>{errors.dob}</small>
            )}
          </div>

          {/* NID Number */}
          <div className={styles.formGroup}>
            <label htmlFor="nidNumber" className={styles.label}>
              NID Number
            </label>
            <input
              type="text"
              className={`${styles.input} ${
                errors.nidNumber ? styles.inputError : ""
              }`}
              id="nidNumber"
              name="nidNumber"
              placeholder="Enter Your NID Number"
              value={localFormData.nidNumber || ""}
              onChange={handleChange}
              required
            />
            {errors.nidNumber && (
              <small className={styles.errorMessage}>{errors.nidNumber}</small>
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="comments" className={styles.label}>
            Comments
          </label>
          <textarea
            className={`${styles.textarea} ${
              errors.comments ? styles.inputError : ""
            }`}
            id="comments"
            name="comments"
            placeholder="Your Comments"
            value={localFormData.comments}
            onChange={handleChange}
            required
          />
          {errors.comments && (
            <small className={styles.errorMessage}>{errors.comments}</small>
          )}
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileInformation;
