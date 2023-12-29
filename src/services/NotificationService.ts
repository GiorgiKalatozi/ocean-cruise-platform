export class NotificationService {
  public sendSMS(message: string, phoneNumber: string): this {
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
    return this;
  }

  public sendEmail(message: string, email: string): this {
    console.log(`Sending Email to ${email}: ${message}`);
    return this;
  }

  public sendPushNotification(message: string, deviceId: string): this {
    console.log(`Sending Push Notification to ${deviceId}: ${message}`);
    return this;
  }
}
