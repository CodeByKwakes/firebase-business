import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private af: AngularFire) { }

  getBusinesses(category: string = null): FirebaseListObservable<Business[]> {
    if (category != null) {
      this.businesses = this.af.database.list('businesses', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      });

    } else {
      this.businesses = this.af.database.list('businesses');
    }
    return this.businesses;
  }

  getCategories(): FirebaseListObservable<Category[]> {
    this.categories = this.af.database.list('categories');
    return this.categories;
  }

  addBusiness(newBusiness) {
    return this.businesses.push(newBusiness);
  }

  updateBusiness(key, updBusiness) {
    return this.businesses.update(key, updBusiness);
  }

  deleteBusiness(key) {
    this.businesses.remove(key);
  }
}

export interface Business {
  $key?: string;
  company?: string;
  description?: string;
  category: Category;
  years_in_business?: number;
  street_address?: string;
  city?: string;
  zipcode?: string;
  phone?: string;
  email?: string;
  state?: string;
  created_at: string;
}

export interface Category {
  $key?: string;
  name?: string;
}


