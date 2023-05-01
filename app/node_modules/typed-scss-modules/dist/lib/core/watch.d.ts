import { ConfigOptions } from "./types";
/**
 * Watch a file glob and generate the corresponding types.
 *
 * @param pattern the file pattern to watch for file changes or additions
 * @param options the CLI options
 */
export declare const watch: (pattern: string, options: ConfigOptions) => void;
