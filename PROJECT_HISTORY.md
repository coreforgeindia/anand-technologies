# Anand Technologies Build Log

## Project Timeline Summary

### 1. Initial setup and scaffolding
- Created a Next.js TypeScript app with Tailwind in:
  - `anand-technologies`
- Installed core dependencies:
  - `@supabase/supabase-js`
  - `zod`
- Created baseline folder structure for scalable growth:
  - `app`
  - `src/components`
  - `src/data`
  - `src/hooks`
  - `src/services`
  - `src/types`
  - `src/utils`

### 2. Early page scaffolding
- Added initial pages:
  - Home
  - About
  - Products
  - Industries
  - Custom Solutions
  - Resources
  - Contact
  - Admin
- Added initial API routes:
  - `app/api/enquiry/route.ts`
  - `app/api/products/route.ts`

### 3. Data model and product catalog
- Built structured RF catalog data in `src/data/catalog.ts` with:
  - Main categories
  - Subcategories
  - Products
  - Product technical fields
- Included user provided category and subcategory structure:
  - Low Gain Antenna
  - High Gain Antenna
  - Microwave Devices
  - VHF DVB CDMA GSM GPS IRNSS Combo LTE WIFI PCB RFID FM GLONASS Horn Yagi Patch Panel Attenuator BPF Coupler Duplexer Lightning Arrestor Power Splitter Power Amplifier

### 4. UI and layout implementation
- Built reusable `Navbar` and `Footer`
- Implemented home hero and sectioned content
- Implemented products with:
  - Left side category and subcategory filter flow
  - Product cards
  - Product detail route
- Added contact section with map iframe and enquiry form fields
- Added admin login form UI scaffold

### 5. Styling and theme refinement
- Introduced global CSS tokens and palette based styling
- Refined spacing and section rhythm
- Standardized shared navbar and footer behavior across pages
- Added dark and light theme toggle support

### 6. Language and state management
- Added shared site state in `src/hooks/useSite.tsx`:
  - Language selection
  - Theme state
  - Enquiry list state
- Added language dropdown in navbar for:
  - English
  - Kannada
  - Chinese
- Added enquiry count in navbar and product add to enquiry actions
- Auto filled selected products into contact form

### 7. Content expansion
- Expanded RF specific dummy content across:
  - About
  - Industries
  - Custom Solutions
  - Resources
  - Contact
  - Admin

### 8. Debugging and run issues handled
- Resolved repeated ENOENT confusion by using correct working directory:
  - `C:\Users\Dhanush F G\Desktop\Anand Technologies\anand-technologies`
- Diagnosed Windows EPERM spawn behavior for Next dev
- Identified port conflict with existing process and alternate port behavior
- Lint checks were repeatedly run and passing after fixes

### 9. Git and repository operations
- Connected local project to:
  - `https://github.com/dhanushfg/anand-technologies.git`
- Committed and pushed multiple updates to `master`
- Latest pushed commit in the timeline:
  - `1cb5296`

## Important Notes
- Some advanced backend integrations are still scaffold level and not fully wired:
  - Supabase auth end to end
  - Lead storage and status lifecycle
  - Google Apps Script webhook dispatch
  - Email notifications
- Frontend structure is prepared for these integrations.

## Current Status
- Project exists and runs from the subfolder app root.
- Shared layout and component architecture are in place.
- Product browse and enquiry state flow is implemented at UI level.
- Theme toggle and language selector are implemented.

