export interface InputControls {
    [id: string]: InputControl;
  }
   
  export interface InputControl {
    name: string;
    type?: string;
    label?: string;
    controls?: InputControl[];
  }