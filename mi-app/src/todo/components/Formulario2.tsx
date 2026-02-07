import { useForm } from '../hooks/useForm'

interface FormData {
    postal: string,
    ciudad: string
}

export const Formulario2 = () => {

    const { postal, ciudad, formulario, handleChange } = useForm<FormData>({
        postal: 'ABC',
        ciudad: 'Medellin'
    });

  return (
    <form autoComplete='off'>
        <div className="mb-3">
            <label className="form-label">Ciudad:</label>
            <input type="text" 
                    className='form-control'
                    name='postal'
                    value={ postal }
                    onChange={handleChange}/>
        </div>

        <div className="mb-3">
            <label className="form-label">Ciudad:</label>
            <input type="text" 
                    className='form-control'
                    name='ciudad'
                    value={ ciudad }
                    onChange={handleChange}/>

        </div>

        <pre>{JSON.stringify(formulario)} </pre>
    </form>
  )
}
