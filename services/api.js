import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://jgmpehprafebfycqdtyz.supabase.co/rest/v1',
    headers: {
        apikey: process.env.REACT_APP_SUPABASE_API_KEY,
        authorization: `Bearer ${process.env.REACT_APP_SUPABASE_AUTH_TOKEN}`
    }
})