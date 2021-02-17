import { Service } from "./service";

export interface ConsultantData{
    name: string;
    job: string;
    title: string;
    image: null;
    services: Service[];
    likes: number;
}