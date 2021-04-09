import { useDispatch } from 'react-redux';
import { addActivity } from '../redux/actions/actions';
import { useState } from 'react'

function AddActivity ({id}){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const cName = (e) => {
        setName(e.target.value);
    }
    const submitActibity = (e) => {
        e.preventDefault();
        dispatch(addActivity(id, name));
        setName('');
    }
    return (
        <form onSubmit = {submitActibity} >
            <input value = {name} onChange = {cName}></input>
            <button type = "submit">추가</button>
        </form>
    )
}
export default AddActivity; 