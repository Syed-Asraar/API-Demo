import { LightningElement } from 'lwc';
import getUserNames from '@salesforce/apex/apicall.getUserNames';

export default class API extends LightningElement {
    
    users = [];
    error;

    handleFetch() {
        getUserNames()
            .then(data => {
                this.users = data;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.users = [];
            });
    }
}