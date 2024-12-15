import * as menu from "@zag-js/menu";
import { getContext, setContext } from "svelte";

interface MenuContext {
  api: ReturnType<typeof menu.connect>;
}

const menuKey = Symbol("menu");

export function setMenuContext(value: MenuContext) {
  setContext(menuKey, value);
}

export function getMenuContext(): MenuContext {
  return getContext(menuKey) as MenuContext;
}
