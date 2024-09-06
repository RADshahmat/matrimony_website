import React, { useState } from "react";
import FilePicker from "./FilePicker";
import Select from "react-select";
import styles from "../../styles/CreateCvStyle/profileInformation.module.css";

const ProfileInformation = (props) => {
  const [images, setImages] = useState();
  const [maritalStatus, setMaritalStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleMaritalStatusChange = (selectedOption) => {
    setMaritalStatus(selectedOption);
    setErrors((prevErrors) => ({ ...prevErrors, maritalStatus: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    const formData = new FormData(e.target);

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      e.target.querySelectorAll("input, textarea").forEach((input) => {
        if (input.type === "file") {
          return;
        }
        formData.append(input.name, formData.get(input.name));
      });

      formData.append("maritalStatus", maritalStatus ? maritalStatus.value : '');

      props.pageFunc(1);
      alert("Form submitted successfully!");
      props.formDataFunc((prevData) => ({
        ...prevData,
        ...Object.fromEntries(formData),
      }));
      props.images(images);
    }
  };

  const options = {
    religion: [
      { value: "", label: "Choose..." },
      { value: "Islam", label: "Islam" }
    ],
    gender: [
      { value: "", label: "Choose..." },
      { value: "Male", label: "Male" }
    ],
    physicalStatus: [
      { value: "Normal", label: "Normal" },
      { value: "Physically Challenged", label: "Physically Challenged" }
    ],
    bloodGroup: [
      { value: "", label: "Choose..." },
      { value: "A (+ve) Positive", label: "A (+ve) Positive" }
    ],
    maritalStatus: [
      { value: "married", label: "Married" },
      { value: "unmarried", label: "Unmarried" },
      { value: "divorced", label: "Divorced" },
      { value: "separated", label: "Separated" },
      { value: "widow", label: "Widow" }
    ]
  };

  return (
    <>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit}
        noValidate
      >
        <FilePicker setImageFunc={setImages} />

        {/* Full Name */}
        <h2 className={styles.title}>Personal Information*</h2>
        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.label}>
            Your Full Name
          </label>
          <input
            type="text"
            className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
            id="fullName"
            name="fullName"
            placeholder="Enter Your Full Name"
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
              className={`${styles.select} ${errors.religion ? styles.inputError : ""}`}
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
              className={`${styles.select} ${errors.gender ? styles.inputError : ""}`}
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
                className={`${styles.input} ${errors.heightFeet ? styles.inputError : ""}`}
                id="heightFeet"
                name="heightFeet"
                placeholder="Feet"
              />
              <input
                type="text"
                className={`${styles.input} ${errors.heightInches ? styles.inputError : ""}`}
                id="heightInches"
                name="heightInches"
                placeholder="Inches"
              />
            </div>
            {errors.heightFeet && (
              <small className={styles.errorMessage}>{errors.heightFeet}</small>
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
              className={`${styles.select} ${errors.physicalStatus ? styles.inputError : ""}`}
            />
            {errors.physicalStatus && (
              <small className={styles.errorMessage}>{errors.physicalStatus}</small>
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
              className={`${styles.input} ${errors.phoneNumber ? styles.inputError : ""}`}
              id="phoneNumber"
              name="phoneNumber"
            />
            {errors.phoneNumber && (
              <small className={styles.errorMessage}>{errors.phoneNumber}</small>
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
              className={`${styles.select} ${errors.bloodGroup ? styles.inputError : ""}`}
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
                  name="maritalStatus"
                  checked={maritalStatus && maritalStatus.value === status.value}
                  onChange={() => handleMaritalStatusChange(status)}
                  autoComplete="off"
                />
                <label className={styles.radioLabel} htmlFor={status.value}>
                  {status.label}
                </label>
              </div>
            ))}
          </div>
          {errors.maritalStatus && (
            <small className={styles.errorMessage}>{errors.maritalStatus}</small>
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
                className={`${styles.input} ${errors.dobDay ? styles.inputError : ""}`}
                id="dobDay"
                name="dobDay"
                placeholder="DD"
              />
              <input
                type="text"
                className={`${styles.input} ${errors.dobMonth ? styles.inputError : ""}`}
                id="dobMonth"
                name="dobMonth"
                placeholder="MM"
              />
              <input
                type="text"
                className={`${styles.input} ${errors.dobYear ? styles.inputError : ""}`}
                id="dobYear"
                name="dobYear"
                placeholder="YYYY"
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
              className={`${styles.input} ${errors.nidNumber ? styles.inputError : ""}`}
              id="nidNumber"
              name="nidNumber"
              placeholder="NID Number"
            />
            {errors.nidNumber && (
              <small className={styles.errorMessage}>{errors.nidNumber}</small>
            )}
          </div>
        </div>

        {/* Comments */}
        <div className={styles.formGroup}>
          <label htmlFor="comments" className={styles.label}>
            Comments
          </label>
          <textarea
            className={styles.input}
            id="comments"
            name="comments"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          ></textarea>
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileInformation;
