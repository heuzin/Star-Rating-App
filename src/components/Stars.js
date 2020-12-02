import { FiStar } from 'react-icons/fi';

const Star = ({ selected = false, onSelect}) => (
    <FiStar color={selected ? 'red' : 'grey'} onClick={onSelect}/>
)

export default Star