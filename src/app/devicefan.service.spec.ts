import { TestBed } from '@angular/core/testing';
import { DeviceServicefan } from './devicefan.service';

describe('DeviceServicefan', () => {
    let service: DeviceServicefan;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DeviceServicefan);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});