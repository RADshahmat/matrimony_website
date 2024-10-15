import React, { useState, useEffect } from 'react';
import styles from '../../styles/CreateCvStyle/education.module.css';

const EducationProfessionForm = (props) => {
  const[navigation,setNavigation]=useState(1);
  const [formData, setFormData] = useState({
    highestEducationDegree: '',
    highestEducationDepartment: '',
    highestEducationInstitution: '',
    secondEducationDegree: '',
    secondEducationDepartment: '',
    secondEducationInstitution: '',
    thirdEducationDegree: '',
    thirdEducationDepartment: '',
    thirdEducationInstitution: '',
    employedIn: '',
    currentProfessionTitle: '',
    currentProfessionDepartment: '',
    currentProfessionCompany: '',
    monthlyIncome: '',
    otherIncomeSource: '',
  });

  useEffect(() => {
    if (props.formData) {
      const {
        highestEducationDegree = "",
        highestEducationDepartment = "",
        highestEducationInstitution = "",
        secondEducationDegree = "",
        secondEducationDepartment = "",
        secondEducationInstitution = "",
        thirdEducationDegree = "",
        thirdEducationDepartment = "",
        thirdEducationInstitution = "",
        employedIn = "",
        currentProfessionTitle = "",
        currentProfessionDepartment = "",
        currentProfessionCompany = "",
        monthlyIncome = "",
        otherIncomeSource = ""
      } = props.formData;

      setFormData((prevData) => ({
        ...prevData,
        highestEducationDegree,
        highestEducationDepartment,
        highestEducationInstitution,
        secondEducationDegree,
        secondEducationDepartment,
        secondEducationInstitution,
        thirdEducationDegree,
        thirdEducationDepartment,
        thirdEducationInstitution,
        employedIn,
        currentProfessionTitle,
        currentProfessionDepartment,
        currentProfessionCompany,
        monthlyIncome,
        otherIncomeSource
      }));
    }
  }, [props.formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //alert('Form submitted successfully!');
    props.formDataFunc((prevData) => ({
      ...prevData,
      ...formData,
    }));
    if(navigation==1){
      props.pageFunc(3);
    }else{
      props.pageFunc(1);
    }
  };


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h5 className={styles.title}>Educational Background*</h5>

        {/* Highest Education */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.formLabel}>Highest Education</label>
            <div className={styles.inlineFields}>
              <input
                type="text"
                id="highestEducationDegree"
                className={`${styles.formControl} ${styles.smallField}`}
                placeholder="Degree"
                value={formData.highestEducationDegree}
                onChange={handleChange}
              />
              <input
                type="text"
                id="highestEducationDepartment"
                className={`${styles.formControl} ${styles.smallField}`}
                placeholder="Department"
                value={formData.highestEducationDepartment}
                onChange={handleChange}
              />
              <input
                type="text"
                id="highestEducationInstitution"
                className={`${styles.formControl} ${styles.largeField}`}
                placeholder="Institution Name"
                value={formData.highestEducationInstitution}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Second Education */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.formLabel}>Second Highest Education</label>
            <div className={styles.inlineFields}>
              <input
                type="text"
                id="secondEducationDegree"
                className={`${styles.formControl} ${styles.smallField}`}
                placeholder="Degree"
                value={formData.secondEducationDegree}
                onChange={handleChange}
              />
              <input
                type="text"
                id="secondEducationDepartment"
                className={`${styles.formControl} ${styles.smallField}`}
                placeholder="Department"
                value={formData.secondEducationDepartment}
                onChange={handleChange}
              />
              <input
                type="text"
                id="secondEducationInstitution"
                className={`${styles.formControl} ${styles.largeField}`}
                placeholder="Institution Name"
                value={formData.secondEducationInstitution}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

         {/* Profession */}
         <h5 className={styles.title}>Profession*</h5>
        <div className={styles.row}>
          <div className={styles.col}>
          <label className={styles.formLabel}>Employed In*</label>
            <div className={styles.btnGroup}>
              <input
                type="radio"
                className={styles.btnCheck}
                name="employedIn"
                id="government"
                value="Government"
                onChange={handleChange}
              />
              <label className={styles.btnLabel} htmlFor="government">
                Government
              </label>

              <input
                type="radio"
                className={styles.btnCheck}
                name="employedIn"
                id="defense"
                value="Defense"
                onChange={handleChange}
              />
              <label className={styles.btnLabel} htmlFor="defense">
                Defense
              </label>

              <input
                type="radio"
                className={styles.btnCheck}
                name="employedIn"
                id="private"
                value="Private"
                onChange={handleChange}
              />
              <label className={styles.btnLabel} htmlFor="private">
                Private
              </label>

              <input
                type="radio"
                className={styles.btnCheck}
                name="employedIn"
                id="business"
                value="Business"
                onChange={handleChange}
              />
              <label className={styles.btnLabel} htmlFor="business">
                Business
              </label>

              <input
                type="radio"
                className={styles.btnCheck}
                name="employedIn"
                id="selfEmployed"
                value="Self-employed"
                onChange={handleChange}
              />
              <label className={styles.btnLabel} htmlFor="selfEmployed">
                Self-employed
              </label>

              <input
                type="radio"
                className={styles.btnCheck}
                name="employedIn"
                id="student"
                value="Student"
                onChange={handleChange}
              />
              <label className={styles.btnLabel} htmlFor="student">
                Student
              </label>
            </div>
          </div>
        </div>

        {/* Current Profession */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.formLabel}>Current profession*</label>
            <div className={styles.inlineFields}>
              <input
                type="text"
                id="currentProfessionTitle"
                className={styles.formControl}
                placeholder="Job Title"
                value={formData.currentProfessionTitle}
                onChange={handleChange}
              />
              <input
                type="text"
                id="currentProfessionDepartment"
                className={styles.formControl}
                placeholder="Department"
                value={formData.currentProfessionDepartment}
                onChange={handleChange}
              />
              <input
                type="text"
                id="currentProfessionCompany"
                className={styles.formControl}
                placeholder="Company Name"
                value={formData.currentProfessionCompany}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Monthly Income and Other Income Source */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.formLabel}>Monthly Income</label>
            <input
              type="text"
              id="monthlyIncome"
              className={styles.formControl}
              placeholder="2,40,000"
              value={formData.monthlyIncome}
              onChange={handleChange}
            />
          </div>
          <div className={styles.col}>
            <label className={styles.formLabel}>Income From Any Other Source</label>
            <input
              type="text"
              id="otherIncomeSource"
              className={styles.formControl}
              placeholder="If Any"
              value={formData.otherIncomeSource}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" onClick={()=>{{setNavigation(0)}}} className={styles.backButton}>
            Back
          </button>
          <button type="submit" className={styles.submitButton}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationProfessionForm;