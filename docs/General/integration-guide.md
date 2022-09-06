# Integration Guide



### **1. Choose the product you want to integrate**

Start by understanding what products you can integrate to meet your needs. We provide a variety of payment products to suit different payment scenarios, including online payment, offline payment, web payment and mobile payment, etc.

You can view the Product Introduction to learn more about the products , and visit the developer documentation to know the access requirements.

<br/>

### **2. Create a test account and apply to the payment product**

You need to create a test merchant and apply for the products you need to use in the test environment.

Create test merchant https://uat-web-merchant.test2pay.com/

Request a product https://uat-web-merchant.test2pay.com/products/all-products

We will process your application as soon as we receive it on weekdays. If you have special needs, please contact [merchant@payby.com](mailto:merchant@payby.com) directly.

<br/>

### 3. Configure the API key

After the account is activated, you need to download PayBy's public key and upload your own public key

Configuration: https://uat-web-merchant.test2pay.com/management/api-key

<br/>

PayBy uses asymmetric encryption to verify signatures. Asymmetric cryptography, or public-key cryptography, is a cryptographic system that uses pairs of keys. Each pair consists of a public key (which may be known to others) and a private key (which may not be known by anyone except the owner).

<br/>

**Merchant Public Key**

The merchant generates a key pair, the private key is stored by the merchant, and the public key should be uploaded to the PayBy system. The merchant needs to sign the request with its own private key when the merchant sends a request to PayBy, and PayBy uses the merchant's public key to verify the signature. If the verification is passed, it proves that the request was sent by the merchant and not faked by others.



The merchant can directly generate a key pair on PayBy portal. The public key will be automatically saved in the PayBy system and the private key can be downloaded. The merchant should save the private key carefully. If your private key is lost, please update the key in PayBy in time. The merchant can also generate with other OPENSSL tools.

<br/>

**PayBy Public Key**

Payby generates a key pair for each merchant, the private key is saved by PayBy and the public key is available on the portal for merchants to download. When Payby sends response, Payby will use its own private key to sign the message, and the merchant uses Payby 's public key to verify the signature. If the verification is passed, it proves that the response was sent by Payby and not faked by others.

<br/>

**IP Whitelist**

When the merchant calls the API, Payby only allows requests from the whitelist to go through. IP whitelist is required to set, otherwise an error will be reported when API is called. One or more whitelist IPs can be set. If you want to allow any IP to pass through, you can fill in *.

<br/>

### **4. Verify in the test environment**

Try to make a request call to verify whether your configuration is successful. If the calling fails and the reason cannot be found, you can contact [merchant@payby.com](mailto:merchant@payby.com), and we will arrange technical team to help you solve the problem.

<br/>

### **5. Get ready to go live**

If you have successfully verified in the test environment and prepare to launch in live environment, follow the steps as you have done in the test environment.

- Apply for production environment account: https://b.payby.com/
- Enable production environment products: Contact our sales to decide the procucts and rates bd@payby.com
- Configure production environment key: https://b.payby.com/management/api-key
