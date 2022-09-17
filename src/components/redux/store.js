import { configureStore } from '@reduxjs/toolkit'
import reducer from './filterSlice'
import { contactsApi } from './contactsRTK'

export const store = configureStore({
    reducer: {
        filter: reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware),
})