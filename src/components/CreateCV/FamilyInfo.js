import React, { useState } from "react";
import Select from 'react-select';
import styles from "../../styles/CreateCvStyle/FamilyInformationForm.module.css";

const FamilyInformationForm = (props) => {
  const [brotherCount, setBrotherCount] = useState(0);
  const [sisterCount, setSisterCount] = useState(0);
  const [formData, setFormData] = useState({
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    brotherFields: [],
    sisterFields: []
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value ? value.value : ''
    }));
  };

  const handleBrotherChange = (index, e) => {
    const { name, value } = e.target;
    const newBrotherFields = [...formData.brotherFields];
    newBrotherFields[index] = {
      ...newBrotherFields[index],
      [name]: value
    };
    setFormData((prevState) => ({
      ...prevState,
      brotherFields: newBrotherFields
    }));
  };

  const handleSisterChange = (index, e) => {
    const { name, value } = e.target;
    const newSisterFields = [...formData.sisterFields];
    newSisterFields[index] = {
      ...newSisterFields[index],
      [name]: value
    };
    setFormData((prevState) => ({
      ...prevState,
      sisterFields: newSisterFields
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.formDataFunc((prevData) => ({
      ...prevData,
      ...formData
    }));
    props.pageFunc(4);
  };

  const renderBrotherFields = () => {
    let brotherFields = [];
    for (let i = 0; i < brotherCount; i++) {
      brotherFields.push(
        <div className={styles.fieldRow} key={`brother-${i}`}>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>
              {i === 0
                ? "Your Elder Brother Name"
                : `Your ${i + 1}th Brother Name`}
            </label>
            <input
              type="text"
              name="brotherName"
              className={styles.textField}
              placeholder={`Enter ${
                i === 0 ? "Elder" : `${i + 1}th`
              } Brother's Name`}
              onChange={(e) => handleBrotherChange(i, e)}
            />
          </div>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>Brother Occupation</label>
            <Select
              name="brotherOccupation"
              className={styles.selectField}
              options={[
                { value: 'business', label: 'Business' },
                { value: 'governmentJob', label: 'Government Job' },
                { value: 'selfEmployed', label: 'Self-employed' },
                { value: 'student', label: 'Student' }
              ]}
              onChange={(selectedOption) => handleBrotherChange(i, { target: { name: 'brotherOccupation', value: selectedOption.value } })}
              value={formData.brotherFields[i] ? { value: formData.brotherFields[i].brotherOccupation, label: formData.brotherFields[i].brotherOccupation } : null}
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
              placeholder={`Enter ${
                i === 0 ? "Elder" : `${i + 1}`
              } Sister's Name`}
              onChange={(e) => handleSisterChange(i, e)}
            />
          </div>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>Sister Occupation</label>
            <Select
              name="sisterOccupation"
              className={styles.selectField}
              options={[
                { value: 'housewife', label: 'Housewife' },
                { value: 'governmentJob', label: 'Government Job' },
                { value: 'selfEmployed', label: 'Self-employed' },
                { value: 'student', label: 'Student' }
              ]}
              onChange={(selectedOption) => handleSisterChange(i, { target: { name: 'sisterOccupation', value: selectedOption.value } })}
              value={formData.sisterFields[i] ? { value: formData.sisterFields[i].sisterOccupation, label: formData.sisterFields[i].sisterOccupation } : null}
            />
          </div>
        </div>
      );
    }
    return sisterFields;
  };

  const prev = () => {
    props.pageFunc(2);
  };

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
            />
          </div>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>Father’s Occupation</label>
            <Select
              id="fatherOccupation"
              className={styles.selectField}
              options={[
                { value: 'governmentJob', label: 'Government Job' },
                { value: 'business', label: 'Business' },
                { value: 'selfEmployed', label: 'Self-employed' },
                { value: 'retired', label: 'Retired' }
              ]}
              onChange={(selectedOption) => handleSelectChange('fatherOccupation', selectedOption)}
              value={formData.fatherOccupation ? { value: formData.fatherOccupation, label: formData.fatherOccupation } : null}
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
            />
          </div>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>Mother’s Occupation</label>
            <Select
              id="motherOccupation"
              className={styles.selectField}
              options={[
                { value: 'housewife', label: 'Housewife' },
                { value: 'governmentJob', label: 'Government Job' },
                { value: 'business', label: 'Business' },
                { value: 'selfEmployed', label: 'Self-employed' }
              ]}
              onChange={(selectedOption) => handleSelectChange('motherOccupation', selectedOption)}
              value={formData.motherOccupation ? { value: formData.motherOccupation, label: formData.motherOccupation } : null}
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>How Many Brothers do you have?</label>
            <Select
              className={styles.selectField}
              options={[
                { value: 0, label: '0' },
                { value: 1, label: '1' },
                { value: 2, label: '2' },
                { value: 3, label: '3' },
                { value: 4, label: '4' }
              ]}
              value={{ value: brotherCount, label: brotherCount.toString() }}
              onChange={(selectedOption) => {
                const count = selectedOption ? selectedOption.value : 0;
                setBrotherCount(count);
                setFormData((prevState) => ({
                  ...prevState,
                  brotherFields: Array(count).fill({})
                }));
              }}
            />
          </div>
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.fieldColumn}>
            <label className={styles.fieldLabel}>How Many Sisters do you have?</label>
            <Select
              className={styles.selectField}
              options={[
                { value: 0, label: '0' },
                { value: 1, label: '1' },
                { value: 2, label: '2' },
                { value: 3, label: '3' },
                { value: 4, label: '4' }
              ]}
              value={{ value: sisterCount, label: sisterCount.toString() }}
              onChange={(selectedOption) => {
                const count = selectedOption ? selectedOption.value : 0;
                setSisterCount(count);
                setFormData((prevState) => ({
                  ...prevState,
                  sisterFields: Array(count).fill({})
                }));
              }}
            />
          </div>
        </div>

        {renderBrotherFields()}
        {renderSisterFields()}

        <div className={styles.buttonGroup}>
          <button type="button" onClick={prev} className={styles.button}>Back</button>
          <button type="submit" className={styles.button}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default FamilyInformationForm;
