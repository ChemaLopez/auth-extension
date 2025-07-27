import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../enums/role.enums";
import { Permission, PermissionType } from "src/iam/authorization/permission.types";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    //role or permissions
    @Column({ enum: Role, default: 'regular'})
    role: Role;


    @Column({ enum: Permission, default: [], type: 'json' })
    permissions: PermissionType[];
}
