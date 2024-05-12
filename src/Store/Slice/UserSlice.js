import {createSlice} from '@reduxjs/toolkit'

const userSlice= createSlice({

    name:"userSlice",
    initialState: {
        data: [], // Initialize data as an empty array
      },
    reducers:{
        setData: (state, action) => {
            if (Array.isArray(action.payload)) {
              state.data.push(...action.payload);
            }
            console.log("data from action is:" ,action.payload)
          },
          addNewUser :(state,action)=>{

            state.data.push(action.payload);
            console.log("new user added from action is:" ,action.payload)

          },
          deleteUser: (state, action) => {
            // Filter out the deleted user from the state
            state.data = state.data.filter(user => user.id !== action.payload);
          },
          updateUser: (state, action) => {
            const { id, data } = action.payload;
            console.log("user Updated", action.payload);
          
            // Check if state.data is defined and is an array
            return {
              ...state,
              users: state.users ? state.users.map(user =>
                user.id === id ? { ...user, ...data } : user
              ) : []
            };
            
        }


        
        
          
          
          
       


    }
});




const cacheSlice = createSlice({
  name: 'cache',
  initialState: {},
  reducers: {
    setCacheItem(state, action) {
      const { key, value } = action.payload;
      localStorage.setItem(key, JSON.stringify(value));
      state[key] = value;
    },
    clearCacheItem(state, action) {
      console.log(action.payload)
      const { key } = action.payload;
      localStorage.removeItem(key);
      delete state[key];
    },
  },
});

export const {
  setData,
  addNewUser,
  deleteUser,
  updateUser
} = userSlice.actions;

export const {
  setCacheItem,
  clearCacheItem
} = cacheSlice.actions;

export const userReducer = userSlice.reducer;
export const cacheReducer = cacheSlice.reducer;
