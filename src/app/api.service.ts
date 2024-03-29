import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Armors } from './armors';
import { Classes } from './classes';
import { Shields } from './shields';
import { Talismans } from './talismans';
import { Weapons } from './weapons';
import { IdList } from './id-list';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  public baseurl = "https://eldenring.fanapis.com/api/";
  constructor(private http : HttpClient) {  }

  getArmors(id : string) : Observable<Armors>{
    return this.http.get<Armors>(this.baseurl + "armors/" + id);
  }

  getClasses(id : string) : Observable<Classes>{
    return this.http.get<Classes>(this.baseurl + "classes/" + id);
  }

  getShields(id : string) : Observable<Shields>{
    return this.http.get<Shields>(this.baseurl + "shields/" + id);
  }

  getTalismans(id : string) : Observable<Talismans>{
    return this.http.get<Talismans>(this.baseurl + "talismans/" + id);
  }

  getWeapons(id : string) : Observable<Weapons>{
    return this.http.get<Weapons>(this.baseurl + "weapons/" + id);
  }

  getIds(source : string) : Observable<IdList>{
      return this.http.get<IdList>(this.baseurl + source.toLowerCase());
  }
}
