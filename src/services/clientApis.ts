import { createUserRoute, testListRoute, testRoute, userDetailsRoute, verifyEmailRoute, verifyOtpRoute } from "../utils/api.routes";
import apis from "./api";

export const emailVerify_api = async(data: any) => {
    const response = await apis.userInstance.post(`${verifyEmailRoute}`, JSON.stringify(data));
    return response;
}

export const otpVerify_api = async(data: any) => {
    const response = await apis.userInstance.post(`${verifyOtpRoute}`, JSON.stringify(data));
    return response;
}

export const createAccount_api = async(data: any) => {
    const response = await apis.userInstance.post(`${createUserRoute}`, JSON.stringify(data));
    return response;
}

export const getAllTests_api = async() => {
    const response = await apis.userInstance.get(`${testListRoute}${testRoute}`);
    return response;
}

export const createTest_api = async(data: any) => {
    const response = await apis.userInstance.post(`${testRoute}`, JSON.stringify(data));
    return response;
}

export const getProfileData_api = async(data: any) => {
    const response = await apis.userInstance.post(`${userDetailsRoute}`, JSON.stringify({email:data}));
    return response;
}

