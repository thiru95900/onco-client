import { locationRoute } from "../utils/api.routes";
import apis from "./api";

export const get_location_by_zip_api = async(data: any) => {
    console.log('location data',data);
    
    const response = await apis.Locationinstance.post(`${locationRoute}`, JSON.stringify(data))
    return response;
}