declare module "bundler-data:documents" {
  const value: import("./../frontend/shared/data/types").SiteData["documents"];

  export default value;
}

declare module "bundler-data:repos" {
  const value: import("./../frontend/shared/data/types").SiteData["repos"];

  export default value;
}

declare module "bundler-data:roadmap" {
  const value: import("./../frontend/shared/data/types").SiteData["roadmap"];

  export default value;
}

declare module "bundler-data:brandMark" {
  const value: import("./../frontend/shared/data/types").SiteData["brandMark"];

  export default value;
}
