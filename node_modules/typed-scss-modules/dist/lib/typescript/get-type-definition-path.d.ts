import { ConfigOptions } from "../core";
/**
 * Given a file path to a SCSS file, generate the corresponding type definition
 * file path.
 *
 * @param file the SCSS file path
 */
export declare const getTypeDefinitionPath: (file: string, options: ConfigOptions) => string;
