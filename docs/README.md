# Villa Sekipan - System Documentation

This directory contains Mermaid diagrams documenting the Villa Sekipan booking system architecture and user flows.

## Diagrams Overview

### 1. User Flow Flowcharts

#### `flowchart-guest-booking.mmd`
**Guest Booking Flow**
- Complete end-to-end booking journey from homepage to confirmation
- Shows decision points, validation steps, and payment process
- Includes promo code application flow
- Payment proof upload and submission process

**Key Steps:**
- Homepage → Villa Page → Booking Page
- Date selection & guest information
- Promo code application (optional)
- Review booking summary
- Bank transfer & payment proof upload
- Booking confirmation & waiting for approval

#### `flowchart-owner-dashboard.mmd`
**Owner Dashboard Flow**
- Navigation through 8 dashboard tabs
- Booking approval/rejection process
- Calendar management (view bookings, block dates)
- Pricing editor (base, weekend, special dates)
- User database viewing
- Promo code management

**Key Features:**
- **Dashboard**: Analytics overview (revenue, bookings, stats)
- **Pending**: Review and approve/reject bookings with payment proof
- **Active**: View currently checked-in guests
- **Previous**: Booking history
- **Calendar**: Visual calendar with bookings and blocking capability
- **Pricing**: Base price, weekend rates, special date pricing
- **Users**: Guest database with booking history
- **Promos**: Create and manage promo codes for affiliates

#### `flowchart-affiliate-dashboard.mmd`
**Affiliate Dashboard Flow**
- Navigation through 5 affiliate tabs
- Promo code performance tracking
- Commission earnings monitoring
- Marketing materials access

**Key Features:**
- **Dashboard**: Performance overview (commission, conversions, revenue)
- **Promo Codes**: View all codes, usage stats, copy booking links
- **Bookings**: See all bookings using affiliate codes
- **Earnings**: View confirmed/pending earnings, request payouts
- **Marketing**: Pre-written copy, booking links, image assets

### 2. Sequence Diagram

#### `sequence-diagram-booking-system.mmd`
**Complete System Interaction Flow**
- Shows interaction between all system components
- Guest booking process with React components and context
- Owner approval workflow
- Affiliate tracking and commission calculation
- Backend API calls (future implementation)
- Email notifications flow

**Components:**
- Guest User → Browser/React App
- Booking Context (state management)
- Page components (Booking, Review, Payment, Confirmation)
- Backend API (future)
- Email Service (future)
- Owner Dashboard interaction
- Affiliate Dashboard interaction

### 3. System Architecture

#### `system-architecture.mmd`
**High-Level System Design**
- Complete architecture overview with all components
- Frontend structure (React + TypeScript + Vite)
- Backend API design (future implementation)
- Database schema overview
- External services integration
- Deployment architecture (Netlify + CDN)

**Major Components:**
- **Frontend**: Pages, Components, Context, Routing, Types
- **Backend API**: Booking, Promo, Pricing, Affiliate, Calendar endpoints
- **Services**: Auth, File Upload, Email, Payment Verification
- **Database**: PostgreSQL/MySQL with booking, guest, promo tables
- **Deployment**: Netlify static hosting with CDN
- **External**: Bank API, Email Provider, Cloud Storage (future)

## How to View These Diagrams

### Option 1: GitHub (Recommended)
GitHub natively renders Mermaid diagrams. Simply view these `.mmd` files on GitHub.

### Option 2: VS Code
1. Install the "Markdown Preview Mermaid Support" extension
2. Create a markdown file and embed the diagram:
   ```markdown
   ```mermaid
   [paste diagram content here]
   ```
   ```
3. Use the markdown preview pane

### Option 3: Mermaid Live Editor
1. Go to https://mermaid.live/
2. Copy the content of any `.mmd` file
3. Paste into the editor
4. View, edit, and export as PNG/SVG

### Option 4: Draw.io / Diagrams.net
1. Go to https://app.diagrams.net/
2. Use "Arrange" → "Insert" → "Advanced" → "Mermaid"
3. Paste diagram content

## Diagram Syntax

All diagrams use Mermaid syntax:
- `flowchart TD` - Top-down flowchart
- `sequenceDiagram` - Sequence diagram
- `graph TB` - Graph top-to-bottom

**Flowchart Shapes:**
- `([text])` - Stadium/pill shape (start/end)
- `[text]` - Rectangle (process)
- `{text}` - Diamond (decision)
- `((text))` - Circle

**Color Coding:**
- Green - Start points
- Pink - End points
- Light Blue - Payment/approval steps
- Yellow - Important actions
- Purple - Data management

## Current Implementation Status

### ✅ Implemented (Frontend)
- Guest booking flow (all pages)
- Owner dashboard (all 8 tabs)
- Affiliate dashboard (all 5 tabs)
- Responsive mobile design
- Client-side routing
- State management (Context API)
- TypeScript type safety

### 🔄 Mock Data (Development)
- Booking data
- User data
- Pricing data
- Promo codes
- Analytics

### ⏳ Future Implementation (Backend)
- REST API endpoints
- Database integration
- Authentication system
- File upload service
- Email notifications
- Payment verification
- Bank API integration
- Affiliate commission tracking
- Automated payout system

## Project Technology Stack

**Frontend:**
- React 18
- TypeScript
- Vite (build tool)
- React Router
- Tailwind CSS
- date-fns (date handling)

**Deployment:**
- Netlify (static hosting)
- GitHub (version control)
- CDN (static assets)

**Future Backend:**
- Node.js + Express (suggested)
- PostgreSQL/MySQL (database)
- AWS S3/Cloudinary (file storage)
- SendGrid/Mailgun (email)
- JWT (authentication)

## Related Files

- `/src/pages/*` - All page components
- `/src/components/*` - Reusable UI components
- `/src/contexts/BookingContext.tsx` - State management
- `/src/types/index.ts` - TypeScript type definitions
- `public/_redirects` - Netlify routing configuration

## Questions?

For questions about the system architecture or diagrams, refer to:
1. The actual source code in `/src`
2. These Mermaid diagrams for visual understanding
3. Inline code comments for specific implementation details
