import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../Store/Slice/UserSlice';
import { useState, useEffect } from 'react';

const UpdatedUser = () => {
    const users = useSelector((state) => state.users.data);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');


    const generateUniqueKey = (id) => `user_${id}_${Date.now()}`; // Function to generate unique key


    const handleUpdate = (event) => {
        event.preventDefault();
        const userData = { name };
        dispatch(updateUser(userId, userData));
    };

    return (
        <>
            <h2>Update User</h2>
            <form onSubmit={handleUpdate}>
                <label>Select User ID:</label>
                <select onChange={(event) => setUserId(event.target.value)}>
                    {users.map((user) => (
                        <option value={user.id} key={generateUniqueKey(user.id)}>
                            {user.name.firstname}
                        </option>
                    ))}
                </select>
                <br />
                <label>Enter New Name:</label>
                <input
                    key={userId} // Set key based only on the userId
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <br />
                <button type="submit">Update User</button>
            </form>
        </>
    );
};

export default UpdatedUser;
