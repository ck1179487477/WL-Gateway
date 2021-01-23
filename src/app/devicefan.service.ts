import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DeviceServicefan {
    SERVER_URL = 'http://192.168.43.186:8080/fan';


    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) { }
    // 该函数用于开关风扇
    toggleFAN(status: number) {
        const obj = {
            status: status
        };
        console.log("用于开关风扇")
        console.log(status)
        console.log(obj);
        return this.httpClient.put(this.SERVER_URL, obj, this.httpOptions);
    }
    // 该函数用于获取风扇的状态 
    getFAN() {
        console.log("获取风扇的状态")
        return this.httpClient.get(this.SERVER_URL);
    }
}