import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiError } from '../../../types/error';

@Component({
  selector: 'app-server-error',
  imports: [],
  templateUrl: './server-error.html',
  styleUrl: './server-error.css',
})
export class ServerError {
  protected error = signal<ApiError | null>(null);
  protected showDetails = signal<boolean>(false);
  private route = inject(Router);

  constructor() {
    const navigation = this.route.currentNavigation();
    this.error.set(navigation?.extras?.state?.['error']);
  }

  detailsToggle() {
    this.showDetails.set(!this.showDetails());
  }
}
