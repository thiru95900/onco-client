import axios from "axios";
import URLs from "../config/config.json";

const instance = axios.create({
    baseURL: `${URLs.BASE_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    }
});

const adminInstance = axios.create({
    baseURL: `${URLs.BASE_URL}/api/admin`,
    headers: {
        "Content-Type": "application/json",
    }
});

const userInstance = axios.create({
    baseURL: `${URLs.BASE_URL}/api/user`,
    headers: {
        "Content-Type": "application/json",
    }
});

const paymentInstance = axios.create({
    baseURL: `${URLs.BASE_URL}/payment`,
    headers: {
        "Content-Type": "application/json",
    }
});

const Locationinstance = axios.create({
    baseURL: `https://api.zippopotam.us`,
    headers: {
        "Content-Type": "application/json",
    }
});

const apis = {
    instance,
    adminInstance,
    userInstance,
    paymentInstance,
    Locationinstance
}

export default apis;