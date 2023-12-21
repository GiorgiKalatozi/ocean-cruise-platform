export class NotificationService {
  sendSMS(message: string, phoneNumber: string): void {
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
  }

  sendEmail(message: string, email: string): void {
    console.log(`Sending Email to ${email}: ${message}`);
  }

  sendPushNotification(message: string, deviceId: string): void {
    console.log(`Sending Push Notification to ${deviceId}: ${message}`);
  }
}
