import  data from "../Components/mockData/mockData"

const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(data);
            reject('Hubo un error');
        }, 2000)
    })
}


export default pedirDatos;