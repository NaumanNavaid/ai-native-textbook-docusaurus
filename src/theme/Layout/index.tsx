import React, { useState, type ComponentProps } from 'react';
import Layout from '@theme-original/Layout';
import ChatWidget from '../../components/ChatWidget';
import MobileSidebar from '../../components/MobileSidebar';
// @ts-ignore - CustomNavbar is defined in Navbar/index.tsx but we can't easily import it if it's not exported. 
// Actually, NavbarWrapper uses CustomNavbar internally. 
// Wait, I can't easily inject props into the standard Navbar from here if it's wrapped.
// Let's check Navbar/index.tsx again. It exports NavbarWrapper.
// LayoutWrapper wraps Layout. Layout uses Navbar.
// I need to wrap the whole thing or inject it.
// The easiest way is to make NavbarWrapper accept a prop or manage the state itself?
// No, Navbar is inside Layout.
// But wait, the standard Layout renders the Navbar.
// If I want to control a sidebar that is OUTSIDE the Navbar (at root level), I need state here.
// But the trigger is IN the Navbar.
// Docusaurus theme architecture makes this tricky without swizzling Layout fully.
// BUT, I already have a NavbarWrapper in `src/theme/Navbar`.
// I can just add the MobileSidebar *inside* NavbarWrapper!
// Let's revert this file change and go to NavbarWrapper.

type LayoutProps = ComponentProps<typeof Layout>;

export default function LayoutWrapper(props: LayoutProps): React.JSX.Element {
  return (
    <>
      <Layout {...props} />
      <ChatWidget />
    </>
  );
}