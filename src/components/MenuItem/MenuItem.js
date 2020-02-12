import React from 'react';
import styles from './MenuItem.module.scss';
import  { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => {
    
    const largeStyle = size ? styles.large : '';
    console.log(history, match);
    return (
        <div 
        className={[styles['menu-item'], largeStyle].join(" ")}
        onClick={() => history.push(`${match.path}${linkUrl}`, size)}
        >
                <div className={styles['background-image']}
                 style={{ backgroundImage: `url(${imageUrl})`}} />
                <div className={styles['content']} >
                    <h1 className={styles['title']}>{title.toUpperCase()}</h1>
                    <span className={styles['subtitle']}>SHOP NOW</span>
                </div>
        </div>
    )

}

export default withRouter(MenuItem)