import React, {Component} from 'react';
import logo from '../../logo.svg';

class ClassComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            color: 'red',
        };
      
    }


    updateBackgroundColor = () =>           //creo un metodo para cambiar el estado(en este caso el color)
    {   
       this.setState({
           color: 'blue',
       }); 

    };


//este metodo hace una actualizacion de el estado
//por ejemplo, con un boton:




    render(){
        return(
            <div style={{ backgroundColor: this.state.color}}>
                <h3>Class Component</h3>
                <h2>
                    {this.props.nombre} {this.props.apellido}
                    {this.props.edad}
                </h2>

                <img src={logo} className="App-logo" alt="logo" />
                <br />
                <button onClick= {this.updateBackgroundColor}>
                    Cambia de color
                </button>

            </div>

        );
    }
}


export default ClassComponent;





