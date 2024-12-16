import type { Clerk } from "@clerk/types";
import { writable } from "svelte/store";

export const clerk = writable<Clerk | null>(null);
