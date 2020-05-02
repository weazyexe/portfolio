import { writable } from "svelte/store";

export const PREVIEW_PAGE_STATE = "PREVIEW_PAGE_STATE";
export const INFO_PAGE_STATE = "INFO_PAGE_STATE";
export const PROJECTS_PAGE_STATE = "PROJECTS_PAGE_STATE";

export const pageState = writable(PREVIEW_PAGE_STATE);