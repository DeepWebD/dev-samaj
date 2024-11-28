import React from "react";

import Principal from "../../assets/image/Principal.png";

import styles from "./AboutDevSamaj.module.css";
import { Container } from "react-bootstrap";
const AboutDevSamaj = () => {
  const readMoreAboutMe = () => {
    console.log("readMoreAboutMe");
  };
  return (
    <Container>
      <div className={styles.about}>
        <div className={styles.aboutImg}>
          <img src={Principal} alt="" />
        </div>
        <div className={styles.aboutContent}>
          <h2 className={styles.heading}>About Dev Samaj</h2>
          <h3>Acquire Knowledge and Form Character!</h3>
          <p>

          Founded in 1887, the society of Dev Samaj (Registered under the Societies Registration Act 1860) has been in the service of education since 1889 when it started its first school at Lahore. This was followed by a Boys school at Moga (1889) and a Girls school at Ferozepore (1900). Education from Nursery to M.A. and M.Ed. 
          </p>
          <button className={styles.btn} onClick={() => readMoreAboutMe()}>
            Read More
          </button>
        </div>
      </div>
    </Container>
  );
};

export default AboutDevSamaj;
