import { contact } from "./../../shared/product";

export type ContactAddress = { address: string; key: string };

const order = ["general", "support", "careers", "security", "legal", "abuse"] as const;

export const contactAddresses: ContactAddress[] = order.map((key) => ({
      address: contact[key],
      key,
}));
