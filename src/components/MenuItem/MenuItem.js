import React from 'react';
import styles from './MenuItem.module.scss';

const MenuItem = ({title, imageUrl, size}) => {
    
    const largeStyle = size ? styles.large : '';

    return (
        <div className={[styles['menu-item'], largeStyle].join(" ")}>
                <div className={styles['background-image']}
                 style={{ backgroundImage: `url(${imageUrl})`}} />
                <div className={styles['content']}>
                    <h1 className={styles['title']}>{title.toUpperCase()}</h1>
                    <span className={styles['subtitle']}>SHOP NOW</span>
                </div>
        </div>
    )

}

export default MenuItem