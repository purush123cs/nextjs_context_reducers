/*
export type Size =
  | "XXXL"
  | "XXL"
  | "XL"
  | "L"
  | "M"
  | "S"
  | "XS"
  | "XXS"
  | "XXXS";
export type HeadingSize = Exclude<Size, "XXXL" | "XXS" | "XXXS">;
export type ButtonSize = Exclude<Size, "XXXL" | "XXL" | "XL" | "XXS" | "XXXS">;
export type HeadingGraphic = "stroke" | "star";
export type NotificationType = "error" | "warn" | "success" | "info";

export type BtnType = "submit" | "reset" | "button" | undefined;

export interface ModalPopupTypes {
  isShowPopup?: boolean;
  isShowAdjustment?: boolean;
  onCloseModal: (isShowPopup: boolean) => void;
  type?: string;
  confirmCTAtext: string;
  actionHandler: (action: string | undefined) => void;
  adjData?: any;
}

export interface PaymentRunConfigType {
  country: { countryCode: string; countryName: string }[];
  catalogueType: { shortName: string; fullName: string }[];
  paymentFrequency: string[];
}

export interface PaymentDataType {
  value: string;
  label: string;
}

export interface PayAdjustmentDataType {
  value: string;
  label: string;
  name: string;
}
export enum ExportFileTypes {
  Bank_File = "bank-file",
  Paid_File = "paid-file",
}

export interface RefundRequestType {
  purchaseId: number;
  refundId: number;
  purchaseDate: string;
  catalogueType: string;
  paymentType: string;
  voucherNo: string;
  customerName: string;
  submittedBy: string;
  submittedReason: string;
  submittedComments: string;
  requestAmount: number;
  submittedDate: string;
  status: string;
  type: string;
  isAgentRefund: boolean;
}

export interface RefundRequestResultType {
  results: RefundRequestType[];
  refundCount: number;
  error?: boolean;
  redirect?: boolean;
}
*/