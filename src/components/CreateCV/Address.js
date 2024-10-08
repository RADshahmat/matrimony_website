import React, { useState, useEffect } from "react";
import Select from "react-select";
import styles from "../../styles/CreateCvStyle/AddressInfo.module.css";

const AddressInfo = (props) => {
  const [sameAddress, setSameAddress] = useState(false);
  const [formData, setFormData] = useState({
    presentAddress: "",
    country: "",
    citizenship: "",
    residenceStatus: "",
    city: "",
    permanentAddress: "",
    permanentCountry: "",
    permanentCitizenship: "",
    permanentResidenceStatus: "",
    permanentCity: "",
  });

  const countryOptions = [
    { value: "Bangladesh", label: "Bangladesh" },
    // Add more options as needed
  ];

  const citizenshipOptions = [
    { value: "Bangladeshi", label: "Bangladeshi" },
    // Add more options as needed
  ];

  const residenceStatusOptions = [
    { value: "Citizen", label: "Citizen" },
    // Add more options as needed
  ];

  const handleCheckboxChange = () => {
    setSameAddress(!sameAddress);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData({
      ...formData,
      [name]: selectedOption ? selectedOption.value : "",
    });
  };

  useEffect(() => {
    if (sameAddress) {
      setFormData((prevData) => ({
        ...prevData,
        permanentAddress: prevData.presentAddress,
        permanentCountry: prevData.country,
        permanentCitizenship: prevData.citizenship,
        permanentResidenceStatus: prevData.residenceStatus,
        permanentCity: prevData.city,
      }));
    }
  }, [
    sameAddress,
    formData.presentAddress,
    formData.country,
    formData.citizenship,
    formData.residenceStatus,
    formData.city,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        formErrors[key] = "required";
      }
    });

    if (Object.keys(formErrors).length === 0) {
      props.pageFunc(2);
      props.formDataFunc((prevData) => ({
        ...prevData,
        ...formData,
      }));
    }
  };

  const prev = () => {
    props.pageFunc(0);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h5 className={styles.title}>Present Address</h5>
        <div className={styles.inputGroup}>
          <label htmlFor="presentAddress" className={styles.label}>
            Full Address
          </label>
          <input
            type="text"
            className={styles.inputField}
            id="presentAddress"
            placeholder="Enter Present Address"
            value={formData.presentAddress}
            onChange={handleChange}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label htmlFor="country" className={styles.label}>
              Country
            </label>
            <Select
              className={styles.select}
              id="country"
              name="country"
              options={countryOptions}
              value={countryOptions.find(option => option.value === formData.country) || null}
              onChange={handleSelectChange}
            />
          </div>
          <div className={styles.column}>
            <label htmlFor="citizenship" className={styles.label}>
              Citizenship
            </label>
            <Select
              className={styles.select}
              id="citizenship"
              name="citizenship"
              options={citizenshipOptions}
              value={citizenshipOptions.find(option => option.value === formData.citizenship) || null}
              onChange={handleSelectChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label htmlFor="residenceStatus" className={styles.label}>
              Residence Status
            </label>
            <Select
              className={styles.select}
              id="residenceStatus"
              name="residenceStatus"
              options={residenceStatusOptions}
              value={residenceStatusOptions.find(option => option.value === formData.residenceStatus) || null}
              onChange={handleSelectChange}
            />
          </div>
          <div className={styles.column}>
            <label htmlFor="city" className={styles.label}>
              City
            </label>
            <input
              type="text"
              className={styles.inputField}
              id="city"
              placeholder="Enter Your City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <h5 className={styles.title}>Permanent Address</h5>
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            className={styles.checkbox}
            id="sameAddress"
            checked={sameAddress}
            onChange={handleCheckboxChange}
          />
          <label className={styles.checkboxLabel} htmlFor="sameAddress">
            Same As Present Address
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="permanentAddress" className={styles.label}>
            Permanent Address
          </label>
          <input
            type="text"
            className={styles.inputField}
            id="permanentAddress"
            placeholder="Enter Permanent Address"
            value={formData.permanentAddress}
            onChange={handleChange}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label htmlFor="permanentCountry" className={styles.label}>
              Country
            </label>
            <Select
              className={styles.select}
              id="permanentCountry"
              name="permanentCountry"
              options={countryOptions}
              value={countryOptions.find(option => option.value === formData.permanentCountry) || null}
              onChange={handleSelectChange}
            />
          </div>
          <div className={styles.column}>
            <label htmlFor="permanentCitizenship" className={styles.label}>
              Citizenship
            </label>
            <Select
              className={styles.select}
              id="permanentCitizenship"
              name="permanentCitizenship"
              options={citizenshipOptions}
              value={citizenshipOptions.find(option => option.value === formData.permanentCitizenship) || null}
              onChange={handleSelectChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label htmlFor="permanentResidenceStatus" className={styles.label}>
              Residence Status
            </label>
            <Select
              className={styles.select}
              id="permanentResidenceStatus"
              name="permanentResidenceStatus"
              options={residenceStatusOptions}
              value={residenceStatusOptions.find(option => option.value === formData.permanentResidenceStatus) || null}
              onChange={handleSelectChange}
            />
          </div>
          <div className={styles.column}>
            <label htmlFor="permanentCity" className={styles.label}>
              City
            </label>
            <input
              type="text"
              className={styles.inputField}
              id="permanentCity"
              placeholder="Enter Your City"
              value={formData.permanentCity || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" onClick={prev} className={styles.button}>
            Back
          </button>
          <button type="submit" className={styles.button}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressInfo;
