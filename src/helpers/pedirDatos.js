import  data from "../Components/mockData/mockData"

const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(data);
            reject('Hubo un error');
        }, 500)
    })
}


export default pedirDatos;