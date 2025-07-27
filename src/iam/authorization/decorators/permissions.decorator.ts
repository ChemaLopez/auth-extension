
import { SetMetadata } from "@nestjs/common";
import { PermissionType} from "../permission.types";

export const PERMISSION_KEY = 'permissions';

export const Permissions = (...permissions: PermissionType[]) => SetMetadata(PERMISSION_KEY, permissions);