import { configRecord, configText, packageConfig } from "./package_config";

const configProduct = configRecord(packageConfig.product);
const productWebsite = configText(configProduct.website);
const productName = configText(configProduct.displayName);
const productDomain = productWebsite ? new URL(productWebsite).hostname : "";
const configLinks = configRecord(packageConfig.links);
const configContacts = configRecord(packageConfig.contacts);
const productEmail = configText(configContacts.general);

export const product = Object.freeze({
    name: productName || "Product",
    domain: productDomain || "example.net",
    email: productEmail || "hello@example.net",
});

export const contact = Object.freeze({
    abuse: configText(configContacts.abuse) || productEmail,
    careers: configText(configContacts.careers) || productEmail,
    general: configText(configContacts.general) || productEmail,
    legal: configText(configContacts.legal) || productEmail,
    security: configText(configContacts.security) || productEmail,
    support: configText(configContacts.support) || productEmail,
});

export const link = Object.freeze({
    github: configText(configLinks.github),
    linkedin: configText(configLinks.linkedin),
    x: configText(configLinks.x),
});
