import { ConfigOptions } from "./types";
/**
 * Given a file glob generate the corresponding types once.
 *
 * @param pattern the file pattern to generate type definitions for
 * @param options the CLI options
 */
export declare const generate: (pattern: string, options: ConfigOptions) => Promise<void>;
