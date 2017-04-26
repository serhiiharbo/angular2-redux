import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    setItem(key: string, value: Object): void {
        //localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string): any {
        return null//JSON.parse(localStorage.getItem(key));
    }
}
