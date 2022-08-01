### **In-APP SDK**

---

**paySceneCode**  <span style={{color:" #7d8793"}}>String</span>  <span style={{color:"#f19938"}}>Required</span>

Payment scene you are going to use. 

Example value: INAPP



**<font color="#333333"> PayScene parameters</font>**

- **iapDeviceId**   <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

   The device id of the payer, also known as IMEI. The International Mobile Equipment Identity (IMEI) number is a unique identification or serial number that all mobile phones and smartphones have. It is normally 15 digits long.

  Example value: https://www.payby.com/

  Maximum length: `512`.



- **appId**   <span style={{color:" #7d8793"}}>String</span> <span style={{color:"#f19938"}}>Required</span>

  Your app needs to be registered with Payby. Payby will assign an app id after successful registration. Please log in to the portal and visit [Setting - Developers - My Apps] to register your application.

  Example value: 20211222000000241

  Maximum length: `17`.



**Sample**

```json
"paySceneCode": "INAPP",
"paySceneParams": {
    "iapDeviceId": "deviceId123",
    "appId": "20200510000000121"
}
```