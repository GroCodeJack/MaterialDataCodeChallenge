import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-mats',
  templateUrl: './show-mats.component.html',
  styleUrls: ['./show-mats.component.css']
})
export class ShowMatsComponent implements OnInit {

  constructor(private service: SharedService) { }


  MatList: any = [];
  ModalTitle:string;
  ActivateAddEditMatComp:boolean=false;
  mat:any;

  count:number = 0;

  MfrFilter:string="";
  TypeNameFilter:string="";
  TypeIdFilter:string="";
  StyleNameFilter:string="";
  StyleIdFilter:string="";
  ColorValueFilter:string="";
  ColorNameFilter:string="";
  SizeFilter:string="";

  MatListWithoutFilter:any = [];



  ngOnInit(): void {
    this.refreshMatList();
  }

  refreshMatList() {
    this.service.getMatList().subscribe(data => {
      this.MatList = this.handleNullValues(data);
      this.MatListWithoutFilter = this.handleNullValues(data);
    });
  }

  /*utility function to handle null values. Sets them to empty string
  or else filter function will not work*/
  
  handleNullValues(data:any[]):any[] {
    console.log(data)
    var nullFilteredList:any = data;
    for(let i=0;i<data.length;i++){
      for(let j=0;j<Object.keys(data[i]).length;j++){
        if(data[i][Object.keys(data[i])[j]] == null){
          console.log("null found")
          nullFilteredList[i][Object.keys(data[i])[j]] = "";
        }
      }
    }
    console.log(nullFilteredList)
    return nullFilteredList;
  }

  //all material columns are set to empty string or zero, ready to accept user input
  
  addClick() {
    console.log("addClick");
    this.mat={
      Mfr:"",
      TypeName:"",
      TypeId: 0,
      StyleName:"",
      StyleId:"",
      ColorValue: 0,
      ColorName:"",
      Size:"",
      rowId: 0
    }

    //boolean is set to true to show the add/edit modal
    this.ModalTitle = "Add Material";
    this.ActivateAddEditMatComp = true;

  }

  editClick(item:any) {
    this.mat = item;
    this.ModalTitle = "Edit Material";
    this.ActivateAddEditMatComp = true;
  }

  deleteClick(item:any) {
    if(confirm('Are you sure?')) {
      this.service.deleteMaterial(item.rowId).subscribe(data => {
        alert(data.toString());
        this.refreshMatList();
      });
    }
  }


  closeClick() {
    this.ActivateAddEditMatComp = false;
    this.refreshMatList();
  }

  //filter over backed up material list (MatListWithoutFilter)
  FilterFn() {
    var MfrFilter = this.MfrFilter;
    var TypeNameFilter = this.TypeNameFilter;
    var TypeIdFilter = this.TypeIdFilter;
    var StyleNameFilter = this.StyleNameFilter;
    var StyleIdFilter = this.StyleIdFilter;
    var ColorValueFilter = this.ColorValueFilter;
    var ColorNameFilter = this.ColorNameFilter;
    var SizeFilter = this.SizeFilter;

    this.MatList = this.MatListWithoutFilter.filter(function (el:any) {

      return el.Mfr.toString().toLowerCase().includes(
        MfrFilter.toString().trim().toLowerCase()
      ) &&
      el.TypeName.toString().toLowerCase().includes(
        TypeNameFilter.toString().trim().toLowerCase()
      ) &&
      el.TypeId.toString().toLowerCase().includes(
        TypeIdFilter.toString().trim().toLowerCase()
      ) &&
      el.StyleName.toString().toLowerCase().includes(
        StyleNameFilter.toString().trim().toLowerCase()
      ) &&
      el.StyleId.toString().toLowerCase().includes(
        StyleIdFilter.toString().trim().toLowerCase()
      ) &&
      el.ColorValue.toString().toLowerCase().includes(
        ColorValueFilter.toString().trim().toLowerCase()
      ) &&
      el.ColorName.toString().toLowerCase().includes(
        ColorNameFilter.toString().trim().toLowerCase()
      ) &&
      el.Size.toString().toLowerCase().includes(
        SizeFilter.toString().trim().toLowerCase()
      )
    });
  }

}
