import React from 'react'

const ItemListContainer = ({greeting}) => {
    
    const customStyles = {
        color: "blue", 
        fontSize: "2rem", 
        width: "100vw", 
        height:"80vh", 
        textAlign: 'center', 
        display: 'flex', 
        justifyContent: "center", 
        alignItems: 'center'
    };

    return (
        <div style={customStyles}>
            {greeting}
        </div>
    )

}

export default ItemListContainer
