// List.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayUsers } from './DisplayUsers';
import ListFooter from './ListFooter';
import { setData, addNewUser, clearCacheItem } from '../Store/Slice/UserSlice'; // Import the new action
import UpdatedUser from './UpdateUsers';
import { setCacheItem } from '../Store/Slice/UserSlice';

export function List() {
  const dispatch = useDispatch();
  const cachedUsers = useSelector(state => state.cache['cachedUsers']); // Retrieve cached users from state

  const [page, setPage] = useState(1);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoadingNextPage(true);
        let response;
        if (cachedUsers) {
          // Use cached data if available
          response = { data: cachedUsers };
        } else {
          // Fetch data from API
          
          response = await axios.get("https://fakestoreapi.com/users");
          // Cache the fetched data
          dispatch(setCacheItem({ key: 'cachedUsers', value: response.data }));
        

        console.log("data", response.data)
        dispatch(setData(response.data));
        setPage(page + 1);
      }}catch (error) {
        console.error(error);
      } finally {
        setIsLoadingNextPage(false);
      }
    };

    fetchData();

    // return () => {
    //   alert("Component is unmounted")
    // };
  }, [dispatch]);

  const handleAddNewUser = () => {
    const newUser = {
      name: {
        firstname: 'John', // Replace 'John' with the desired first name
      },
    };
    dispatch(addNewUser(newUser));
    console.log(" New user added")
  };

  const handleClearCachedUsers = () => {
    dispatch(clearCacheItem({ key: 'cachedUsers' }));   };

  return (
    <>
      <DisplayUsers />
      <div style={{ marginBottom: "80px", marginLeft: "80px" }}>
        <button style={{ backgroundColor: "green" }} onClick={() => handleAddNewUser()}>Add New Users</button>
        <button style={{ backgroundColor: "red", marginLeft: "10px" }} onClick={() => handleClearCachedUsers()}>Clear Cached Users</button> {/* Add the button to clear cache */}
        <UpdatedUser />
      </div>
      <div className="ListFooter">
        <ListFooter isLoadingNextPage={isLoadingNextPage} />
      </div>
    </>
  );
}
