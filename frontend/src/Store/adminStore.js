import axios from "axios";
import { create } from "zustand";

const useAdminStore = create((set, get)=>({
    adminStats : {user: 0, company: 0, admin: 0},

    fetchAdminStats: async()=>{
        try{
            const res = await  axios.get(`http://localhost:4000/api/user-count`);
            set({adminStats: res.data});
        }catch(err){
            console.error("Error fetching stats", err);
        }
    }
}))

export default useAdminStore;