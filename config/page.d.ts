import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";

export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever y,sou don't need
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
