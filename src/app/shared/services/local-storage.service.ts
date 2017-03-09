import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}
