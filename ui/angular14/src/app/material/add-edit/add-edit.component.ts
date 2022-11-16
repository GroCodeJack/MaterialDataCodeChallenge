import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service:SharedService) {}

  @Input() mat:any;
  Mfr:string;
  TypeName:string;
  TypeId:string;
  StyleName:string;
  StyleId:string;
  ColorValue:string;
  ColorName:string;
  Size:string;
  rowId:string;

  ngOnInit(): void {
    this.Mfr = this.mat.Mfr;
    this.TypeName = this.mat.TypeName;
    this.TypeId = this.mat.TypeId;
    this.StyleName = this.mat.StyleName;
    this.StyleId = this.mat.StyleId;
    this.ColorValue = this.mat.ColorValue;
    this.ColorName = this.mat.ColorName;
    this.Size = this.mat.Size;
    this.rowId = this.mat.rowId;
  }

  //create values object and pass it to service for post method
  addMaterial() {
    var val = {
      Mfr: this.Mfr,
      TypeName: this.TypeName,
      TypeId: this.TypeId,
      StyleName: this.StyleName,
      StyleId: this.StyleId,
      ColorValue: this.ColorValue,
      ColorName: this.ColorName,
      Size: this.Size,
      rowId: this.rowId
    };


    this.service.addMaterial(val).subscribe(res => {
      alert(res.toString());
    });
  }

  //create values object and pass it to service for put method
  updateMaterial() {
    var val = {
      Mfr: this.Mfr,
      TypeName: this.TypeName,
      TypeId: this.TypeId,
      StyleName: this.StyleName,
      StyleId: this.StyleId,
      ColorValue: this.ColorValue,
      ColorName: this.ColorName,
      Size: this.Size,
      rowId: this.rowId
    };

    this.service.updateMaterial(val).subscribe(res => {
      alert(res.toString());
    });
  }


}
