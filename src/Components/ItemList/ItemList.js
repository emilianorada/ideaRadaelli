import { Item } from "../Item/Item"


export const ItemList = ( {productos} ) => {

    return (
        <div>    
            <h2>Productos</h2>   
            <hr/>
            <div className="row">
                { productos.map( (element) => <Item key={element.id} {...element}/> )}
            </div> 
        </div>
    )
}