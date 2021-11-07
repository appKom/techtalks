import axios from "axios";
import { companyType } from "../types/api";
export const DEAFULT_URL = "http://localhost:8000/api/v1";
export const COMAPANY_URL = DEAFULT_URL + "/companies/";

export const getCompanies = async (): Promise<companyType[] | undefined> => {
    const response = await axios
    .get<companyType[]>(COMAPANY_URL)
    .catch(() => Promise.resolve(undefined));
    if (response && response.status === 200) {
		return response.data as companyType[];
	}
	else return undefined;
}