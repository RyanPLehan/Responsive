/*
 *  Date        Author                          Description
 *  2019.09.16  Lehan, Ryan                     Initial development
 *  2019.09.17  Lehan, Ryan                     Added Responsive Service to subscribe to observable 
 *                                              Added event handler to listen for when the screen is resized.
 *  2019.09.08  Lehan, Ryan                     Added specific get accessor properties as Observables to access specific Responsive Type properties
 *                                              Added example of using a subscription to get specific data from an observable
 * 
 *  Subscribing to Observables and getting data from Observables
 *  https://alligator.io/angular/async-pipe/
 *  https://appdividend.com/2018/12/08/angular-7-observables-tutorial-with-example/
 */


import { Component,
         OnInit,
         OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

// Types needed for services
import { ResponsiveType,
         ResponsiveEnum } from './shared/responsive/responsive.types';

// Services for Dependency Injection
import { ResponsiveService } from './shared/responsive/responsive.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private responsiveSvc: ResponsiveService; 
  public responsiveType$: Observable<ResponsiveType> | undefined;
  
  // Subscription to an observable
  private responsiveEnum: ResponsiveEnum | undefined;
  private responsiveEnumSub: Subscription | undefined;


  
  public title: string = 'Responsive Test';


  // Constructors should only be used for Dependency Injection and any other initialization should occur in the ngOnInit.
  public constructor(svc: ResponsiveService) {
      this.responsiveSvc = svc;
  }

  // *** Accessors / Mutators ***
  // Easier to access specific responsive types using Accessor (get) properties
  public get responsiveCSS$(): Observable<string> {
      return this.responsiveType$.pipe(map(func => (func.responsiveCSS)));
  }

  public get responsiveBreakPoint$(): Observable<string> {
      return this.responsiveType$.pipe(map(func => (func.responsiveBreakPoint)));
  }

  public get responsiveEnumAsString(): string {
      return this.responsiveSvc.responsiveEnumAsString(this.responsiveEnum);
  }


// *** Methods ***
  public ngOnInit() {
      // Set observables from service(s)
      this.responsiveType$ = this.responsiveSvc.currentResponsiveType$;

      // Set subscriptions to specific member variables, so when the observable changes, so does the member variable
      this.responsiveEnumSub = this.responsiveType$.subscribe(val => this.responsiveEnum = val.responsiveEnum);
  }

  public ngOnDestroy() {
      // Unsubscribe here
      this.responsiveEnumSub.unsubscribe();
  }


  // Call when the window has been resized
  public onResize(event) {
      // Call service to handle the change in the width
      this.responsiveSvc.setWidth(event.target.innerWidth);
  }
}
