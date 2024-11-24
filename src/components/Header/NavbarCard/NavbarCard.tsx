import React, { useEffect, useState } from "react";
import styles from "./NavbarCard.module.css";
import NavbarCardContent from "./NavbarCardContent/NavbarCardContent";
import { NavbarData } from "../Types";
const NavbarCard = (subNavbarData: any) => {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (subNavbarData.subNavbarData.length > 0) {
      setActiveTab(subNavbarData.subNavbarData[0].id);
    }
  }, [subNavbarData]);

  const listItem = subNavbarData.subNavbarData.map((item: NavbarData) => {
    return <div id={item.id}>{item.text}</div>;
  });

  const cardContent = subNavbarData.subNavbarData.map((item: NavbarData) => {
    return (
      <div style={{ display: activeTab == item.id ? "block" : "none" }}>
        <NavbarCardContent
          title={item.text}
          desc={item.desc}
          images={[item.image]}
        />
      </div>
    );
  });
  const tabClickHandler = (e: any) => {
    if (e.target.id){
        setActiveTab(e.target.id);
    }
   
  };
  return (
    <div className={styles.navbarCard}>
      <div
        className={styles.navbarCardList}
        onClick={(e) => tabClickHandler(e)}
      >
        {listItem}
      </div>
      <div className={styles.navbarCardContainer}>
        {cardContent}
      </div>
    </div>
  );
};

export default NavbarCard;
