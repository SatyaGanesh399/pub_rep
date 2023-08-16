export interface Offer {
  _id?: string;
  title: string;
  description: string;
  percentage: Number;
  count: any;
  datetimeOfCreation: Date;
  datetimeOfExpire: Date;
}
