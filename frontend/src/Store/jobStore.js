import { create } from "zustand";
import axios from "axios";

const useJobStore = create((set, get) => ({
  jobs: [],
  loading: false,
  isFetch: false,

  // fetch jobs

  fetchjobs: async (token, role) => {
    const { jobs, isFetch } = get();
    if (isFetch && jobs.length > 0) {
      console.log("Using cached data");
      return;
    }
    set({ loading: true });
    try {
      const API = (token && role !== "admin" )? "/api/jobpostdata" : "/api/jobdata";
      const res = await axios(`http://localhost:4000${API}`, {
        ...(token && role !== "admin"  &&{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      });
      set({
        jobs: res.data,
        isFetch: true,
      });
    } catch (err) {
      console.log("Error in Fetching Jobs, err");
    }
  },
  clearJobs: () => set({ jobs: [], isFetch: false }),
}));

export default useJobStore;
