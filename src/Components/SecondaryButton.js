import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth;
    const Button = styled.div`
    
        border: 1px solid #64748B;
        border-radius: 24px;
            min-width: ${minWidth};
        color: #64748B;
        &:hover {
            border: 0px solid;
            background #F4F6FA;  
        }
        &:active {
            background: #E9EFF4;
        }
    `;
    return (
        <Clickable >
            <Button className='px-3 py-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;