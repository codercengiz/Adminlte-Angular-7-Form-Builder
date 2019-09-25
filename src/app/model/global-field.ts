export class GlobalField {

    id?:any;
    name?:any;
    type?:any;
    icon?:any;
    toggle?:any;
    required?:any;
    regex?:any;
    errorText?:any;
    label?:any;
    description?:any;
    placeholder?:any;
    className?:any;
    subtype?:any;
    handle?:any;
    min?:number;
    max?:number;
    inline?:any;
    value?:any;
    listitems?:Array<FieldsValue>;
    designclass?:string;
    category?: FieldCategory=FieldCategory.Basic;
    isContainer?:boolean=false;
    childs?:Array<GlobalField>;
    items?:any;
    options?:any;

    
    //panel box
    closebutton?:boolean;
    minimizebutton?:boolean;

    //tabcontainer
    tabheaderclassName?:string;
}
export class FieldsValue{
    id?:any="";
    label?:any="";
    value?:any="";
  }

 export  enum FieldCategory {
    Basic ,
    Advanced,
    Layout,
    Custom,
}