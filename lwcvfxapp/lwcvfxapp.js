import { LightningElement,wire,track } from 'lwc';
import getHome from '@salesforce/apex/AccountDataController.getHome';
const columns=[
    {label: 'Name', fieldName: 'PageContent__c'}
]
export default class Lwcvfxapp extends LightningElement {
   
    @track columns = columns;
   
    data=[];
   
    @wire (getHome) accList(result)
    {
      //  this.mydata = result.data;
        this.data = result.data;
       // let columnNameList = this.result.map(item => item.Id);
      //  console.log(result.data);
      
      
       // this.mydata =columnNameList;
       //console.log()
    }
    
    
   

  
}