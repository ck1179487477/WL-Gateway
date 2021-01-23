import { TestBed } from '@angular/core/testing';
import { DeviceServiceac } from './deviceac.service';

describe('DeviceServiceac', () => {
    let service: DeviceServiceac;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DeviceServiceac);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});