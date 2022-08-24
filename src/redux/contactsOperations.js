import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
   'contacts/fetchContacts',
   async () => {
      try {
         const { data } = await axios.get('/contacts');
         return data;
      } catch (error) {
         console.log(error.message);
      }
   }
);

export const addContact = createAsyncThunk(
   'contacts/addContact',
   async newContact => {
      try {
         const { data } = await axios.post('/contacts', newContact);
         alert(`Contact is create!`);
         return data;
      } catch (error) {
         console.log(error.message);
      }
   }
);

export const deleteContact = createAsyncThunk(
   'contacts/deleteContact',
   async contactId => {
      try {
         await axios.delete(`/contacts/${contactId}`);
         return contactId;
      } catch (error) {
         console.log(error.message);
      }
   }
);

export const changeContact = createAsyncThunk(
    'contacts/changeContact',
    async ({id, name, number}) => {
        try {
            const { data } = await axios.patch(`/contacts/${id}`, {
                name,
                number,
            });
            alert('Contact was changed!');
            return data;
        } catch (error) {
            console.log(error.message);
        }
    }
)
