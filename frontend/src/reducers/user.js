import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
	name: 'user',
	initialState: {
		username: null,
		accessToken: null,
		email: null,
		userId: null,
		error: null,
	},
	reducers: {
		setUserId: (store, action) => {
			store.userId = action.payload
		},
		setUsername: (store, action) => {
			store.username = action.payload;
		},
		setAccessToken: (store, action) => {
			store.accessToken = action.payload;
		},
		setEmail: (store, action) => {
			store.email = action.payload;
		},
		setPreviousStatus: (store) => {
			const actionArraylength = store.actions.length;
			if (actionArraylength > 0) {
				store.status = store.actions[actionArraylength - 1];
				store.actions.splice(actionArraylength - 1, 1);
			}
		},
		setError: (store, action) => {
			store.error = action.payload;
		}
	}
});

export default user;