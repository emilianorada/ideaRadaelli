import React from 'react';

const FormularioContacto = () => {
  return (
    <div class="col-md-7">                            
                        <div class="well well-sm">               
                            <form id="formulario" class="form-horizontal" >                  						
                                        <br />
                                        <div class="form-group">                            
                                            <div class="col-md-8">
                                                <input id="nombre" type="text" placeholder="Nombre" class="form-control" required  />
                                            </div>
                                        </div>						
                                        <br />
                                        <div class="form-group">
                                            <div class="col-md-8">
                                                <input id="apellido" type="text" placeholder="Apellido" class="form-control" />
                                            </div>
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <div class="col-md-8">
                                                <input id="email" type="email" placeholder="E-mail" class="form-control" />
                                            </div>
                                        </div>
                                        <br />	
                                        <div class="form-group">
                                            <div class="col-md-8">
                                                <input id="telefono" type="text" placeholder="Telefono" class="form-control" required />
                                                <hr />
                                            </div>                            
                                        </div>							
                                        <div class="form-group">                            
                                                <div class="col-md-8">
                                                    <select class="form-select" aria-label="Default select example"  id="seleccionado" >
                                                        <option selected>Motivo de su consulta</option>
                                                        <option value="Productos">Servicios de Internet</option>
                                                        <option value="Servicios">Productos</option>
                                                        <option value="Soporte Tecnico">Soporte Tecnico</option>
                                                    </select> 
                                                    <hr />
                                                </div>
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <div class="col-md-8">
                                                <textarea class="form-control" id="comentarios" placeholder="Comentarios" rows="7"></textarea>
                                            </div>
                                        
                                        </div>	
                                        <br />
                                        <div class="form-group">
                                            <div id="resultado" class="col-md-8 pt-4"></div>
                                            <div id="estado" class="col-md-8 pt-4"></div>
                                        </div>                          
                                            <div class="col-md-8 text-center">
                                                <button id="enviarDatos" type="button" class="btn btn-outline-success btn-lg  ">Enviar </button>
                                                <button id="resetear" type="reset" class="btn btn-outline-info btn-lg">Limpiar datos</button>
                                            </div>
                                            </form>
                                    </div>                 
                        </div>
  )
}

export default FormularioContacto