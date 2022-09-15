import  data from "../Components/mockData/mockData"

const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}


export default pedirDatos;