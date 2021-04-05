import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
@Component({
  selector: 'dev-custom-sdk',
  templateUrl: './custom-sdk.component.html',
  styleUrls: ['./custom-sdk.component.css']
})
export class CustomSdkComponent implements OnInit {

  @Input() username: string;
  @Input() password: string;
  @Input() jsonString: string;

  constructor(private iab: InAppBrowser, public http: HttpClient) { }
 
  ngOnInit(){
    
   this.openURL();
  }
openURL() {
    var keysArray = [];
    var valuesArray = [];
    let url = 'https://m.mirrar.com//api/v1/login';
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    let body =
      'username='+this.username+
      '&password='+this.password+
      '&type=android_sdk';

    //alert(body);

    this.http.post(url, body, httpOptions).subscribe((response) => {
      //console.log("data is : "+JSON.stringify(response))
      var responseString = JSON.stringify(response);
      var json = JSON.parse(responseString);
      var userData = JSON.parse(this.jsonString);
      // parse json data and pass json string
      //console.log("JSONDATA is : "+JSON.stringify(jsonData['data'])); //
      //console.log("LEngth is: "+Object.keys(json['data']['active_product_codes']).length);

      var length1 = Object.keys(json.data.active_product_codes).length;

      var apiKeys = Object.keys(json.data.active_product_codes);
      var apiValues = Object.values(json.data.active_product_codes);

      var userKeys = Object.keys(userData.options.productData);
      var userValues = Object.values(userData.options.productData);

      console.log('start' + userValues.length);
      console.log(userValues[0]['items'][0]);
      for (let i = 0; i < userKeys.length; i++) {
        for (let j = 0; j < apiKeys.length; j++) {
          if (userKeys[i] == apiKeys[j]) {
            keysArray.push(userKeys[i]);
            //check in values
            var valueArray = [];

            for (let k = 0; k < userValues[i]['items'].length; k++) {
              for (let x = 0; x < apiValues[j]['items'].length; x++) {
                if (userValues[i]['items'][k] == apiValues[j]['items'][x]) {
                  console.log(userValues[i]['items'][k]);
                  valueArray.push(userValues[i]['items'][k]);
                }
              }
            }
            if (valueArray.length > 0) {
              valuesArray.push(valueArray);
            }
          }
        }
      }

      var codes = [];
      var baseUrl = '';
      for (let i = 0; i < valuesArray.length; i++) {
        codes.push('&' + keysArray[i] + '=');
        for (let j = 0; j < valuesArray[i].length; j++) {
          codes.push(valuesArray[i][j]);
        }
      }
      //console.log(codes);

      var csv = codes
        .toString()
        .replace('[', '')
        .replace(']', '')
        .replace(', ', ',');
      baseUrl =
        'https://cdn.styledotme.com/general/mirrar.html?brand_id=' +
        json.data.uuid +
        csv +
        '&sku=' +
        codes[1].replace('=,', '=').replace(',&', '&');
      console.log('baseURL' + baseUrl);

      const browser =this.iab.create(baseUrl, '_self', 'toolbar=no');
      browser.show();
    });
  }
}