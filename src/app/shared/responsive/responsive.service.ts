/*
 *  Date        Author                          Description
 *  2019.09.16  Lehan, Ryan                     Initial development
 *  2019.09.08  Lehan, Ryan                     Moved types and data to separate files
 *                                              Change BehaviorSubject from public to private and added a get accessor to expose as a public Observable
 * 
 *  The main idea for this came from
 *  https://itnext.io/angular-code-design-for-responsive-websites-acd4259a478c
 *  https://github.com/angular/flex-layout/wiki/Responsive-API
 * 
 */
 

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Import data and types
import { ResponsiveType, ResponsiveEnum } from './responsive.types';
import { CustomResponsiveData, 
         MQResponsiveData } from './responsive.data';
 


@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  
  // The following are made private so that no outside object can change their values directly
  // They are accessed via their 'get' property, effectively making them immutable from the outsider's point of view
  private width: number;
  private subjectResponsiveType = new BehaviorSubject<ResponsiveType>(undefined);

  // Assign Responsive data here
  private responsiveData: ResponsiveType[] = undefined; 


  // Constructors should only be used for Dependency Injection and any other initialization would occur in the ngOnInit.
  // However, Injectables do not have a lifecycle like Components and Directives
  // Therefore, the ngOnInit would never get called  
  public constructor() { 
    this.responsiveData = CustomResponsiveData;     // MQResponsiveData;
    this.setWidth(window.innerWidth);
  }


  // *** Accessors / Mutators ****
  public get screenWidth(): number {
    return this.width;
  }

  // Use Accessor (get) property to expose Behavior Subject as an Observable
  public get currentResponsiveType$(): Observable<ResponsiveType> {
    return this.subjectResponsiveType;
  }


  // *** Methods ****
  // Use the setWidth method when capturing the window:resize event from a component (preferably the AppComponent)
  public setWidth(screenWidth: number): void {

    // validate parameter, just in case
    if (screenWidth < 0) {
        return;
    }

    // console.log('Width: ' + screenWidth);
    this.width = screenWidth;

    // Loop through responsive data to find the correct responsive type
    for (let respType of this.responsiveData) {
      if (screenWidth >= respType.minWidth && screenWidth <= respType.maxWidth) {
          this.setResponsiveType(respType);
          break;
      }
    }
  }

  // This will take an enum value (integer) and return the enum key (string version)
  public responsiveEnumAsString(responsiveEnum: ResponsiveEnum): string {
    var asString: string = ResponsiveEnum[responsiveEnum];     // Convert to string
    return asString;
}

  // This will set the responsive type, but only if it has changed from the current value.
  // The prevents unnecessary firing of subscriber's actions
  private setResponsiveType(respType: ResponsiveType): void {

    /*
    console.log('Current Responsive Type:');
    console.log(this.subjectResponsiveType);

    console.log('New Responsive Type:');
    console.log(respType);
    */

    // Check for undefined or if not matching
    if (!this.subjectResponsiveType ||
        this.subjectResponsiveType.getValue() != respType) {
          this.subjectResponsiveType.next(respType);
          // console.log('Changing Responsive Type');
    }
  }

}
