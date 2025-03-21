import './Test.css'

const Test = () => {

    const estilo={
        prueba:{
        color:'red',
        backgroundColor:'yellow',
        fontSize:'20px'}
    }

    
    return ( 
        <div className='contenedor'>
            <h1 className='titulo'>Test</h1>
            <p className='parrafo'>Este es un componente de prueba</p>
        </div>
     );
}
 
export default Test;