import errors from "./errors.json" with { type: "json" };

/** Error messages shared by apps/api and apps/web. Usage: I18nError.errors.USER_NOT_FOUND */
export const I18nError = errors;

/** Every valid error code, e.g. "USER_NOT_FOUND". */
export type ErrorCode = keyof typeof errors.errors;
