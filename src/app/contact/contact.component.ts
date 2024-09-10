import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    contactFrom: FormGroup;
    isSubmitted = false;

    constructor(
        private formBuilder: FormBuilder,
    ) {
        this.contactFrom = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required]
        });
    }

    get f() { return this.contactFrom.controls; }

    submit() {
        this.isSubmitted = true;
        console.log(this.f['name'].errors);
        if (this.contactFrom.invalid) {
            return
        }
        console.log(this.contactFrom.value);

    }
}
