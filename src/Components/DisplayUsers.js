import React from 'react'

import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { Delete } from '@mui/icons-material';

import { deleteUser } from '../Store/Slice/UserSlice';


export const DisplayUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.data);
    const generateUniqueKey = (id) => `user_${id}`; // Function to generate unique key
    const deleteSingleUser = (id) => {

        dispatch(deleteUser(id))

    }

    return (
        <>
            <ListWrapper>
                <ul>
                    {users && users.map((item) => (
                        <ListItem  key={generateUniqueKey(item.id)}>
                            <FirstName>First Name: </FirstName>
                            {item.name ? item.name.firstname : "N/A"}
                           
                             <RedDeleteIcon  onClick={() => deleteSingleUser(item.id)}/>

                            
                        </ListItem>
                    ))}
                </ul>


            </ListWrapper>
            
        </>

    )
}
const RedDeleteIcon = styled(Delete)`
  color: red;
  margin-left: 10px; 

`;

const ListWrapper = styled.div`
    position: relative;
    min-height: 100vh;
    
`;

const ListItem = styled.li`
    padding: 20px;
    display: flex; /* Align items horizontally */
    align-items: center; /* Center items vertically */
  
   
`;

const FirstName = styled.span`
    font-weight: bold;
    margin-right: 10px;
`;
