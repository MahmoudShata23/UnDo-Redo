import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'doRedo';

  userForm!: FormGroup;
  formHistory: any[] = [];
  currentIndex: number = -1;
  changeAfterUndo: boolean = false;
  changeAfterRedo: boolean = false;
  initialState: any = {};
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      age: [null, [Validators.required, Validators.min(18)]],
      gender: [null, Validators.required],
      description: [null, Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
    });
    this.initialState = this.userForm.value;
    this.userForm.valueChanges.subscribe(value => {
      debugger
      // if (this.currentIndex < this.formHistory.length - 1 && this.changeAfterUndo) {
      //   this.currentIndex = this.formHistory.length - 1
      //   this.changeAfterUndo = false
      // }
      if (this.currentIndex === this.formHistory.length - 1 && !this.changeAfterRedo) {
        // if (!this.changeAfterUndo && !this.changeAfterRedo) {
        this.formHistory.push(value);
        this.currentIndex++;
      }
      // }
    });
  }


  onSubmit(): void {
    debugger
    if (this.userForm.valid) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form submitted successfully' });
      console.log('Form Submitted!', this.userForm.value);
      this.currentIndex = -1
      this.formHistory = []
      this.userForm.reset()
    } else {
      this.userForm.markAllAsTouched(); // Show validation errors
    }
  }

  undo(): void {
    debugger
    if (this.currentIndex > -1) {
      this.currentIndex--;
      if (this.currentIndex == -1) {
        this.userForm.setValue(this.initialState);
      } else {
        this.userForm.setValue(this.formHistory[this.currentIndex]);
      }
    }

  }

  redo(): void {
    debugger
    if (this.currentIndex < this.formHistory.length - 1) {
      this.changeAfterRedo = true
      this.currentIndex++;
      this.userForm.setValue(this.formHistory[this.currentIndex]);
    }
  }

}

