export interface ILicense {
  /**
   * Body of the license.
   */
  content: string;
  /**
   * Source package for the license.
   */
  name: string;
  /**
   * Version of the source package for the license
   */
  version: string;

  /**
   * List of node packages that this license applies to.
   */
  dependencies: string[];
}
