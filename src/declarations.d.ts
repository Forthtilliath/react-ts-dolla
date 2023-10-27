import { ComponentPropsWithoutRef } from "react";

declare global {
  declare module "*.mp4" {
    const src: string;
    export default src;
  }

  declare module "*.svg" {
    const src: string;
    export default src;
  }

  type StyledProps<
    Tag extends keyof HTMLElementTagNameMap,
    Props = {}
  > = ComponentPropsWithoutRef<"aside"> & Props;
}

export {};
