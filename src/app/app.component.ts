import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio-app';

  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      youtube: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(https?\\:\\/\\/)?(www\\.youtube\\.com|youtu\\.?be)\\/.+$'
          ),
        ],
      ],
      type: [''],
      color: [''],
      terms: ['', [Validators.required, Validators.requiredTrue]],
    });

    // this.loadApi();
  }

  loadApi(): any {
    const response = {
      email: 'correoprueba@gmail.com',
      password: '12345',
      terms: true,
    };

    this.formLogin.patchValue({
      email: response.email,
      password: response.password,
      terms: response.terms,
    });
  }

  changeType() {
    if (this.formLogin.value.type === 'carro') {
      this.formLogin.get('color')?.setValidators([Validators.required]);
      this.formLogin.get('color')?.updateValueAndValidity();
    } else {
      this.formLogin.get('color')?.clearValidators();
      this.formLogin.get('color')?.updateValueAndValidity();
    }
  }

  send() {
    console.log(this.formLogin.value);
  }
}
