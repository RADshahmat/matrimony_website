import React from "react";
import MatrimonialForm from "../components/CreateCV/MatrimonialForm";
import Header from "../components/header";
import '../styles/MatrimonialForm.css'

function CreateCV() {
  return (
    <div className="createcv">
      <Header />
      <div className='main-content'>
        <div className="CVpagecontainer">
            <h1 className="pagetitle">Create a Bio-data</h1>
              <div className="CVdescription">
                  <p>
                    Marriage means two individual men and women, with similar minds or similar types of families desire to connect & create a lovable family. Initially, Family structure and perceptions are measured by Bio-Data which is tough for individuals who have never experienced preparing a CV. Butterfly Matrimonial helps you to prepare a complete Bio-Data.
                  </p>
                  <p className="boldText">
                    Create your biodata for free with one tap download.
                  </p>
              </div>
      
        </div>
      <MatrimonialForm />
      </div>
    </div>
  );
}

export default CreateCV;
