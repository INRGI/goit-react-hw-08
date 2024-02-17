import { useDispatch, useSelector } from 'react-redux';
import { Input } from './Filter.styled';
import { setContactsFilter } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter)

    const onFilterChange = e => {
        dispatch(setContactsFilter(e.target.value))
    };

    return (
            <Input type="text" value={filter} onChange={onFilterChange} placeholder="Find contacts by name"/>
    );
};


export default Filter;