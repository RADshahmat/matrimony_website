import React, { useState, useEffect } from "react";
import Select from "react-select";
import styles from "../../styles/CreateCvStyle/FamilyInformationForm.module.css";

const FamilyInformationForm = (props) => {
  const [brotherCount, setBrotherCount] = useState(0);
  const [sisterCount, setSisterCount] = useState(0);
  const[navigation,setNavigation]=useState(1);
  const [formData, setFormData] = useState({
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    brotherFields: [],
    sisterFields: [],
  });
  useEffect(() => {
    if (props.formData) {
      const {
        fatherName = "",
        fatherOccupation = "",
        motherName = "",
        motherOccupation = "",
        brotherFields = [],
        sisterFields = [],
      } = props.formData;

      setFormData({
        fatherName,
        fatherOccupation,
        motherName,
        motherOccupation,
        brotherFields,
        sisterFields,
      });
      //console.log(brotherFields,'dekha jak')
      setBrotherCount(brotherFields[0]==null?0:brotherFields.length);
      setSisterCount(sisterFields[0]==null?0:sisterFields.length);
    }
  }, [props.formData]);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value ? value.value : "",
    }));
  };

  const handleBrotherChange = (index, e) => {
    const { name, value } = e.target;
    const newBrotherFields = [...formData.brotherFields];
    newBrotherFields[index] = {
      ...newBrotherFields[index],
      [name]: value,
    };
    setFormData((prevState) => ({
      ...prevState,
      brotherFields: newBrotherFields,
    }));
  };

  const handleSisterChange = (index, e) => {
    const { name, value } = e.target;
    const newSisterFields = [...formData.sisterFields];
    newSisterFields[index] = {
      ...newSisterFields[index],
      [name]: value,
    };
    setFormData((prevState) => ({
      ...prevState,
      sisterFields: newSisterFields,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //alert("Form submitted successfully!");
    props.formDataFunc((prevData) => ({
      ...prevData,
      ...formData,
    }));
    if(navigation==1){
      props.pageFunc(4);
    }else{
      props.pageFunc(2);
    }
  };

  const renderBrotherFields = () => {
    let brotherFields = [];
    for (let i = 0; i < brotherCount; i++) {
      const brotherField = formData.brotherFields[i] || {}; // Check if it's null or undefined
      brotherFields.push(
        <div className={styles.fieldRow} key={`brother-${i}`}>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>
              {i === 0 ? "Your Elder Brother Name" : `Your ${i + 1}th Brother Name`}
            </label>
            <input
              type="text"
              name="brotherName"
              className={styles.textField}
              value={brotherField.brotherName || ""} // Default to empty string if null
              placeholder={`Enter ${i === 0 ? "Elder" : `${i + 1}th`} Brother's Name`}
              onChange={(e) => handleBrotherChange(i, e)}
            />
          </div>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>Brother Occupation</label>
            <Select
              isSearchable={false}
              name="brotherOccupation"
              className={styles.selectField}
              options={[
                { value: "Business", label: "Business" },
                { value: "Government Job", label: "Government Job" },
                { value: "Self-employed", label: "Self-employed" },
                { value: "Student", label: "Student" },
              ]}
              onChange={(selectedOption) =>
                handleBrotherChange(i, {
                  target: {
                    name: "brotherOccupation",
                    value: selectedOption ? selectedOption.value : "",
                  },
                })
              }
              value={
                brotherField.brotherOccupation
                  ? { value: brotherField.brotherOccupation, label: brotherField.brotherOccupation }
                  : null
              }
            />
          </div>
        </div>
      );
    }
    return brotherFields;
  };
  

  const renderSisterFields = () => {
    let sisterFields = [];
    for (let i = 0; i < sisterCount; i++) {
      const sisterField = formData.sisterFields[i] || {}; 
      sisterFields.push(
        <div className={styles.fieldRow} key={`sister-${i}`}>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>
              {i === 0 ? "Your Elder Sister Name" : `Your ${i + 1} Sister Name`}
            </label>
            <input
              type="text"
              name="sisterName"
              className={styles.textField}
              value={sisterField.sisterName || ""} 
              placeholder={`Enter ${i === 0 ? "Elder" : `${i + 1}`} Sister's Name`}
              onChange={(e) => handleSisterChange(i, e)}
            />
          </div>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>Sister Occupation</label>
            <Select
              isSearchable={false}
              name="sisterOccupation"
              className={styles.selectField}
              options={[
                { value: "Housewife", label: "Housewife" },
                { value: "Government Job", label: "Government Job" },
                { value: "Self-employed", label: "Self-employed" },
                { value: "Student", label: "Student" },
              ]}
              onChange={(selectedOption) =>
                handleSisterChange(i, {
                  target: {
                    name: "sisterOccupation",
                    value: selectedOption ? selectedOption.value : "",
                  },
                })
              }
              value={
                sisterField.sisterOccupation
                  ? { value: sisterField.sisterOccupation, label: sisterField.sisterOccupation }
                  : null
              }
            />
          </div>
        </div>
      );
    }
    return sisterFields;
  };
  

//console.log(props.formData,brotherCount,'e ki vai')
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h5 className={styles.title}>Family Information*</h5>

        <div className={styles.fieldRow}>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>Father’s Name</label>
            <input
              type="text"
              id="fatherName"
              className={styles.textField}
              placeholder="Enter Your Father’s Name here"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>Father’s Occupation</label>
            <Select
              isSearchable={false}
              id="fatherOccupation"
              className={styles.selectField}
              options={[
                { value: "Government Job", label: "Government Job" },
                { value: "Business", label: "Business" },
                { value: "Self-employed", label: "Self-employed" },
                { value: "Retired", label: "Retired" },
              ]}
              onChange={(selectedOption) =>
                handleSelectChange("fatherOccupation", selectedOption)
              }
              value={
                formData.fatherOccupation
                  ? {
                      value: formData.fatherOccupation,
                      label: formData.fatherOccupation,
                    }
                  : null
              }
              required
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>Mother’s Name</label>
            <input
              type="text"
              id="motherName"
              className={styles.textField}
              placeholder="Enter Your Mother’s Name here"
              value={formData.motherName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>Mother’s Occupation</label>
            <Select
              isSearchable={false}
              id="motherOccupation"
              className={styles.selectField}
              options={[
                { value: "Housewife", label: "Housewife" },
                { value: "Government Job", label: "Government Job" },
                { value: "Business", label: "Business" },
                { value: "Self-employed", label: "Self-employed" },
              ]}
              onChange={(selectedOption) =>
                handleSelectChange("motherOccupation", selectedOption)
              }
              value={
                formData.motherOccupation
                  ? {
                      value: formData.motherOccupation,
                      label: formData.motherOccupation,
                    }
                  : null
              }
              required
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>
              How Many Brothers do you have?
            </label>
            <Select
              isSearchable={false}
              className={styles.selectField}
              options={[
                { value: 0, label: "0" },
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
              ]}
              value={{
                value: formData.brotherFields[0]? brotherCount : 0,
                label: brotherCount.toString(),
              }}
            
              onChange={(selectedOption) => {
                const count = selectedOption ? selectedOption.value : 0;
                setBrotherCount(count);
                setFormData((prevState) => ({
                  ...prevState,
                  brotherFields: Array(count).fill({}),
                }));
              }}
              required
            />
          </div>
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>
              How Many Sisters do you have?
            </label>
            <Select
              isSearchable={false}
              className={styles.selectField}
              options={[
                { value: 0, label: "0" },
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
              ]}
              value={{ value: sisterCount, label: sisterCount.toString() }}
              onChange={(selectedOption) => {
                const count = selectedOption ? selectedOption.value : 0;
                setSisterCount(count);
                setFormData((prevState) => ({
                  ...prevState,
                  sisterFields: Array(count).fill({}),
                }));
              }}
              required
            />
          </div>
        </div>

        {renderBrotherFields()}
        {renderSisterFields()}

        <div className={styles.buttonGroup}>
          <button type="submit" onClick={()=>{{setNavigation(0)}}} className={styles.button}>
            Back
          </button>
          <button type="submit" className={styles.button}>
            Next
          </button>
        </div>
      </form>
      <br />
      <br />
    </div>
  );
};

export default FamilyInformationForm;