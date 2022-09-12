import Item from '../Item/Item';


const ItemList = ({ lista }) => {


    return(
        <div>
            {lista.map((product) => (
                <div key={product.id}>
                    <Item 
                        name={product.name}
                        price={product.price}
                        image= {product.image}
                    />
                </div>
            ))}
        </div>
    );
};


export default ItemList;