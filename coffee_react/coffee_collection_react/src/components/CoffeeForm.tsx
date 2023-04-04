import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch,useStore } from 'react-redux';

import Input from "./Input";
import { server_calls } from '../api/server';
import { chooseCoffeename, chooseCountry, chooseVarietal, chooseRoaster, chooseState, chooseFlavornotes } from '../redux/slices/RootSlice';

interface CoffeeFormProps{
    id?: string[],
    data?: {},
}

const CoffeeForm = (props: CoffeeFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${props.id}`),
        console.log(data);
        console.log(errors);
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated ${ props.id } ${ data }`)
            // setTimeout(()=> {window.location.reload()}, 5000);
            event.target.reset()
        } else {
            dispatch(chooseCoffeename(data.coffeename));
            dispatch(chooseCountry(data.country));
            dispatch(chooseVarietal(data.varietal));
            dispatch(chooseRoaster(data.roaster));
            dispatch(chooseState(data.state));
            dispatch(chooseFlavornotes(data.flavor_notes));

            server_calls.create(store.getState())
            // setTimeout( () => {window.location.reload()}, 5000);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder='Coffee Name' {...register('coffeename', {required: false, maxLength: 120})} />
        <Input placeholder='Country' {...register('country', {required: false, maxLength: 80})} />
        <Input placeholder='Varietal' {...register('varietal', {required: false, maxLength: 60})} />
        <Input placeholder='Roaster' {...register('roaster', {required: false, maxLength: 120})} />
        <Input placeholder='State' {...register('state', {required: false, maxLength: 120})} />
        <Input placeholder='Flavor Notes' {...register('flavor_notes', {required: false})} />
        <button className='submitButton'>
            <input type='submit' />
        </button>
        </form>
    );
}

export default CoffeeForm