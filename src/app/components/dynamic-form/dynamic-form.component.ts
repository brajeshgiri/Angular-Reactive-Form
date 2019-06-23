import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { FieldConfig, Validator } from "../../field.interface";

@Component({
  exportAs: "dynamicForm",
  selector: "dynamic-form",
  template: `
  <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">
  <ng-container *ngFor="let field of fields;">
  <div  dynamicField [field]="field" [group]="form">
  </div>
  
  <div><button (click)="onAddComments(field)"> Add Comments</button></div>
  </ng-container>
  </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() fields: FieldConfig[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onRulesTrigger: EventEmitter<any> = new EventEmitter<any>();


  form: FormGroup;
  formData: any;

  @Input("formData")
  set _formData(formData) {
    this.formData = formData;
  }
  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createControl();
    this.onChanges();

  }

  ngOnChanges() {

    this.form = this.createControl();
    this.onChanges();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl() {
    const group = this.fb.group({ ...this.formData });
    this.fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      control.valueChanges.subscribe(term => {
        this.onRulesTrigger.emit(term);
      })
      group.addControl(field.name, control);
    });
    // group.value = this.formData;
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  onChanges(): void {
    // this.form.valueChanges.subscribe(this.onRulesTrigger);
    // console.log("data")
    // this.form.get('name').valueChanges.subscribe(val => {
    //   console.log(`My name is ${val}.`);
    //   this.form.patchValue({ email: "goswami48@gmail.com" })
    // });
  }

  onAddComments(field): void {
    console.log("field", field);

  }

}
