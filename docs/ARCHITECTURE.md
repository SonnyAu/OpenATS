# OpenATS Architecture

This document describes the architecture and design decisions for the OpenATS project.

## Overview

OpenATS is designed as a modern web application following best practices for scalability, maintainability, and developer experience.

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         User Browser                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTPS
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    AWS CloudFront (CDN)                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │
┌────────────────────────▼────────────────────────────────────┐
│              Application Load Balancer (ALB)                 │
└────────────┬────────────────────────────┬───────────────────┘
             │                            │
             │                            │
┌────────────▼──────────┐    ┌───────────▼──────────────────┐
│  Frontend (Next.js)   │    │   Backend API (Future)       │
│  - ECS Fargate        │    │   - ECS Fargate              │
│  - Docker Container   │    │   - Docker Container         │
└────────────┬──────────┘    └───────────┬──────────────────┘
             │                            │
             │                            │
             └────────────┬───────────────┘
                          │
                          │
          ┌───────────────┼───────────────┐
          │               │               │
┌─────────▼────────┐ ┌───▼────────┐ ┌───▼──────────┐
│  S3 (Resumes)    │ │ RDS (Data) │ │ ElastiCache  │
└──────────────────┘ └────────────┘ └──────────────┘
```

## Technology Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **State Management**: React Hooks
- **Deployment**: Docker container on AWS ECS Fargate

### Backend (To Be Implemented)
- **API Framework**: To be determined (Node.js/Express, Python/FastAPI, or Go)
- **Resume Parsing**: PDF/DOCX parsing libraries
- **NLP**: Natural Language Processing for keyword extraction
- **Database**: PostgreSQL via AWS RDS
- **Caching**: Redis via AWS ElastiCache

### Infrastructure
- **Containerization**: Docker
- **Orchestration**: AWS ECS with Fargate
- **IaC**: Terraform
- **CI/CD**: GitHub Actions
- **Cloud Provider**: AWS

## Component Architecture

### Frontend (Current)

```
frontend/
├── src/app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page component
│   ├── upload/
│   │   └── page.tsx        # Resume upload interface
│   └── results/
│       └── page.tsx        # Analysis results display
├── globals.css             # Global styles and Tailwind
├── Dockerfile              # Multi-stage Docker build
└── next.config.ts          # Next.js configuration
```

### Backend (Planned)

```
backend/ (To be created)
├── src/
│   ├── api/                # REST API endpoints
│   ├── services/           # Business logic
│   │   ├── parser/         # Resume parsing service
│   │   ├── analyzer/       # ATS analysis service
│   │   └── scorer/         # Scoring algorithm
│   ├── models/             # Data models
│   ├── utils/              # Utility functions
│   └── config/             # Configuration
├── tests/                  # Unit and integration tests
├── Dockerfile
└── requirements.txt
```

## Design Patterns

### Frontend Patterns

1. **Component-Based Architecture**
   - Reusable, self-contained components
   - Props for configuration
   - Client components for interactivity

2. **File-Based Routing**
   - Next.js App Router
   - Nested layouts
   - Server and client components

3. **Responsive Design**
   - Mobile-first approach
   - TailwindCSS breakpoints
   - Flexible grid layouts

### Infrastructure Patterns

1. **Multi-Stage Docker Builds**
   - Separate build and runtime stages
   - Minimal production image size
   - Security-focused (non-root user)

2. **Infrastructure as Code**
   - Terraform for all infrastructure
   - Modular design with reusable modules
   - Environment-specific variables

3. **Immutable Infrastructure**
   - Containers instead of long-lived servers
   - Deploy new versions, don't update existing
   - Easy rollback capabilities

## Data Flow

### Resume Upload Flow (Current Mock)

```
1. User uploads resume + job description
   │
   ▼
2. Frontend validates file
   │
   ▼
3. Form submission
   │
   ▼
4. Navigate to results page
   │
   ▼
5. Display mock analysis data
```

### Resume Upload Flow (Planned)

```
1. User uploads resume + job description
   │
   ▼
2. Frontend sends to API
   │
   ▼
3. Backend stores file in S3
   │
   ▼
4. Resume parsing service extracts text
   │
   ▼
5. NLP analysis for keyword extraction
   │
   ▼
6. Comparison with job description
   │
   ▼
7. Generate ATS score and recommendations
   │
   ▼
8. Return results to frontend
   │
   ▼
9. Display analysis to user
```

## Security Considerations

### Current Implementation

1. **Frontend Security**
   - No sensitive data stored client-side
   - Input validation on file uploads
   - XSS prevention through React

2. **Docker Security**
   - Non-root user in containers
   - Minimal base images
   - No secrets in images

### Planned Security Features

1. **Authentication & Authorization**
   - JWT-based authentication
   - Role-based access control
   - Secure session management

2. **Data Security**
   - Encryption at rest (S3, RDS)
   - Encryption in transit (HTTPS/TLS)
   - PII data handling compliance

3. **API Security**
   - Rate limiting
   - Input validation and sanitization
   - CORS configuration
   - API key management

4. **Infrastructure Security**
   - VPC with private subnets
   - Security groups and NACLs
   - AWS Secrets Manager for credentials
   - IAM roles with least privilege

## Scalability

### Horizontal Scaling

- **Frontend**: ECS Fargate auto-scaling based on CPU/memory
- **Backend**: ECS Fargate auto-scaling based on requests
- **Database**: RDS read replicas for read-heavy workloads
- **Caching**: ElastiCache cluster for session and data caching

### Vertical Scaling

- Container resource limits can be adjusted
- Database instance size can be upgraded
- Load balancer capacity adjusts automatically

## Monitoring & Observability

### Planned Monitoring Stack

1. **Application Metrics**
   - CloudWatch for logs and metrics
   - Custom metrics for business KPIs
   - Performance monitoring

2. **Infrastructure Metrics**
   - ECS container health checks
   - RDS performance insights
   - ALB metrics and access logs

3. **Alerting**
   - CloudWatch Alarms
   - SNS notifications
   - PagerDuty integration (optional)

## Development Workflow

```
1. Developer creates feature branch
   │
   ▼
2. Makes changes locally
   │
   ▼
3. Tests locally (npm run dev)
   │
   ▼
4. Commits and pushes to GitHub
   │
   ▼
5. GitHub Actions runs CI pipeline
   - Linting
   - Build
   - Tests
   - Docker build
   - Terraform validate
   │
   ▼
6. Create Pull Request
   │
   ▼
7. Code review and approval
   │
   ▼
8. Merge to main branch
   │
   ▼
9. GitHub Actions runs deployment
   - Build Docker images
   - Push to ECR
   - Update ECS services
   │
   ▼
10. Application deployed to AWS
```

## Future Enhancements

### Phase 1 (Core Backend)
- Resume parsing API
- Basic ATS analysis
- Database schema
- User authentication

### Phase 2 (Enhanced Features)
- Advanced NLP analysis
- Multiple resume formats
- Resume comparison
- Historical tracking

### Phase 3 (Premium Features)
- AI-powered recommendations
- Industry-specific analysis
- Resume builder
- Job matching

### Phase 4 (Scale)
- Multi-region deployment
- Advanced caching
- Real-time analysis
- Batch processing

## Performance Targets

- **Page Load**: < 2 seconds (First Contentful Paint)
- **API Response**: < 500ms for analysis
- **Availability**: 99.9% uptime
- **Scalability**: Support 1000+ concurrent users

## Cost Optimization

1. **Compute**: Use Fargate Spot for non-production
2. **Storage**: S3 lifecycle policies for old resumes
3. **Database**: RDS instance right-sizing
4. **CDN**: CloudFront caching for static assets
5. **Monitoring**: CloudWatch log retention policies

## Disaster Recovery

1. **Backup Strategy**
   - RDS automated backups (7-day retention)
   - S3 versioning for resume storage
   - Terraform state backup

2. **Recovery Time Objective (RTO)**: 4 hours
3. **Recovery Point Objective (RPO)**: 1 hour

## Documentation

- **Code Documentation**: JSDoc/TypeDoc for TypeScript
- **API Documentation**: OpenAPI/Swagger (planned)
- **Infrastructure**: Terraform documentation
- **User Guide**: Markdown documentation

---

This architecture is designed to be flexible and evolve as the project grows. Feedback and contributions are welcome!
