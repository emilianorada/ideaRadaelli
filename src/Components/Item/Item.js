const  Item = ({name, price, image}) => {


    return(

            <div>
                <img src={image} alt={name} width={'200px'} />
                <h2>{name}</h2>
                <h3>{price}</h3>
            </div>

        );

};



export default Item;