import React from 'react';
import "../../styles/Contacto.css";

const FormularioContacto = () => {
  return (
    <div className='formulario'>                            
                        <div className="well well-sm">               
                            <form id="formulario" className="form-horizontal" >                  						
                                        <br />
                                        <div className="form-group">                            
                                            <div className="col-md-10">
                                                <input id="nombre" type="text" placeholder="Nombre" className="form-control" required  />
                                            </div>
                                        </div>						
                                        <br />
                                        <div className="form-group">
                                            <div className="col-md-10">
                                                <input id="apellido" type="text" placeholder="Apellido" className="form-control" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <div className="col-md-10">
                                                <input id="email" type="email" placeholder="E-mail" className="form-control" />
                                            </div>
                                        </div>
                                        <br />	
                                        <div className="form-group">
                                            <div className="col-md-10">
                                                <input id="telefono" type="text" placeholder="Telefono" className="form-control" required />
                                                <hr />
                                            </div>                            
                                        </div>							
                                        <div className="form-group">                            
                                                <div className="col-md-10">
                                                    <select className="form-select" aria-label="Default select example"  id="seleccionado" >
                                                        <option selected>Motivo de su consulta</option>
                                                        <option value="Productos">Servicios de Internet</option>
                                                        <option value="Servicios">Productos</option>
                                                        <option value="Soporte Tecnico">Soporte Tecnico</option>
                                                    </select> 
                                                    <hr />
                                                </div>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <div className="col-md-10">
                                                <textarea className="form-control" id="comentarios" placeholder="Comentarios" rows="7"></textarea>
                                            </div>
                                        
                                        </div>	
                                        <br />
                                        <div className="form-group">
                                            <div id="resultado" className="col-md-10 pt-4"></div>
                                            <div id="estado" className="col-md-10 pt-4"></div>
                                        </div>                          
                                            <div className="col-md-10 text-center">
                                                <button id="enviarDatos" type="button" className="btn btn-outline-success btn-lg  ">Enviar </button>
                                                <button id="resetear" type="reset" className="btn btn-outline-info btn-lg">Limpiar datos</button>
                                            </div>
                                            </form>
                                    </div>                 
                        </div>
  )
}

export default FormularioContacto