import React, { useState } from 'react';


const LinksForm = () => {

    const initialStateValues={
        url: '',
        nombre: '',
        descripcion:'',
     }

    
     const [values, setvalues]=useState(initialStateValues);
    
    const handleInputChange=(e)=>{
        const {name, value}=e.target;
        setvalues({...values,[name]: value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
    }

    return (
        <form className="card card-body">
            <div className="form-group input-group">
                <input type="text" className="form-control" placeholder="http://www.url.com" name="url" />
            </div>

            <div className="form-group input-group">
                <input type="text" className="form-control" placeholder="Nombre de la URL" name="nombre" />
            </div>

            <div className="form-group input-group">
                <textarea name="description" rows="3" className="form-control" placeholder="Describa la url" />
            </div>

            <button className="btn btn-primary btn-block">
                Enviar
             </button>

        </form>

    )

}

export default LinksForm;