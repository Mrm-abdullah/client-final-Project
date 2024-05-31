import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-project-m12-7beclvv4z-mrm-abdullahs-projects.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;