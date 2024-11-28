import React from 'react'
import styles from './NavbarCardContent.module.css'
import { Button } from 'react-bootstrap'


interface NavbarCardContentProps {
    id:string,
    title:string,
    desc:string,
    images:[string]
}
 const NavbarCardContent = ({id='',title='',desc='',images=['']}:NavbarCardContentProps) => {
    const handleButtonClick = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    }
  return (
    <div className={styles.navbarCardContent}>
        <div className={styles.textContent}>
            <div className={styles.title}>
            <h4>{title}</h4>
            </div>
            <div className={styles.desc}>
                {desc}
            </div>
            <div>
            <Button  className={styles.customButton} onClick={() => handleButtonClick(id)} >See More</Button>
            {/* <a href={`#${id}`} className={styles.customButton}  >See more</a> */}
               {/* {id==='about'?<a href='#aboutUs' className={styles.customButton}  >See more</a>:<a className={styles.customButton}  href='#contact'>See more</a>}
                <Button  className={styles.customButton} onClick={() => handleButtonClick('about')} >See More</Button> */}
            </div>
        </div>
        <div className={styles.imageContent}>
            {images.map((image,index) => {
                return <img height='200px' width='200px' src={image} key={index} alt="img"/>
            })}
        </div>
       </div>
  )
}

export default NavbarCardContent
