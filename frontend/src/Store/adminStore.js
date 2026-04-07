import axios from "axios";
import { create } from "zustand";

const adminStore = create((set, get)=>({
    adminStats : {user: 0, company: 0, admin: 0},

    fetchAdminStats: async()=>{
        try{
            consts = await  axios.get('http://localhost')
        }catch(err){

        }
    }
}))