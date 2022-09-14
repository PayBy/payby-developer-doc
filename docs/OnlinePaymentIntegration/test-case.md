---
sidebar_position: 99
---

# Test case

Use the following integration cases to review your integration qualities. To create a good user experience, ensure that the common payment scenarios are properly handled.

Notes:

- Use iValidate ONLY when your product is ready to go live.
- To simulate real payment scenarios, all test cases must be started by using PAYMENT TERMINALS, rather than by manually calling APIs.
- After your product goes live, PayBy will analyze your transaction status and identify the hidden integration problems or problems casued by code changes.

<br/>

<div>
  <details>
    <summary>Case-001 Payment with password authentication triggered</summary>
    <div>
      <p>When a single payment greater than or equals to a certain amount (usually is AED 500),PayBy users might be prompted to enter the password to complete the payment. This test case is to check whether your system can properly handle this scenario. </p>
      <p>Acceptance rules: </p>
      <p><a>- Both [Partner-Id] and [merchantOrderNo] are required in the request. </a></p>
      <p><a>- The payment amount is greater than or equals to AED 500.</a></p>
      <p><a>- Payment interface responds [status=CREATED].</a></p>
      <p><a>- Send at least one query request.</a></p>
      <p><a>- The query request frequency is 2-6 seconds.</a></p>
      <p><a>- The last query request found that the transaction was successful.</a></p>
    </div>
  </details>
  <br/>
  <details>
    <summary>Case-002 Payment expires</summary>
    <div>
      <p>Sometimes PayBy users might choose not to continue when they are prompted to enter the password to complete the
        payment, and the payment finally expires. This test case is to check whether your system can properly handle
        this scenario. </p>
      <p>Acceptance rules: </p>
      <p><a>- Both [Partner-Id] and [merchantOrderNo] are required in the request. </a></p>
      <p><a>- Payment interface responds [status=CREATED].</a></p>
      <p><a>- Send at least one query request.</a></p>
      <p><a>- The query request frequency is 2-6s.</a></p>
      <p><a>- Send [cancelOrder] request 20 to 120 seconds after the transaction is initiated.</a></p>
    </div>
  </details>
  <br/>
  <details>
    <summary>Case-003 Payment failed with SYSTEM_ERROR returned</summary>
    <div>
      <p>SYSTEM_ERROR is returned when a payment request goes wrong. This test case is to check whether the system can
        handle the SYSTEM_ERROR according to the best practices recommended by PayBy. </p>
      <p>Acceptance rules: </p>
      <p><a>- Both [Partner-Id] and [merchantOrderNo] are required in the request. </a></p>
      <p><a>- Payment interface responds SYSTEM_ERROR.</a></p>
      <p><a>- Send at least one query request.</a></p>
      <p><a>- The query request frequency is 2-6 seconds.</a></p>
      <p><a>- Send [cancelOrder] request 20 to 120 seconds after the transaction is initiated.</a></p>
    </div>
  </details>
  <br/>
  <details>
    <summary>Case-004 Payment timeouts</summary>
    <div>
      <p>A payment request might timeout because of poor network or PayBy system error. This test case is to check
        whether the system can handle timeout errors according to the best practices recommended by PayBy. </p>
      <p>Acceptance rules: </p>
      <p><a>- Both [Partner-Id] and [merchantOrderNo] are required in the request. </a></p>
      <p><a>- Payment interface responds SYSTEM_ERROR.</a></p>
      <p><a>- Send at least one query request.</a></p>
      <p><a>- The query request frequency is 2-6 seconds.</a></p>
      <p><a>- Send [cancelOrder] request 20 to 120 seconds after the transaction is initiated.</a></p>
    </div>
  </details>
  <br/>
  <details>
    <summary>Case-005 Cancel succeeds after multiple attempts</summary>
    <div>
      <p>When a cancel fails, the merchant must keep calling CANCEL until the cancel succeeds. This test case simulates
        the scenario where cancel finally succeeds after multiple attempts. </p>
      <p>Acceptance rules: </p>
      <p><a>- Both [Partner-Id] and [merchantOrderNo] are required in the request. </a></p>
      <p><a>- Send at least one query request.</a></p>
      <p><a>- The query request frequency is 2-6 seconds.</a></p>
      <p><a>- Send [cancelOrder] request 20 to 120 seconds after the transaction is initiated.</a></p>
      <p><a>- The CANCEL request frequency is 3-10 seconds.</a></p>
      <p><a>- At least three CANCEL requests are required, and only the last request returns SUCCESS.</a></p>
    </div>
  </details>
  <br/>
  <details>
    <summary>Case-006 Cancel fails after multiple attempts</summary>
    <div>
      <p>When a cancel fails, the merchant must keep calling CANCEL until at least more than 3 FAILs are returned, or
        until cancel requests keep failing for more than 10 seconds. If cancel still fails, the responsible person must
        be notified of the problem. In production environment, technical support must be contacted to confirm the
        transaction status and handle the problem. </p>
      <p>Acceptance rules: </p>
      <p><a>- Both [Partner-Id] and [merchantOrderNo] are required in the request. </a></p>
      <p><a>- Send at least one query request.</a></p>
      <p><a>- The query request frequency is 2-6 seconds.</a></p>
      <p><a>- Send [cancelOrder] request 20 to 120 seconds after the transaction is initiated.</a></p>
      <p><a>- The CANCEL request frequency is 3-10 seconds.</a></p>
      <p><a>- CANCEL requests must be made at least 3 times, All requests returns failed.</a></p>
    </div>
  </details>
  <br/>
  <details>
    <summary>Case-007 Query succeeds after multiple attempts</summary>
    <div>
      <p>When a query fails, the merchant must keep calling QUERY until the query succeeds. This test case simulates the
        scenario where cancel finally succeeds after multiple attempts. </p>
      <p>Acceptance rules: </p>
      <p><a>- Both [Partner-Id] and [merchantOrderNo] are required in the request. </a></p>
      <p><a>- Send at least three query requests.</a></p>
      <p><a>- The query request frequency is 2-6 seconds.</a></p>
    </div>
  </details>
  <br/>
  <details>
    <summary>Case-008 Query fails after multiple attempts</summary>
    <div>
      <p>When a query fails, the merchant must keep calling QUERY until at least more than 3 FAILs are returned, or
        until reque requests keep failing for more than 10 seconds. If cancel still fails, the responsible person must
        be notified of the problem. In production environment, technical support must be contacted to confirm the
        transaction status and handle the problem.</p>
      <p>Acceptance rules: </p>
      <p><a>- Both [Partner-Id] and [merchantOrderNo] are required in the request. </a></p>
      <p><a>- Send at least three query requests.</a></p>
      <p><a>- The query request frequency is 2-6 seconds.</a></p>
    </div>
  </details>
  <br/>
  <details>
    <summary>Case-009 Return a [SUCCESS] response to PayBy after received the notification</summary>
    <div>
      <p>After the payment is successful, PayBy will send the payment result of the order and the user information to the merchant in the form of a data stream. The merchant needs to receive and process it, and return a [SUCCESS] response to PayBy.This test case is to check whether the system can handle the notification.</p>
      <p>Acceptance rules: </p>
      <p><a>- Receive and process the notification. </a></p>
      <p><a>- [SUCCESS] is required in the return response. </a></p>
    </div>
  </details>
</div>
