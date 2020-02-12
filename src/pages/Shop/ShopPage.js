import React, { useState } from 'react';
import SHOP_DATA from '../Shop/ShopData/ShopData';
import CollectionsPreview from '../../components/CollectionsPreview/CollectionsPreview';
const ShopPage = (props) => {

    const [collection, setCollection] = useState(SHOP_DATA);

    return (
        <div>
        <h1>Collections</h1>
        {collection.map(({id, ...otherCollectionItems}) => {
          return <CollectionsPreview key={id} {...otherCollectionItems} />
        })}
        </div> 
    )

}
        


export default ShopPage;