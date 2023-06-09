import { arrLength } from "./array-length";

type CallbackFn = (elem: any) => boolean;
type SomeFn = (arr: any[], cb: CallbackFn) => boolean;

export const some: SomeFn = (arr: any[], cb: CallbackFn): boolean => {
    const arrayLength: number = arrLength(arr);
    let i: number = 0;
    while(i < arrayLength) {
        if(cb(arr[i])) {
            return true;
        }
        i++;
    }
    return false;
};