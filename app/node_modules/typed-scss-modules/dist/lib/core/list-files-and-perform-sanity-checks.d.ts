import { ConfigOptions } from "./types";
/**
 * Return the files matching the given pattern and alert the user if only 0 or 1
 * files matched.
 *
 * @param pattern the file pattern to generate type definitions for
 * @param options the CLI options
 */
export declare function listFilesAndPerformSanityChecks(pattern: string, options: ConfigOptions): string[];
