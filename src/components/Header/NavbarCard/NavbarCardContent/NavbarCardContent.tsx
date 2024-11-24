import React from 'react'
import styles from './NavbarCardContent.module.css'
import exp from 'constants'

interface NavbarCardContentProps {
    title:string,
    desc:string,
    images:[string]
}
 const NavbarCardContent = ({title='',desc='',images=['']}:NavbarCardContentProps) => {
  return (
    <div className={styles.navbarCardContent}>
        <div className={styles.textContent}>
            <div className={styles.title}>
            <h4>{title}</h4>
            </div>
            <div className={styles.desc}>
                {desc}
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
