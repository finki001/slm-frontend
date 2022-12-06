import {Component, OnDestroy} from '@angular/core';
import {MaintenanceService} from "./maintenance.service";
import {Subscription, switchMap, timer} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'slm-frontend';

  subscription: Subscription;

  backgroundColor = 'green';

  message = new FormControl();

  constructor(private maintenanceService: MaintenanceService) {
    this.subscription = timer(0, 5000).pipe(
      switchMap(() => this.maintenanceService.getMessage())
    ).subscribe(message => this.backgroundColor = !message ? 'green' : 'red');

    maintenanceService.getMessage().subscribe(console.log);
  }

  setMessage(message: string) {
    this.maintenanceService.setMessage(message).subscribe(console.log);
    this.message.setValue('');
  }

  resetMessage() {
    this.maintenanceService.resetMessage().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
