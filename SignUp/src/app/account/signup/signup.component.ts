import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) {
    if (this.accountService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastNAme: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required,
      Validators.minLength(6)]]

    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // this.alertService.clear();

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.accountService.register(this.form.value)
    .pipe(first())
    .subscribe(
      data => {
        // this.alertService.success('Registeration successful',
        // {keepAfterRouteChange: true});
        this.router.navigate(['../login'],{
          relativeTo: this.route
        });
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
      }
    );
  }

}
