import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DeviceServiceac {
    SERVER_URL = 'http://192.168.43.186:8080/ac';
    // SERVER_URL = 'http://127.0.0.1:8080/ac';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) { }
    // 该函数用于开关空调
    toggleAC(status: number) {
        const obj = {
            status: status
        };
        console.log("用于开关空调")
        console.log(status)
        console.log(obj);
        return this.httpClient.put(this.SERVER_URL, obj, this.httpOptions);
    }
    // 该函数用于获取空调的状态 
    getAC() {
        console.log("获取空调的状态")
        return this.httpClient.get(this.SERVER_URL);
    }
}