import React, { useState, useEffect } from "react";
import Select from "react-select";
import styles from "../../styles/CreateCvStyle/AddressInfo.module.css";

const AddressInfo = (props) => {
  const [sameAddress, setSameAddress] = useState(false);
  const[navigation,setNavigation]=useState(1);
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

  useEffect(() => {
    if (props.formData) {
      const {
        presentAddress = "",
        country = "",
        citizenship = "",
        residenceStatus = "",
        city = "",
        permanentAddress = "",
        permanentCountry = "",
        permanentCitizenship = "",
        permanentResidenceStatus = "",
        permanentCity = ""
      } = props.formData;
  
      setFormData((prevData) => ({
        ...prevData,
        presentAddress,
        country,
        citizenship,
        residenceStatus,
        city,
        permanentAddress,
        permanentCountry,
        permanentCitizenship,
        permanentResidenceStatus,
        permanentCity,
      }));
    }
  }, [props.formData]);
  

  const countryOptions = [
    { value: "Bangladesh", label: "Bangladesh" },

  ];

  const citizenshipOptions = [
    { value: "Bangladeshi", label: "Bangladeshi" },
  ];

  const residenceStatusOptions = [
    { value: "Citizen", label: "Citizen" },
  ];

  const handleCheckboxChange = () => {
    setSameAddress(!sameAddress);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption ? selectedOption.value : "",
    }));
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

    if (Object.keys(formErrors).length === 0) {
      if(navigation==1){
        props.pageFunc(2);
      }else{
        props.pageFunc(0);
      }
      
      //alert("Form submitted successfully!");
      props.formDataFunc((prevData) => ({
        ...prevData,
        ...formData,
      }));
    }
  };


  console.log('this is formData', formData); 
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
            required={navigation == 1}
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
              required={navigation == 1}
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
              required={navigation == 1}
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
              required={navigation == 1}
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
              required={navigation == 1}
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
            required={navigation == 1}
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
              required={navigation == 1}
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
              required={navigation == 1}
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
              required={navigation == 1}
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
              required={navigation == 1}
            />
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" onClick={()=>{{setNavigation(0)}}} className={styles.button}>
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