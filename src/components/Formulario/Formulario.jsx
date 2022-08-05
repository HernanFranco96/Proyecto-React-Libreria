import React from 'react';
import './Formulario.css';
import { useForm } from 'react-hook-form';

function Formulario({agregarDatos}) {

    const {register, formState: { errors }, handleSubmit} = useForm();

    return (
        <>
            <form className='row md-6 d-flex flex-column flex-wrap-wrap' onSubmit={handleSubmit(agregarDatos)}>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Ingrese nombre' {...register("nombre", { 
                        required: true,
                        minLength: 3
                    })}/>
                    {errors.nombre?.type === 'required' && <p className='text-dark bg-warning'>El campo nombre es requerido.</p>}
                    {errors.nombre?.type === 'minLength' && <p className='text-dark bg-warning'>Debe tener minimo 3 letras.</p>}
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Ingrese Telefono' {...register("telefono", { 
                        required: true,
                        minLength: 7
                    })}/>
                    {errors.telefono?.type === 'required' && <p className='text-dark bg-warning'>El campo telefono es requerido.</p>}
                    {errors.telefono?.type === 'minLength' && <p className='text-dark bg-warning'>Debe tener minimo 7 digitos.</p>}
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Ingrese email' {...register("email", { 
                        required: true,
                    })}/>
                    {errors.email?.type === 'required' && <p className='text-dark bg-warning'>El campo email es requerido.</p>}
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Repita email' {...register("verificarEmail", { 
                        required: true,
                    })}/>
                    {errors.verificarEmail?.type === 'required' && <p className='text-dark bg-warning'>El campo verificar email es requerido.</p>}
                </div>
                <div className="col-12 mt-5">
                    <button type="submit" className="btn-orden">Generar orden</button>
                </div>
            </form>
        </>
    )
}

export default Formulario;