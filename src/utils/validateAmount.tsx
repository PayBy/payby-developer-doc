import message from "antd/es/message";


 function validateAmount(data) {
	let { amount } = data;
	amount = amount ? amount.toString().replace(/,/g, "") : 0;
	if (amount <= 0) {
		return message.error("Please enter valid amount.");
	}
}
export default validateAmount