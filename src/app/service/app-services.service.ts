import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppServicesService {
  public content = new BehaviorSubject<boolean>(false);    
  public share = this.content.asObservable(); 

  constructor() { }
}
