

**Paypage**

(Hosted paypage & iFrame paypage)

---

**<span style={{color:"#333333"}}> PayScene parameters</span>**

- **redirectUrl**   <span style={{color:" #7d8793"}}>String</span> 

  Link that the payer will be redirected once the payer finalizes payments on PayBy's checkout. 

  Example value: https://www.yoursite.com

  Maximum length: `512`.

  <br/>

- **oneTimePayment**   <span style={{color:" #7d8793"}}>Boolean</span>   

  When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's succesful.

  Default value: False.
  
  <br/>
