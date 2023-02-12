import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

export type NavLinkProps = {
  href: string;
  exact?: boolean;
  className?: string;
  children: any;
};

NavLink.defaultProps = {
  exact: false,
};

function NavLink({ href, exact, children, ...props }: NavLinkProps) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " ant-menu-item-selected";
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

export default NavLink;
