import { Component, OnInit, HostListener } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-input",
  template: `
<mat-form-field class="demo-full-width" [formGroup]="group">
<input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
</ng-container>
</mat-form-field>
`,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }
  ngOnInit() {
    console.log("dynamicField", this.field);
  }

  onAddComments(e) {
    // e.target.nativeElement.addEventListener('onAddComment', this.onMouseEnter);
    let event = new CustomEvent("onAddComment", {
      cancelable: true // without that flag preventDefault doesn't work
    });
    e.target.dispatchEvent(event);
  }

}
