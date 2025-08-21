import { Injectable, Type } from "@nestjs/common";
import { Policy } from "./interfaces/policy.interface";
import { PolicyHandler } from "./interfaces/policy-handler.interface";


@Injectable()
export class PolicyHandlerStorage {
    
    private readonly collection = new Map<Type<Policy>, PolicyHandler<Policy>>();

    addHandler<T extends Policy>(policyType: Type<T>, handler: PolicyHandler<T>): void {
        this.collection.set(policyType, handler);
    }
    getHandler<T extends Policy>(policyType: Type<T>): PolicyHandler<T> | undefined {
        if (!this.collection.has(policyType)) {
            throw new Error(`Policy handler for ${policyType.name} not found.`);
        }
        return this.collection.get(policyType) as PolicyHandler<T> | undefined;
    }


}