// All user-facing text for the monorepo lives here, so web and api never drift apart.
import errors from "./errors.json" with { type: "json" };
import success from "./success.json" with { type: "json" };
import ui from "./ui.json" with { type: "json" };

/** Error messages (used by api responses and web forms). e.g. I18nError.errors.USER_NOT_FOUND */
export const I18nError = errors;

/** API success messages. e.g. I18nSuccess.success.LOGIN_SUCCESS */
export const I18nSuccess = success;

/** Web UI text. e.g. I18nUI.sideBar.dashboard */
export const I18nUI = ui;

export type ErrorCode = keyof typeof errors.errors;
export type SuccessCode = keyof typeof success.success;
