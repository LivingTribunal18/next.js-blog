import { Fragment } from "react";
import MainNavigation from "./mainNavigation";

export default function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}
