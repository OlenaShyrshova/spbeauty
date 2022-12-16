import styled from "styled-components";

const Input = styled.input`
    outline: none;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    
    color: #0F172A;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ?
(<div></div>) :
(<div className='caption'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-1'>
        
            {Title}
            <Input className='ps-3 pt-2 pb-2' defaultValue={def} ></Input>
            
        </div>
    );
}

export default TitledTextInput;
