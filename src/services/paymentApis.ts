import { stripeUserAddRoute, createSetupIntentRoute, saveIntentRoute } from "../utils/api.routes";
import apis from "./api";

export const create_stripeuser_id_api = async(data: any) => {
    const response = await apis.paymentInstance.post(`${stripeUserAddRoute}`, JSON.stringify(data))
    return response;
}

export const user_setup_intent_api = async(data: any) => {
    const response = await apis.paymentInstance.post(`${createSetupIntentRoute}`, JSON.stringify(data))
    return response;
}

export const save_setup_intent_api = async(data: any) => {
    const response = await apis.paymentInstance.post(`${saveIntentRoute}`, JSON.stringify(data))
    return response;
}

