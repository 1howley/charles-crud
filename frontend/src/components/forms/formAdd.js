import React, { useRef }from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
`;
const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function FormAdd({ onEdit }) {

    const ref = useRef();

    return(
        <FormContainer ref={ref}>
            <InputArea>
                <label>Nome</label>
                
            </InputArea>
        </FormContainer>
    );
};
