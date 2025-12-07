# Mobile Sidebar Testing Guide

## Test Steps for Mobile Sidebar Navigation

### 1. Main Site Navigation
- Open the site on mobile or use browser dev tools to simulate mobile view
- Tap the hamburger menu
- Verify main navigation items appear: Home, Chapters, Documentation, Blog
- Verify closing functionality works

### 2. Book Chapter Pages
- Navigate to any book chapter (e.g., /docs/part-1-foundations/chapter-1-what-is-physical-ai)
- On mobile view, tap the hamburger menu
- Verify the menu shows "Book Contents" as the title
- Verify navigation structure:
  - Home
  - Introduction
  - Part 1: Foundations (expandable)
    - 1. What is Physical AI?
    - 2. Embodied Intelligence
    - 3. Sensors, Actuators & Physical Limits
  - Part 2: ROS Fundamentals (expandable)
    - [all chapters listed]
  - etc.

### 3. Expand/Collapse Functionality
- Tap on a part to expand/collapse chapter list
- Verify smooth animation
- Verify chevron icon rotates when expanded
- Verify active chapter is highlighted

### 4. Responsive Behavior
- Test on different mobile screen sizes
- Verify sidebar doesn't overlap with content when closed
- Verify backdrop prevents scrolling of main content
- Verify sidebar scrolls internally if content is long

### 5. Breadcrumb Testing
- Verify breadcrumbs appear on book pages
- Verify breadcrumb structure: Home > Book > Part X: Title > Chapter Y: Title
- Verify breadcrumb links work correctly
- Verify responsive behavior on small screens

## Common Issues & Fixes

1. **Wrong navigation showing**: Check the page detection logic in usePageDetection hook
2. **Sidebar not closing**: Ensure onClose callback is properly passed
3. **Z-index issues**: Verify menu has z-index of 10000
4. **Scroll issues**: Check body overflow is being managed properly

## Deployment Verification

After deployment to GitHub Pages:
1. Open the deployed site on mobile device
2. Test all functionality mentioned above
3. Verify no console errors
4. Check performance on mobile network