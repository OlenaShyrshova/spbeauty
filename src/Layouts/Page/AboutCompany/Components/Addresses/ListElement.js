import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';



function ListElement(props) {
    return (
        <div className='d-flex flex-colum align-items-center align-self-stretch gap-2 col'>
            <div className='flex-grow-1 py-2'>{props.children}</div>
            <IconOnlyButton icon={<EditIcon/>}/>
            <IconOnlyButton icon={<RemoveIcon/>}/>
        
        </div>
    );
}

export default ListElement;