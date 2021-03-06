import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import {  GlobalField, FieldsValue , FieldCategory } from 'src/app/model/global-field';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class FormCreateComponent implements OnInit {
  
   

  customForm  = new FormGroup({
    
  });
   
  
  fieldSettingForm = new FormGroup({
    jsontext: new FormControl(''),
  });
  
  constructor(private _elementRef : ElementRef) {

    

   }

  ngOnInit() {
    
  }
  currentGlobalField:GlobalField= new GlobalField();
  currentGlobalFieldJson:string = "";
  display='none';
hover:boolean=false;
  value:FieldsValue={
    id:"",
    label:"",
    value:""
  };
  success = false;

  fieldModels:Array<GlobalField>=[
    {
      "id":"",
      "type": "text",
      "icon": "fa-terminal",
      "label": "Text",
      "description": "Enter ....",
      "placeholder": "Enter ....",
      "className": "form-control",
      "subtype": "text",
      "regex" : "",
      "handle":true,
      "category": FieldCategory.Basic,
      "designclass":"btn-foursquare",
    },
    {
      "type": "row",
      "icon": "fa-columns",
      "label": "Column 1x2",
      
      "className": "form-control",
      "subtype": "text",
     
      "handle":true,
      "category": FieldCategory.Layout,
      "designclass":"btn-google",
      isContainer:true,
      "childs":[
          {
          "type": "column",
            "className":"col-md-6",
         
          
          isContainer:true,
          "childs":[],
          },
          {
          "type": "column",
          "className":"col-md-6",
          
          isContainer:true,
          "childs":[],
          }
    
    ],
    },
    {
      "type": "row",
      "icon": "fa-columns",
      "label": "Column 1x3",
      
      "className": "form-control",
      "subtype": "text",
     
      "handle":true,
      "category": FieldCategory.Layout,
      "designclass":"btn-twitter",
      isContainer:true,
      "childs":[
          {
          "type": "column",
            "className":"col-md-4",
         
          
          isContainer:true,
          "childs":[],
          },
          {
          "type": "column",
          "className":"col-md-4",
          
          isContainer:true,
          "childs":[],
          },
          {
          "type": "column",
          "className":"col-md-4",
          
          isContainer:true,
          "childs":[],
          }
    
    ],
    },
    {
      "type": "row",
      "icon": "fa-columns",
      "label": "Column 1x4",
      
      "className": "form-control",
      "subtype": "text",
     
      "handle":true,
      "category": FieldCategory.Layout,
      "designclass":"btn-instagram",
      isContainer:true,
      "childs":[
          {
          "type": "column",
            "className":"col-md-3",
         
          
          isContainer:true,
          "childs":[],
          },
          {
          "type": "column",
          "className":"col-md-3",
          
          isContainer:true,
          "childs":[],
          },
          {
          "type": "column",
          "className":"col-md-3",
          
          isContainer:true,
          "childs":[],
          },
          {
          "type": "column",
          "className":"col-md-3",
          
          isContainer:true,
          "childs":[],
          }
    
    ],
    },
    {
      "type": "row",
      "icon": "fa-columns",
      "label": "Column 1x6",
      
      "className": "form-control",
      "subtype": "text",
     
      "handle":true,
      "category": FieldCategory.Layout,
      "designclass":"btn-facebook",
      isContainer:true,
      "childs":[
          {
          "type": "column",
            "className":"col-md-2",
         
          
          isContainer:true,
          "childs":[],
          },
          {
          "type": "column",
          "className":"col-md-2",
          
          isContainer:true,
          "childs":[],
          },
          {
          "type": "column",
          "className":"col-md-2",
          
          isContainer:true,
          "childs":[],
          },
          {
          "type": "column",
          "className":"col-md-2",
          
          isContainer:true,
          "childs":[],
          },
          {
          "type": "column",
          "className":"col-md-2",
          
          isContainer:true,
          "childs":[],
          },
          {
          "type": "column",
          "className":"col-md-2",
          
          isContainer:true,
          "childs":[],
          }
    
    ],
    },
    {
      "type": "panelbox",
      "icon": "fa-window-maximize",
      "label": "Panel Box",
        "minimizebutton":true,
        "designclass":"btn-twitter",
     
      "handle":true,
      "category": FieldCategory.Layout,
      
      isContainer:true,
      "childs":[],
    },
    {
      "type": "tabcontainer",
      "icon": "fa-window-restore",
      "label": "Tabs",
      
      "className": "form-control",
      "subtype": "text",
     
      "handle":true,
      "category": FieldCategory.Layout,
      "designclass":"btn-facebook",
      isContainer:true,
      "childs":[
          {
          "type": "tab",
         "label":"tab1",
         "className": "active",
         "tabheaderclassName": "active",
          isContainer:true,
          "childs":[],
          },
          {
          "type": "tab",
          "label":"tab2",
          
          isContainer:true,
          "childs":[],
          }
    
    ],
    },
    {
      "type": "datetime",
      "icon":"fa-calendar",
      "label": "Date",
      "placeholder": "Date",
      "className": "form-control",
      "category": FieldCategory.Basic,
      "designclass":"btn-facebook",
    },
    {
      "type": "colorpicker",
      "icon":"fa-braille",
      "label": "Color Picker",
      "placeholder": "Color Picker",
      "className": "form-control",
      "category": FieldCategory.Basic,
      "designclass":"btn-twitter",
    },
    {
      "type": "selectbox",
      "icon":"fa-list-alt",
      "label": "Select Box",
      "placeholder": "",
      "className": "form-control",
      "category": FieldCategory.Basic,
      "designclass":"btn-google",
      "items":[
        {id:"1", text:"Berlin"},
        {id:"2", text:"Köln"},
        {id:"3", text:"Hannover"},
        {id:"4", text:"Münschen"},
        {id:"5", text:"Hamburg"},
        {id:"6", text:"Bremen"},
        {id:"7", text:"Osnabrück"},
        {id:"8", text:"Kiel"}]

    },
    {
      "type": "selectboxmulti",
      "icon":"fa-th-list",
      "label": "Multi Select Box",
      "placeholder": "",
      "className": "form-control",
      "category": FieldCategory.Basic,
      "designclass":"btn-linkedin",
      "value":["2","3"],
      "options":{width: '300',
                multiple: true,
                tags: true},
      "items":[
        {id:"1", text:"Berlin"},
        {id:"2", text:"Köln"},
        {id:"3", text:"Hannover"},
        {id:"4", text:"Münschen"},
        {id:"5", text:"Hamburg"},
        {id:"6", text:"Bremen"},
        {id:"7", text:"Osnabrück"},
        {id:"8", text:"Kiel"}]

    },



/*

    {
      "type": "email",
      "icon": "fa-envelope",
      "required": true,
      "label": "Email",
      "description": "Enter your email",
      "placeholder": "Enter your email",
      "className": "form-control",
      "subtype": "text",
      "regex" : "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$",
      "errorText": "Please enter a valid email",
      "handle":true,
      
      "category": FieldCategory.Advanced,
      "designclass":"",
    },
    {
      "type": "phone",
      "icon": "fa-phone",
      "label": "Phone",
      "description": "Enter your phone",
      "placeholder": "Enter your phone",
      "className": "form-control",
      "subtype": "text",
      "regex" : "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
      "errorText": "Please enter a valid phone number",
      "handle":true,
      "category": FieldCategory.Advanced,
      "designclass":"",
    },
    {
      "type": "number",
      "label": "Number",
      "icon": "fa-hashtag",
      "description": "",
      "placeholder": "Enter ....",
      "className": "form-control",
      "value": "20",
      "min": 12,
      "max": 90,
      "category": FieldCategory.Basic,
      "designclass":"",
    },
    
    {
      "type": "time",
      "icon":"fa-clock",
      "label": "Time",
      "placeholder": "Time",
      "className": "form-control",
      "category": FieldCategory.Basic,
      "designclass":"btn-flickr",
    },
    {
      "type": "textarea",
      "icon":"fa-text-font",
      "label": "Textarea" ,
      "category": FieldCategory.Basic,
      "designclass":"btn-foursquare",
    },
    {
      "type": "paragraph",
      "icon": "fa-paragraph",
      "label": "Paragraph",
      "placeholder": "Type your text to display here only" ,
      "category": FieldCategory.Basic,
      "designclass":"btn-google",
    },
    {
      "type": "checkbox",
      "required": true,
      "label": "Checkbox",
      "icon":"fa-check-square",
      "description": "Checkbox",
      "inline": true,
      "listitems": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ],
      "category": FieldCategory.Basic,
      "designclass":"btn-instagram",
    },
    {
      "type": "radio",
      "icon":"fa-check-circle",
      "label": "Radio",
      "description": "Radio boxes",
      "listitems": [ 
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    {
      "type": "autocomplete",
      "icon":"fa-bars",
      "label": "Select",
      "description": "Select",
      "placeholder": "Select",
      "className": "form-control",
      "listitems": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        },
        {
          "label": "Option 3",
          "value": "option-3"
        }
      ]
    },
    {
      "type": "file",
      "icon":"fa-file",
      "label": "File Upload",
      "className": "form-control",
      "subtype": "file"
    },
    {
      "type": "button",
      "icon":"fa-paper-plane",
      "subtype": "submit",
      "label": "Submit"
    }*/
  ];
  modelFields:Array<GlobalField>=[];
  model:any = {
    name:'App name...',
    description:'App Description...',
    theme:{
      bgColor:"ffffff",
      textColor:"555555",
      bannerImage:""
    },
    fields:this.modelFields
  };

  report = false;
  reports:any = [];

  onDragStart(event:DragEvent) {
    console.log("drag started", JSON.stringify(event, null, 2));
  }
  
  onDragEnd(event:DragEvent) {
    console.log("drag ended", JSON.stringify(event, null, 2));
  }
  
  onDraggableCopied(event:DragEvent) {
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }
  
  onDraggableLinked(event:DragEvent) {
    console.log("draggable linked", JSON.stringify(event, null, 2));
    
  }
    
   onDragged( item:any, list:any[], effect:DropEffect ) {
    if( effect === "move" ) {
      const index = list.indexOf( item );
      list.splice( index, 1 );
    }
  }
      
  onDragCanceled(event:DragEvent) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }
  
  onDragover(event:DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }
  
  onDrop( event:DndDropEvent, list?:any[] ) {
    
    if( list && (event.dropEffect === "copy" || event.dropEffect === "move") ) {
      
      if(event.dropEffect === "copy"){
        event.data.name = event.data.type+'-'+new Date().getTime();
        event.data.id=new Date().getTime();

        if(event.data.type==="tabcontainer"){
          let index:number=1;
         let tabs:Array<GlobalField> = event.data.childs;
            tabs.forEach(function (tab) {
              index++;
              tab.id=new Date().getTime()+index;
            });

        }

      }
      
      let index = event.index;
      if( typeof index === "undefined" ) {
        index = list.length;
      }
      list.splice( index, 0, event.data );
    }
    this.currentGlobalField=event.data;
    this.currentGlobalFieldJson=JSON.stringify(this.currentGlobalField, null, 4);
    this.fieldSettingForm.setValue({jsontext:this.currentGlobalFieldJson});
  
    if( list && event.dropEffect === "copy")this.display='block';
    console.log(this.currentGlobalField);
  }
  
  addValue(values){
    values.push(this.value);
    this.value={label:"",value:""};
  }

  removeField(i){
    /*swal({
      title: 'Are you sure?',
      text: "Do you want to remove this field?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.value) {
        this.model.attributes.splice(i,1);
      }
    });*/

  }

  updateForm(){
    let input = new FormData;
    input.append('id',this.model._id);
    input.append('name',this.model.name);
    input.append('description',this.model.description);
    input.append('bannerImage',this.model.theme.bannerImage);
    input.append('bgColor',this.model.theme.bgColor);
    input.append('textColor',this.model.theme.textColor);
    input.append('attributes',JSON.stringify(this.model.attributes));

    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','App updated successfully','success');
    // });
  }
  
  

  initReport(){
    this.report = true; 
    let input = {
      id:this.model.id
    }
    // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
    //   this.reports = r.data;
    //   console.log('reports',this.reports);
    //   this.reports.map(records=>{
    //     return records.attributes.map(record=>{
    //       if(record.type=='checkbox'){
    //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
    //       }
    //     })
    //   });
    // });
  }

  openModal(){


    this.display='block'; 


 }
 onCloseHandled(){


  this.display='none'; 


}
arrayUpdate( list:Array<GlobalField>, field:GlobalField){
  list.forEach((item)=> {
    if(item.id===field.id){
      Object.assign(item,field);
      
      
      return true;
    }

    if(item.childs !=null && item.childs.length>0){
      this.arrayUpdate(item.childs,field);
    }

  });
}

  toggleValue(item){
    item.selected = !item.selected;
  }
  onSubmit(txt:any){
    console.log(txt);
    this.currentGlobalField= JSON.parse(txt.jsontext);
    this.arrayUpdate(this.modelFields,this.currentGlobalField);

    this.onCloseHandled();

  }
  submit(){
    let valid = true;
    let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    validationArray.reverse().forEach(field => {
      console.log(field.label+'=>'+field.required+"=>"+field.value);
      if(field.required && !field.value && field.type != 'checkbox'){
       // swal('Error','Please enter '+field.label,'error');
        valid = false;
        return false;
      }
      if(field.required && field.regex){
        let regex = new RegExp(field.regex);
        if(regex.test(field.value) == false){
          //swal('Error',field.errorText,'error');
          valid = false;
          return false;
        }
      }
      if(field.required && field.type == 'checkbox'){
        if(field.values.filter(r=>r.selected).length == 0){
          //swal('Error','Please enterrr '+field.label,'error');
          valid = false;
          return false;
        }

      }
    });
    if(!valid){
      return false;
    }
    console.log('Save',this.model);
    let input = new FormData;
    input.append('formId',this.model._id);
    input.append('attributes',JSON.stringify(this.model.attributes))
    // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','You have contact sucessfully','success');
    //   this.success = true;
    // },error=>{
    //   swal('Error',error.message,'error');
    // });
  }
  openSettingsForm(item){

    this.currentGlobalField=item;
    this.currentGlobalFieldJson=JSON.stringify(this.currentGlobalField, null, 4);
    this.fieldSettingForm.setValue({jsontext:this.currentGlobalFieldJson});
    this.display='block'; 

  }
  /*
  datepickerload(){
    console.log($('.datepicker'));
    $('.datepicker').datepicker();
  }
  colorpickerload(){
    console.log($('.my-colorpicker1'));
    $('.my-colorpicker1').colorpicker();
  }*/
   

}
