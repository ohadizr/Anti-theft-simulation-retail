"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alerts = exports.setAlertsLogLevel = exports.logLevelDefault = exports.LOG_LEVELS = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.LOG_LEVELS = ["verbose", "error", "info", "silent"];
exports.logLevelDefault = "verbose";
let currentLogLevel;
const setAlertsLogLevel = (logLevel) => {
    currentLogLevel = logLevel;
};
exports.setAlertsLogLevel = setAlertsLogLevel;
/**
 * wraps a callback and only calls it if currentLogLevel is undefined or included in permittedLogLevels
 * @param permittedLogLevels list of log levels. callbacks will only be called if current log level is listed here
 * @param cb callback
 */
const withLogLevelsRestriction = (permittedLogLevels, cb) => (...args) => {
    const shouldCall = !currentLogLevel || permittedLogLevels.includes(currentLogLevel);
    if (shouldCall) {
        return cb(...args);
    }
};
const error = withLogLevelsRestriction(["verbose", "error", "info"], (message) => console.log(chalk_1.default.red(message)));
const warn = withLogLevelsRestriction(["verbose"], (message) => console.log(chalk_1.default.yellowBright(message)));
const notice = withLogLevelsRestriction(["verbose", "info"], (message) => console.log(chalk_1.default.gray(message)));
const info = withLogLevelsRestriction(["verbose", "info"], (message) => console.log(chalk_1.default.blueBright(message)));
const success = withLogLevelsRestriction(["verbose", "info"], (message) => console.log(chalk_1.default.green(message)));
exports.alerts = { error, warn, notice, info, success };
