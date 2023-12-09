import { LightningElement,api } from 'lwc';
import cname from '@salesforce/label/c.Companyname';
import cdes from '@salesforce/label/c.Companydes';

export default class Helloworldapp extends LightningElement {
    label = {
        cname,
        cdes
    };
    @api isLoaded = false;
    // change isLoaded to the opposite of its current value
    handleClick() {
        this.isLoaded = !this.isLoaded;
    }
}