import { PermissionType } from "../authorization/permission.types";

export interface ActiveUserData {

    email:string;
    sub:number;
    role: string;
    permissions: PermissionType[];
}