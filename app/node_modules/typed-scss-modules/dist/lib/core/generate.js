"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const alerts_1 = require("./alerts");
const list_files_and_perform_sanity_checks_1 = require("./list-files-and-perform-sanity-checks");
const write_file_1 = require("./write-file");
/**
 * Given a file glob generate the corresponding types once.
 *
 * @param pattern the file pattern to generate type definitions for
 * @param options the CLI options
 */
const generate = (pattern, options) => __awaiter(void 0, void 0, void 0, function* () {
    const files = (0, list_files_and_perform_sanity_checks_1.listFilesAndPerformSanityChecks)(pattern, options);
    if (files.length === 0) {
        return;
    }
    alerts_1.alerts.success(`Found ${files.length} file${files.length === 1 ? `` : `s`}. Generating type definitions...`);
    // Wait for all the type definitions to be written.
    yield Promise.all(files.map((file) => (0, write_file_1.writeFile)(file, options)));
});
exports.generate = generate;
