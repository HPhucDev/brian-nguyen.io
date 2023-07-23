export enum PostHogEvent {
  Login_Click = 'Login_Click',
  Enterprise_Subscription_Start = 'Enterprise_Subscription_Start',
  Enterprise_Subscription_Complete = 'Enterprise_Subscription_Complete',
  Demo_request_Start = 'Demo_request_Start',
  Demo_request_Complete = 'Demo_request_Complete',
  // Registration flow
  Registration_Account_Start = 'Registration_Account_Start',
  Registration_VAT_Start = 'Registration_VAT_Start',
  Registration_Organisation_Start = 'Registration_Organisation_Start',
  Registration_Billing_Start = 'Registration_Billing_Start',
  Registration_Licenses_Start = 'Registration_Licenses_Start',
  Registration_ConfirmContract_Start = 'Registration_ConfirmContract_Start',
  Registration_Complete = 'Registration_Complete',
}
