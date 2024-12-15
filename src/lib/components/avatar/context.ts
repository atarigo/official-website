import * as avatar from "@zag-js/avatar";
import { getContext, setContext } from "svelte";

interface AvatarContext {
  api: ReturnType<typeof avatar.connect>;
}

const avatarKey = Symbol("avatar");

export function setAvatarContext(value: AvatarContext) {
  setContext(avatarKey, value);
}

export function getAvatarContext(): AvatarContext {
  return getContext(avatarKey) as AvatarContext;
}
