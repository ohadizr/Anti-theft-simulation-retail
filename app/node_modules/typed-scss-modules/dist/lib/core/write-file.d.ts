import { CLIOptions } from "./types";
/**
 * Given a single file generate the proper types.
 *
 * @param file the SCSS file to generate types for
 * @param options the CLI options
 */
export declare const writeFile: (file: string, options: CLIOptions) => Promise<void>;
