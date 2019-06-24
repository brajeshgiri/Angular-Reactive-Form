import { Component, HostListener, ViewChild, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "./field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import data from './formFields';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  ngOnInit() {
    console.log("data", data)
    this.regConfig = data.map(d => {

      if (d.validations) {
        const validations = d.validations.map(v => ({
          validator: Validators.required,
          name: v.name,
          message: "Required"
        }));
        d.validations = validations;
      }
      return d;
    })
  }

  regConfig: FieldConfig[] = [];
  formData = {
    email: "brajesh@gmail.com",
    age: 30
  }
  submit(value: any) {
    this.form.form.reset();
    console.log("submited values", value)
  }
  onRuleTrigger(e) {

  }
  onChanges(value): void {
    console.log("values", value)
    if (this.regConfig.findIndex(c => c.name === 'lastName') === -1) {
      this.regConfig = [{
        type: "input",
        label: "Last Name",
        inputType: "text",
        name: "lastName",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Required"
          }
        ]
      }, ...this.regConfig];
    }
  }

  onAddComment(event) {
    console.log("Don't touch my bacon!", event);

  }

  onRulesTrigger(event) {
    console.log("onRulesTrigger", event);
  }


}
