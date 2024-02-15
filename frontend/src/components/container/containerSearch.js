import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormSearch from "../forms/formSearch.js";
import { Edit, Trash, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import axios from "axios";

const Box = styled.div`
    width: 1650px;
    height: 750px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #D9D9D9;
    box-shadow:  18px 18px 36px #989898,
                -18px -18px 36px #ffffff;
    color: black;
`;

const ContainerShow = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    color: black;
`;
const Row = styled.div`
    display: flex;
    gap: 5px;
    margin: 10px;
`;

const Rname = styled.div`
    background-color: white;
    height: 45px;
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Rid = styled.div`
    background-color: white;
    height: 45px;
    width: 60px;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Rvalue = styled.div`
    background-color: white;
    height: 45px;
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Rdate = styled.div`
    background-color: white;
    height: 45px;
    width: 360px;
    border-radius: 0 40px 40px 0;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Ricon = styled.button`
    border-radius: 40px;
    background-color: white;
    height: 45px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    &:hover ${this} {
        transition: ease-in-out .2s;
        background-color: #7DC2F4;
    }
    cursor: pointer;
    border: none;
`;

const RiconTrash = styled.button`
    border-radius: 40px;
    background-color: white;
    height: 45px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    &:hover ${this} {
        transition: ease-in-out .2s;
        background-color: red;
    }
    cursor: pointer;
    border: none;
`;

const Button = styled.button`
    border-radius: 40px;
    background-color: white;
    height: 45px;
    width: 60px;
    background-color: white;
    border: none;
    &:hover ${this} {
        transition: ease-in-out .2s;
        background-color: #7DC2F4;
    }
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Footer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
    align-items: center;
`;
const H3 = styled.h3`
    color: gray;
    margin-left: 89%;
`;

export default function ContainerSearch() {
    
    const [index, setIndex] = useState([0, 6]);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getUsers();
    }, [searchTerm]);

    const getUsers = async () => {
        try {
            const res = await axios.get(`http://localhost:8800?search=${searchTerm}`);
            setUsers(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };


    const handleClickDown = () => {

        if (index.at(1) < users.length) {
            setIndex([index.at(0) + 6, index.at(1) + 6])
        }
    };

    const handleClickUp = () => {

        if (index.at(0) >= 6) {
            setIndex([index.at(0) - 6, index.at(1) - 6])
        }
    };

    const handleDelete = async (id) => {
        await axios.delete("http://localhost:8800/" + id)
        .then(({ data }) => {
            const newArray = users.filter((user) => user.id !== id);

            setUsers(newArray);

            console.log(data)
        })
        .catch(({ data }) => console.log(data));
    };
    
    return(
        <Box>
            <FormSearch onSearch={handleSearch}/>  

            <ContainerShow>
                    {   users.slice(index.at(0), index.at(1)).map((item, i) => (
                        <Row key={i}>
                            <Rid>{ item.id }</Rid><Rname>{ item.nome }</Rname><Rvalue>R${ item.price }</Rvalue><Rdate>{ item.pay_date }</Rdate><Ricon><Edit/></Ricon><RiconTrash><Trash onClick={() => handleDelete(item.id)}/></RiconTrash>
                        </Row>
                    ))             
                    }
                <Footer>
                    <H3>{users.length} Resultados</H3>
                    {
                        (users.length >= 6) ? (
                            <>
                            <Button onClick={handleClickUp}><ArrowUpCircle /></Button>
                            <Button onClick={handleClickDown}><ArrowDownCircle /></Button>
                            </>
                        ) : null
                    }
                </Footer>
            </ContainerShow>
        </Box>
    );
};
