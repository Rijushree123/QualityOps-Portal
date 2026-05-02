# QualityOps Portal

> An Enterprise-Grade Quality Assurance & Employee Management System

![QualityOps](https://img.shields.io/badge/Status-Development-yellow)
![Java](https://img.shields.io/badge/Java-21-red)
![Spring%20Boot](https://img.shields.io/badge/Spring%20Boot-3.5.14-green)
![Angular](https://img.shields.io/badge/Angular-19.2.0-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-blue)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Frontend Architecture](#frontend-architecture)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [Future Enhancements](#future-enhancements)
- [Project Status](#project-status)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**QualityOps Portal** is a comprehensive full-stack web application designed to streamline HR operations and quality assurance management. It provides an integrated platform for employee management, testing operations, defect tracking, and performance analytics.

The application is built with:
- **Backend**: Spring Boot 3.5.14 REST API with JWT-based authentication
- **Frontend**: Modern Angular 19 single-page application (SPA)
- **Database**: PostgreSQL for persistent data storage
- **Architecture**: Microservices-ready, scalable design patterns

### 📸 Application Screenshots

The application features a modern, responsive UI:

1. **Login Interface** - Secure authentication with email and password
2. **Dashboard** - Key metrics display (Total Employees, Open Defects, Pass Rate, Pending Leaves)
3. **Employee Management** - Comprehensive employee listing with search, pagination, and CRUD operations
4. **Navigation** - Intuitive sidebar and top navigation for easy access to all modules

---

## ✨ Features

### ✅ Current Features (Implemented)

#### **User Authentication & Authorization**
- ✔️ User registration (signup)
- ✔️ Secure login with JWT token generation
- ✔️ Password hashing with BCrypt
- ✔️ Role-based access control (RBAC)
- ✔️ Protected routes with authentication guards
- ✔️ Token expiration (24 hours)
- ✔️ Automatic token refresh in HTTP interceptor

#### **Employee Management**
- ✔️ Create new employees with complete information
- ✔️ View all employees with pagination support
- ✔️ Search employees by name (case-insensitive)
- ✔️ View detailed employee information
- ✔️ Update employee records
- ✔️ Delete employees
- ✔️ Track employee department, designation, salary, and joining date
- ✔️ Employee status tracking (ACTIVE/INACTIVE)

#### **User Interface**
- ✔️ Responsive design (desktop, tablet, mobile)
- ✔️ Toast notifications for user feedback
- ✔️ Sidebar navigation with active route highlighting
- ✔️ Top navigation bar with user profile and logout
- ✔️ Loading states and error handling
- ✔️ Clean, modern UI with professional styling

#### **Backend Services**
- ✔️ RESTful API endpoints
- ✔️ CORS configuration for frontend integration
- ✔️ Global exception handling with meaningful error messages
- ✔️ Input validation and sanitization
- ✔️ Database transaction management
- ✔️ Health check endpoint
- ✔️ Paginated results for large datasets

### 🚧 Planned Features (In Development)

#### **HR Operations**
- 🔲 Leave request management
- 🔲 Department management
- 🔲 Employee attendance tracking
- 🔲 Employee performance evaluations

#### **Quality Testing Module**
- 🔲 Test case creation and management
- 🔲 Test execution and run tracking
- 🔲 Defect logging and tracking
- 🔲 Bug severity and priority classification
- 🔲 Test coverage reports
- 🔲 Defect lifecycle management

#### **Reporting & Analytics**
- 🔲 Employee reports with filters
- 🔲 Quality metrics and analytics
- 🔲 Pass rate analysis
- 🔲 Defect trend analysis
- 🔲 Custom report generation
- 🔲 Export to PDF/Excel

#### **Advanced Features**
- 🔲 Real-time notifications
- 🔲 Email notifications
- 🔲 Audit logging
- 🔲 User activity tracking
- 🔲 Multi-user support and permissions
- 🔲 File uploads and attachments

---

## 🛠️ Technology Stack

### Backend

| Component | Technology | Version |
|-----------|-----------|---------|
| **Runtime** | Java | 21 |
| **Framework** | Spring Boot | 3.5.14 |
| **Security** | Spring Security + JWT | 0.12.5 |
| **ORM** | Spring Data JPA + Hibernate | Latest |
| **Database Driver** | PostgreSQL JDBC | Latest |
| **Validation** | Spring Validation | Latest |
| **Utilities** | Lombok | Latest |
| **Build Tool** | Maven | 3.x |
| **Testing** | JUnit 5, Mockito | Latest |

### Frontend

| Component | Technology | Version |
|-----------|-----------|---------|
| **Framework** | Angular | 19.2.0 |
| **Language** | TypeScript | 5.7.2 |
| **Styling** | SCSS | Latest |
| **Reactive Library** | RxJS | 7.8.0 |
| **HTTP Client** | Angular HttpClient | 19.2.0 |
| **Routing** | Angular Router | 19.2.0 |
| **Testing** | Jasmine / Karma | Latest |
| **Build Tool** | Angular CLI / Webpack | 19.2.9 |

### Infrastructure

| Component | Technology |
|-----------|-----------|
| **Database** | PostgreSQL (v12+) |
| **Server** | Apache Tomcat (embedded in Spring Boot) |
| **Authentication** | JWT (JSON Web Tokens) |
| **API Format** | RESTful with JSON |

---

## 📁 Project Structure

```
QualityOps-Portal/
│
├── backend/
│   └── qualityops-api/                          # Spring Boot REST API
│       ├── pom.xml                              # Maven dependencies
│       ├── mvnw / mvnw.cmd                       # Maven wrapper (cross-platform)
│       ├── HELP.md                              # Backend documentation
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/com/qualityops/portal/
│       │   │   │   ├── QualityopsApiApplication.java    # Application entry point
│       │   │   │   ├── controller/                       # REST endpoints
│       │   │   │   │   ├── AuthController.java          # Authentication endpoints
│       │   │   │   │   ├── EmployeeController.java      # Employee CRUD endpoints
│       │   │   │   │   ├── HealthController.java        # Health check
│       │   │   │   │   └── TestController.java          # Test endpoints
│       │   │   │   ├── service/                         # Business logic
│       │   │   │   │   └── EmployeeService.java        # Employee operations
│       │   │   │   ├── entity/                          # JPA entities
│       │   │   │   │   ├── User.java                   # User entity
│       │   │   │   │   └── Employee.java               # Employee entity
│       │   │   │   ├── repository/                      # Data access layer
│       │   │   │   │   ├── UserRepository.java         # User CRUD
│       │   │   │   │   └── EmployeeRepository.java     # Employee CRUD
│       │   │   │   ├── security/                        # JWT & security
│       │   │   │   │   ├── JwtUtil.java                # Token generation/validation
│       │   │   │   │   └── JwtAuthFilter.java          # Token extraction & validation
│       │   │   │   ├── config/                          # Configuration beans
│       │   │   │   │   ├── CorsConfig.java             # CORS setup
│       │   │   │   │   ├── SecurityConfig.java         # Spring Security config
│       │   │   │   │   └── SecurityBeansConfig.java    # Security beans
│       │   │   │   ├── dto/                             # Data Transfer Objects
│       │   │   │   │   ├── LoginRequest.java
│       │   │   │   │   ├── RegisterRequest.java
│       │   │   │   │   └── EmployeeRequest.java
│       │   │   │   └── exception/                       # Exception handling
│       │   │   │       ├── BadRequestException.java
│       │   │   │       └── GlobalExceptionHandler.java
│       │   │   └── resources/
│       │   │       ├── application.yaml                 # Application configuration
│       │   │       ├── static/                          # Static files
│       │   │       └── templates/                       # HTML templates
│       │   └── test/
│       │       └── java/com/qualityops/portal/         # Unit and integration tests
│       └── target/                              # Build output (compiled classes)
│
├── frontend/
│   └── qualityops-ui/                           # Angular SPA
│       ├── package.json                         # NPM dependencies
│       ├── angular.json                         # Angular CLI configuration
│       ├── tsconfig.json                        # TypeScript configuration (shared)
│       ├── tsconfig.app.json                    # TypeScript app-specific config
│       ├── tsconfig.spec.json                   # TypeScript testing config
│       ├── README.md                            # Frontend documentation
│       ├── public/                              # Public assets (favicon, etc.)
│       └── src/
│           ├── index.html                       # Main HTML file
│           ├── main.ts                          # Application entry point
│           ├── styles.scss                      # Global styles
│           └── app/
│               ├── app.component.*              # Root component
│               ├── app.config.ts                # Angular configuration with providers
│               ├── app.routes.ts                # Application routing
│               │
│               ├── core/                        # Core services & guards (singleton)
│               │   ├── services/
│               │   │   ├── auth.service.ts     # Authentication logic
│               │   │   ├── employee.service.ts # Employee API calls
│               │   │   └── toast.service.ts    # Toast notifications
│               │   ├── guards/
│               │   │   └── auth.guard.ts       # Route protection
│               │   └── interceptors/
│               │       └── auth.interceptor.ts # Token injection
│               │
│               ├── features/                    # Feature modules
│               │   ├── dashboard/
│               │   │   ├── dashboard.component.html
│               │   │   ├── dashboard.component.scss
│               │   │   ├── dashboard.component.spec.ts
│               │   │   └── dashboard.component.ts
│               │   └── employee-list/
│               │       ├── employee-list.component.html
│               │       ├── employee-list.component.scss
│               │       └── employee-list.component.ts
│               │
│               ├── layout/                      # Layout components (shared)
│               │   ├── main-layout/             # Shell layout
│               │   │   ├── main-layout.component.html
│               │   │   ├── main-layout.component.scss
│               │   │   ├── main-layout.component.spec.ts
│               │   │   └── main-layout.component.ts
│               │   ├── navbar/                  # Top navigation bar
│               │   │   ├── navbar.component.html
│               │   │   ├── navbar.component.scss
│               │   │   ├── navbar.component.spec.ts
│               │   │   └── navbar.component.ts
│               │   └── sidebar/                 # Side navigation
│               │       ├── sidebar.component.html
│               │       ├── sidebar.component.scss
│               │       ├── sidebar.component.spec.ts
│               │       └── sidebar.component.ts
│               │
│               ├── pages/                       # Page components
│               │   ├── login/
│               │   │   ├── login.component.html
│               │   │   ├── login.component.scss
│               │   │   ├── login.component.spec.ts
│               │   │   └── login.component.ts
│               │   ├── signup/
│               │   │   └── signup.component.*
│               │   ├── employee-detail/
│               │   │   └── employee-detail.component.*
│               │   └── layout/
│               │
│               └── toast/                       # Notification component
│                   ├── toast.component.html
│                   ├── toast.component.scss
│                   ├── toast.component.spec.ts
│                   └── toast.component.ts
│
└── README.md                                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

**Backend Requirements:**
- [Java Development Kit (JDK) 21](https://adoptopenjdk.net/)
- [Maven 3.6+](https://maven.apache.org/) (or use the included `mvnw` wrapper)
- [PostgreSQL 12+](https://www.postgresql.org/download/)

**Frontend Requirements:**
- [Node.js 18+ (includes npm)](https://nodejs.org/)
- [Angular CLI 19.2.9](https://angular.io/cli) - Install globally: `npm install -g @angular/cli`

### System Requirements

- **OS**: Windows, macOS, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: 2GB free for dependencies and build artifacts

---

## 💾 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/QualityOps-Portal.git
cd QualityOps-Portal
```

### Step 2: Setup PostgreSQL Database

1. **Create Database:**
   ```sql
   -- Connect to PostgreSQL and create the database
   CREATE DATABASE qualityops_db;
   
   -- Connect to the new database
   \c qualityops_db
   
   -- Tables will be auto-created by Hibernate with ddl-auto: update
   ```

2. **Verify Connection:**
   ```bash
   psql -U postgres -d qualityops_db
   ```

### Step 3: Backend Setup

```bash
cd backend/qualityops-api

# Using Maven wrapper (recommended - cross-platform)
./mvnw clean install

# OR using system Maven
maven clean install

# Build the project
./mvnw clean package
```

### Step 4: Frontend Setup

```bash
cd frontend/qualityops-ui

# Install dependencies
npm install

# Verify installation
ng version
```

---

## ⚙️ Configuration

### Backend Configuration

Edit `backend/qualityops-api/src/main/resources/application.yaml`:

```yaml
server:
  port: 8080                              # API port

spring:
  application:
    name: qualityops-api                 # App name
  
  datasource:
    url: jdbc:postgresql://localhost:5432/qualityops_db    # Database URL
    username: postgres                   # Database user
    password: admin                      # Database password
    driver-class-name: org.postgresql.Driver
  
  jpa:
    hibernate:
      ddl-auto: update                   # Auto-create/update tables
    show-sql: true                       # Log SQL queries
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        format_sql: true
  
  # CORS configuration handled in CorsConfig.java
  # Allows requests from http://localhost:4200 (Angular frontend)

# JWT Configuration (in JwtUtil.java)
# - Secret: Change in production
# - Expiration: 24 hours (86400000 ms)
```

### Frontend Configuration

Edit `frontend/qualityops-ui/src/app/core/services/auth.service.ts` and `employee.service.ts`:

```typescript
// API Base URL configuration
private apiUrl = 'http://localhost:8080/api';

// All HTTP calls automatically include JWT token via authInterceptor
```

### JWT Security Notes

⚠️ **Important**: In `backend/qualityops-api/src/main/java/com/qualityops/portal/security/JwtUtil.java`, update the secret key for production:

```java
// Current: Basic secret (development only)
private static final String SECRET_KEY = "your-secret-key-change-this-in-production";

// For production, use environment variable:
private static final String SECRET_KEY = System.getenv("JWT_SECRET_KEY");
```

---

## ▶️ Running the Application

### Option 1: Terminal Approach (Recommended for Development)

**Terminal 1 - Start Backend:**
```bash
cd backend/qualityops-api

# Run with Maven wrapper
./mvnw spring-boot:run

# OR with system Maven
mvn spring-boot:run

# Output: Server starts at http://localhost:8080
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend/qualityops-ui

# Start Angular development server
ng serve

# OR
npm start

# Output: App runs at http://localhost:4200
```

### Option 2: IDE Approach

#### **IntelliJ IDEA / Eclipse (Backend)**
1. Open the project
2. Navigate to `backend/qualityops-api`
3. Right-click `QualityopsApiApplication.java`
4. Select "Run"

#### **VS Code (Frontend)**
1. Open the project
2. Navigate to `frontend/qualityops-ui`
3. Open Terminal
4. Run `ng serve`
5. Open browser to `http://localhost:4200`

### Option 3: Production Build

**Backend:**
```bash
cd backend/qualityops-api
./mvnw clean package
java -jar target/qualityops-api-*.jar
```

**Frontend:**
```bash
cd frontend/qualityops-ui
ng build --configuration production
# Serves files from dist/qualityops-ui/
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:8080/api
```

### Authentication Endpoints

#### Register New User
```http
POST /api/auth/signup
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "SecurePassword123"
}

Response: 201 Created
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "fullName": "John Doe",
    "email": "john@example.com",
    "role": "EMPLOYEE"
  }
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePassword123"
}

Response: 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "email": "john@example.com",
  "role": "EMPLOYEE"
}
```

### Employee Endpoints (All require JWT token)

#### Get All Employees (Paginated)
```http
GET /api/employees?page=0&size=5
Authorization: Bearer {token}

Response: 200 OK
{
  "content": [
    {
      "id": 1,
      "name": "Riya Sharma",
      "email": "riya@gmail.com",
      "department": "QA",
      "designation": "Tester",
      "salary": 50000.00,
      "joiningDate": "2024-01-10",
      "status": "ACTIVE"
    }
  ],
  "totalElements": 5,
  "totalPages": 1,
  "number": 0,
  "size": 5
}
```

#### Get Employee by ID
```http
GET /api/employees/{id}
Authorization: Bearer {token}

Response: 200 OK
{
  "id": 1,
  "name": "Riya Sharma",
  "email": "riya@gmail.com",
  "department": "QA",
  "designation": "Tester",
  "salary": 50000.00,
  "joiningDate": "2024-01-10",
  "status": "ACTIVE"
}
```

#### Create Employee
```http
POST /api/employees
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "New Employee",
  "email": "new@gmail.com",
  "department": "IT",
  "designation": "Software Engineer",
  "salary": 75000.00,
  "joiningDate": "2024-05-01",
  "status": "ACTIVE"
}

Response: 201 Created
```

#### Update Employee
```http
PUT /api/employees/{id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Updated Name",
  "department": "Development",
  "designation": "Senior Software Engineer",
  "salary": 95000.00,
  "status": "ACTIVE"
}

Response: 200 OK
```

#### Delete Employee
```http
DELETE /api/employees/{id}
Authorization: Bearer {token}

Response: 204 No Content
```

#### Search Employees by Name
```http
GET /api/employees/search?name=Riya
Authorization: Bearer {token}

Response: 200 OK
[
  {
    "id": 1,
    "name": "Riya Sharma",
    "email": "riya@gmail.com",
    ...
  }
]
```

### Health Check Endpoint (Public)
```http
GET /api/health

Response: 200 OK
{
  "status": "UP"
}
```

### Error Responses

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "details": "Email already exists"
}
```

---

## 🎨 Frontend Architecture

### Standalone Components (Angular 19+)

All components are standalone with explicit provider declarations in `app.config.ts`:

```typescript
// app.routes.ts structure
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employees', component: EmployeeListComponent },
      // ... more routes
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '/login' }
];
```

### Services Architecture

**AuthService**: Manages user authentication and token storage
```typescript
- login(data): Observable<LoginResponse>
- signup(data): Observable<SignupResponse>
- saveToken(token): void
- getToken(): string | null
- logout(): void
- isAuthenticated(): boolean
```

**EmployeeService**: Handles all employee API calls
```typescript
- getAllEmployees(page, size): Observable<PageResponse<Employee>>
- getEmployeeById(id): Observable<Employee>
- createEmployee(employee): Observable<Employee>
- updateEmployee(id, employee): Observable<Employee>
- deleteEmployee(id): Observable<void>
- searchEmployees(name): Observable<Employee[]>
```

**ToastService**: Notification management
```typescript
- showSuccess(message): void
- showError(message): void
- getToasts(): Observable<Toast[]>
```

### Guards & Interceptors

**authGuard**: Protects routes requiring authentication
- Checks localStorage for JWT token
- Redirects to login if token missing
- Prevents unauthorized access

**authInterceptor**: Automatically adds JWT to requests
- Injects `Authorization: Bearer {token}` header
- Runs on all HTTP requests except public endpoints
- Handles 401 responses (token expiration)

---

## 🗄️ Database Schema

### User Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'EMPLOYEE',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Employee Table
```sql
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  department VARCHAR(100),
  designation VARCHAR(100),
  salary DECIMAL(10, 2),
  joining_date DATE,
  status VARCHAR(50) DEFAULT 'ACTIVE',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Note:** Tables are automatically created by Hibernate when the application starts (see `application.yaml` with `ddl-auto: update`).

---

## 🔐 Authentication & Security

### JWT Token Details

- **Algorithm**: HMAC SHA-256
- **Expiration**: 24 hours
- **Format**: `Authorization: Bearer {token}`
- **Storage**: Browser LocalStorage (frontend)

### Security Features Implemented

✅ Password hashing with BCrypt
✅ CORS protection (only localhost:4200 allowed)
✅ JWT token validation on every request
✅ Input validation and sanitization
✅ SQL injection prevention via ORM
✅ Protected routes with guards
✅ Secure error handling (no sensitive data leaked)

### CORS Configuration

```java
// Allows requests from:
allowedOrigins: http://localhost:4200
allowedMethods: GET, POST, PUT, DELETE, OPTIONS
allowedHeaders: *
allowCredentials: true
```

### Login Flow

```
1. User enters credentials → LoginComponent
2. POST /api/auth/login → Backend
3. Backend validates → AuthController
4. JWT token generated → JwtUtil
5. Token returned to frontend
6. Frontend stores token → LocalStorage
7. Token added to all requests → authInterceptor
```

---

## 🚧 Future Enhancements

### Phase 2: Quality Testing Module
- Test case management interface
- Test execution and results tracking
- Defect logging system
- Bug lifecycle management
- Test coverage metrics

### Phase 3: Advanced HR Features
- Leave request workflow with approval process
- Attendance tracking with calendar view
- Performance evaluation system
- Payroll management
- Organization hierarchy visualization

### Phase 4: Analytics & Reporting
- Custom dashboard with configurable widgets
- Advanced filtering and search
- Export reports to PDF/Excel
- Real-time analytics with charts
- Email report delivery

### Phase 5: DevOps & Infrastructure
- Containerization (Docker)
- Kubernetes deployment configuration
- CI/CD pipeline setup
- Automated testing
- Performance monitoring
- Load balancing

### Phase 6: User Experience
- Mobile app (React Native or Flutter)
- Dark mode support
- Multilingual support (i18n)
- Advanced search with filters
- Bulk operations support

---

## 📊 Project Status

### Development Stage: **ACTIVE - Core Features Complete**

| Feature | Status | Completion |
|---------|--------|-----------|
| User Authentication | ✅ Complete | 100% |
| Employee Management | ✅ Complete | 100% |
| Dashboard (UI Framework) | ✅ Complete | 100% |
| API Backend | ✅ Complete | 100% |
| Frontend UI | ✅ Complete | 100% |
| JWT Security | ✅ Complete | 100% |
| **Quality Testing Module** | 🔲 Not Started | 0% |
| **Leave Management** | 🔲 Not Started | 0% |
| **Department Management** | 🔲 Not Started | 0% |
| **Advanced Reporting** | 🔲 Not Started | 0% |
| **Real-time Notifications** | 🔲 Not Started | 0% |
| **Mobile App** | 🔲 Planned | 0% |

### Known Limitations (To Be Addressed)

- ⚠️ Email notifications not yet implemented
- ⚠️ Audit logging not implemented
- ⚠️ File upload functionality not available
- ⚠️ Bulk operations not supported
- ⚠️ Advanced filtering options limited
- ⚠️ No offline support
- ⚠️ Single user per session (no concurrent sessions)

---

## 🧪 Testing

### Backend Testing

```bash
cd backend/qualityops-api

# Run all tests
./mvnw test

# Run specific test class
./mvnw test -Dtest=EmployeeServiceTest

# With coverage report
./mvnw test jacoco:report
```

### Frontend Testing

```bash
cd frontend/qualityops-ui

# Run unit tests
ng test

# Run with coverage
ng test --code-coverage

# Run E2E tests
ng e2e
```

---

## 📝 Development Guidelines

### Code Style

**Backend (Java):**
- Follow Google Java Style Guide
- Use meaningful variable names
- Add Javadoc for public methods
- Maximum line length: 120 characters

**Frontend (TypeScript):**
- Follow Angular style guide
- Use Angular CLI conventions
- Type all variables and function parameters
- Use async/await over promises where possible

### Branch Naming Convention

```
feature/description
bugfix/description
enhancement/description
hotfix/description
```

### Commit Message Format

```
[TYPE] Brief description

Longer explanation if needed
- Bullet point 1
- Bullet point 2

Fixes #123
```

### Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository** on GitHub
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Commit changes**: `git commit -m "[feat] Your feature description"`
4. **Push to branch**: `git push origin feature/your-feature`
5. **Submit a Pull Request** with detailed description

### Pull Request Guidelines

- Ensure all tests pass
- Update documentation
- Follow code style guidelines
- Include screenshots for UI changes
- Reference related issues with `Fixes #123`

---

## 🐛 Troubleshooting

### Common Issues

#### Database Connection Failed
```
Error: Connection refused to localhost:5432
```
**Solution:**
```bash
# Verify PostgreSQL is running
# Windows: Check Services for PostgreSQL
# macOS: brew services list | grep postgres
# Linux: sudo service postgresql status

# Verify database exists
psql -U postgres -l | grep qualityops_db

# Create if missing
createdb -U postgres qualityops_db
```

#### Port 8080 Already in Use
```
Port 8080 already in use
```
**Solution:** Change port in `application.yaml`:
```yaml
server:
  port: 8081  # Use different port
```

#### Token Expired Error
```
401 Unauthorized: Token expired
```
**Solution:** Login again to get a new token. Tokens expire after 24 hours.

#### CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:** Ensure backend is running and CORS is properly configured for `http://localhost:4200`

#### Module Not Found (Frontend)
```
npm ERR! ERESOLVE unable to resolve dependency tree
```
**Solution:**
```bash
cd frontend/qualityops-ui
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Additional Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Angular Documentation](https://angular.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [JWT Best Practices](https://tools.ietf.org/html/rfc7519)
- [RESTful API Design Guide](https://restfulapi.net/)
- [OWASP Security Guidelines](https://owasp.org/)

---

## 📄 License

This project is currently **not licensed** and all rights are reserved. For licensing information, please contact the project maintainer.

**Note:** If you plan to open-source this project, consider choosing an appropriate license (MIT, Apache 2.0, GPL, etc.).

---

## 👥 Project Maintainer

**Your Name / Team Name**
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com)

---

## 📞 Support & Contact

For issues, questions, or suggestions:

1. **GitHub Issues**: [Create an issue](https://github.com/yourusername/QualityOps-Portal/issues)
2. **Email**: your.email@example.com
3. **Discord**: [Join our community](#)

---

## 🙏 Acknowledgments

- Spring Boot team for the amazing framework
- Angular team for the modern web framework
- PostgreSQL community for reliable database
- All contributors and supporters

---

## 🎯 Roadmap

### Q2 2026
- [ ] Test case management module
- [ ] Defect tracking system
- [ ] Basic reporting dashboard

### Q3 2026
- [ ] Leave request workflow
- [ ] Department management
- [ ] Email notifications

### Q4 2026
- [ ] Mobile application
- [ ] Advanced analytics
- [ ] Performance optimization

---

**Last Updated**: May 3, 2026  
**Status**: Under Active Development  
**Version**: 0.1.0-alpha

---

<div align="center">

**[⬆ back to top](#qualityops-portal)**

Made with ❤️ by the QualityOps Team

</div>
