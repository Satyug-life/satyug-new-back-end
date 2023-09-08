export const RAZORPAY_PACKAGE_NAME = "razorpay";

export interface RazorpayServiceClient {
  createOrder(request: any);
  getPaymentType(request: any);
}

export const RAZORPAY_SERVICE_NAME = "RazorpayService";