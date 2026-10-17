# WeCove.in — Enterprise Full-Stack Engineering Platform

WeCove is a premier digital engineering and creative technology studio delivering high-performance web systems, interactive 3D WebGL architectures, and resilient cloud backends.

---

## 1. Technology Stack Architecture

### Frontend (Non-Vite Webpack Architecture)
- **Core:** React 18, TypeScript (Strict Mode)
- **Routing:** React Router v6 with direct path access and animated transitions
- **Styling:** Tailwind CSS with custom glassmorphic tokens and glowing palettes
- **Animation & 3D:** Framer Motion, Three.js, React Three Fiber (`@react-three/fiber`), `@react-three/drei`
- **Validation:** Zod client-side schema validation
- **Build System:** Webpack 5, Babel Loader, MiniCssExtractPlugin, PostCSS, Webpack Dev Server with `historyApiFallback: true`
- **Strict Compliance:** Zero Vite usage across all build scripts and configurations.

### Backend (Node.js & Express REST Architecture)
- **Runtime & Framework:** Node.js, Express.js, TypeScript
- **Validation:** Server-side request validation with Zod schemas
- **Database & ORM:** PostgreSQL with Prisma ORM
- **Security:**
  - `helmet` secure HTTP headers
  - `cors` with origin control
  - `express-rate-limit` for rate limiting public endpoints
  - Multi-layer spam defense (honeypot trap + submission timing checks)
  - JWT authentication for protected administration
- **Notifications:** Transactional email dispatch routing to `wecove.in@gmail.com` with internal fallback logging

---

## 2. Directory Structure

```
wecove/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── CaseStudyCard.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero3D.tsx
│   │   │   ├── InquiryForm.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   └── TeamCard.tsx
│   │   ├── layouts/
│   │   │   └── MainLayout.tsx
│   │   ├── pages/
│   │   │   ├── About.tsx
│   │   │   ├── CaseStudyDetail.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── NotFound.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Work.tsx
│   │   ├── routes/
│   │   │   └── AppRoutes.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   └── data.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .env.example
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── webpack.config.js
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── config/
│   │   │   └── env.ts
│   │   ├── controllers/
│   │   │   ├── admin.controller.ts
│   │   │   └── inquiry.controller.ts
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── errorHandler.ts
│   │   │   ├── rateLimiter.ts
│   │   │   └── spamProtection.ts
│   │   ├── routes/
│   │   │   ├── admin.routes.ts
│   │   │   ├── health.routes.ts
│   │   │   └── inquiry.routes.ts
│   │   ├── services/
│   │   │   ├── db.ts
│   │   │   └── email.service.ts
│   │   ├── validators/
│   │   │   ├── admin.validator.ts
│   │   │   └── inquiry.validator.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

---

## 3. Verified Company Information

- **Company Name:** WeCove.in
- **Founder:** Chetan Sharma P
- **Co-founder:** Mallikarjun N
- **Core Engineering Team:** Aryan Koushink, Mohith M S
- **Official Email:** [wecove.in@gmail.com](mailto:wecove.in@gmail.com)
- **Official Phone:** +91 8660534989
- **Location:** Bangalore, India

---

## 4. Environment Variables

### Backend (`backend/.env`)
```bash
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# PostgreSQL Connection (Prisma)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/wecove_db?schema=public"

# Transactional Email Notification Destination
CONTACT_EMAIL=wecove.in@gmail.com
EMAIL_FROM=noreply@wecove.in
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=wecove.in@gmail.com
EMAIL_PASS=your_gmail_app_password

# Administration & Security
JWT_SECRET=wecove_super_secret_jwt_key_2026
ADMIN_INITIAL_USERNAME=admin
ADMIN_INITIAL_PASSWORD=WeCoveAdmin2026!
```

### Frontend (`frontend/.env`)
```bash
API_BASE_URL=http://localhost:5000/api/v1
```

---

## 5. Database Setup (PostgreSQL with Prisma)

1. Ensure your PostgreSQL server is active and accessible via `DATABASE_URL`.
2. Generate Prisma Client:
   ```bash
   cd backend
   npm run prisma:generate
   ```
3. Push or migrate database schema:
   ```bash
   # Development migration
   npx prisma migrate dev --name init_wecove_schema

   # Direct schema push
   npx prisma db push
   ```

---

## 6. Development & Production Commands

### Backend
```bash
cd backend

# Install dependencies
npm install

# Generate Prisma Client
npm run prisma:generate

# Start development server with live reload (nodemon + ts-node)
npm run dev

# Compile TypeScript to production dist
npm run build

# Start production server
npm start
```

### Frontend
```bash
cd frontend

# Install dependencies
npm install

# Start development server on port 3000 (Webpack Dev Server)
npm run dev

# Run TypeScript type check
npm run typecheck

# Build optimized production bundle to dist/
npm run build
```

---

## 7. API Endpoints

- `GET /api/v1/health` — Verifies API health and PostgreSQL connection status.
- `POST /api/v1/inquiries` — Validates submission with Zod, checks honeypot & timing spam defense, applies rate limiter, persists to PostgreSQL via Prisma, and dispatches notification email to `wecove.in@gmail.com`.
- `POST /api/v1/admin/login` — Authenticates administrator, returns JWT token.
- `GET /api/v1/admin/inquiries` — [Protected] Lists submitted inquiries with pagination.
- `GET /api/v1/admin/inquiries/:id` — [Protected] Detailed inquiry view.
- `PATCH /api/v1/admin/inquiries/:id` — [Protected] Updates inquiry status (`PENDING`, `IN_REVIEW`, `CONTACTED`, `ARCHIVED`).
- `POST /api/v1/admin/logout` — Admin logout acknowledgement.

---

## 8. Client Routes (React Router)

- `/` — Studio Flagship Home with interactive 3D hero canvas
- `/services` — Detailed breakdown of 5 core engineering disciplines
- `/work` — Selected architectural concept case studies
- `/work/nova` — Nova concept case study (Spatial Data Engine)
- `/work/flow` — Flow concept case study (Collaborative Workflow Canvas)
- `/work/orbit` — Orbit concept case study (Design System Infrastructure)
- `/work/vertex` — Vertex concept case study (Distributed Edge API & Shield)
- `/process` — Engineering methodology, code quality, and testing
- `/about` — Studio story, leadership, and team members
- `/contact` — Direct consultation inquiry form connected to Express API
- `/*` — 404 Route Not Found
