import React, { useRef, useState }from "react";
import styled from "styled-components";
import { Search, SlidersHorizontal, Plus } from "lucide-react";

const FormContainer = styled.form`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    border-radius: 5px;
    height: 20px;
`;
const InputArea = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
`;
const Input = styled.input`
    background-color: white;
    width: 800px;  
    border-radius: 40px 0 0 40px;
    border: none;
    outline: none;
    padding: 15px;
`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    background-color: white;
    width: 300px;  
    border-radius: 40px;
    border: none;
    margin-right: 15px;
    cursor: pointer;
    &:hover ${this} {
        transition: ease-in-out .2s;
        background-color: #7DC2F4;
    }
`;
const MiniButton = styled.button`
    padding: 10px;
    background-color: white;
    border: none;   
    border-radius: 0 40px 40px 0;
    margin-right: 15px;
    cursor: pointer;
`;

export default function FormSearch({ onSearch }) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return(
        <FormContainer onSubmit={handleSubmit}>
            <InputArea>
                <Input name="name" placeholder="Consulte pelo ID ou nome do cliente" value={searchTerm} onChange={handleInputChange}></Input>
                <MiniButton type="submit"><Search/></MiniButton>
                <Button>FILTRO<SlidersHorizontal /></Button>            
                <Button>ADICIONAR<Plus /></Button>            
            </InputArea>
        </FormContainer>
    );
};
