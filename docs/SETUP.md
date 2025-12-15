# OpenATS Setup Guide

This guide will walk you through setting up OpenATS for local development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **Docker**: For containerized development ([Download](https://www.docker.com/))
- **Git**: For version control ([Download](https://git-scm.com/))

Optional:
- **Terraform**: For infrastructure management ([Download](https://www.terraform.io/))
- **AWS CLI**: For AWS deployment ([Download](https://aws.amazon.com/cli/))

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/SonnyAu/OpenATS.git
cd OpenATS
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### 3. Using Docker (Alternative)

If you prefer Docker:

```bash
# From the root directory
docker-compose up --build
```

This will build and start the frontend container.

## Development Workflow

### Frontend Development

1. **Start the development server**:
   ```bash
   cd frontend
   npm run dev
   ```

2. **Available Scripts**:
   ```bash
   npm run dev      # Start development server with hot reload
   npm run build    # Build for production
   npm run start    # Start production server
   npm run lint     # Run ESLint
   ```

3. **File Structure**:
   ```
   frontend/
   ├── src/
   │   └── app/
   │       ├── page.tsx          # Home page
   │       ├── upload/           # Upload page
   │       ├── results/          # Results page
   │       ├── layout.tsx        # Root layout
   │       └── globals.css       # Global styles
   ├── public/                   # Static assets
   ├── Dockerfile               # Docker configuration
   └── package.json             # Dependencies
   ```

### Making Changes

1. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make your changes** in the appropriate files

3. **Test your changes**:
   ```bash
   npm run lint    # Check for linting errors
   npm run build   # Ensure it builds successfully
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add: your feature description"
   git push origin feature/your-feature
   ```

## Docker Development

### Building the Docker Image

```bash
cd frontend
docker build -t openats-frontend .
```

### Running the Container

```bash
docker run -p 3000:3000 openats-frontend
```

### Using Docker Compose

```bash
# Start all services
docker-compose up

# Start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and start
docker-compose up --build
```

## Environment Variables

Create a `.env.local` file in the `frontend` directory for local environment variables:

```bash
# Frontend/.env.local (example)
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_ENVIRONMENT=development
```

> **Note**: Never commit `.env.local` or any file containing secrets to the repository.

## Terraform Setup (Infrastructure)

### Initialize Terraform

```bash
cd terraform
terraform init
```

### Plan Infrastructure

```bash
terraform plan -var="environment=dev"
```

### Apply Infrastructure (when ready)

```bash
terraform apply -var="environment=dev"
```

See [terraform/README.md](../terraform/README.md) for detailed infrastructure documentation.

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Node Modules Issues

If you encounter dependency issues:

```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Docker Issues

If Docker build fails:

```bash
# Clean Docker cache
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache
```

### Build Errors

If the build fails:

1. Check Node.js version: `node --version` (should be 20+)
2. Clear Next.js cache: `rm -rf .next`
3. Reinstall dependencies: `npm install`
4. Try building again: `npm run build`

## Testing

### Manual Testing

1. Start the development server
2. Navigate to [http://localhost:3000](http://localhost:3000)
3. Test each page:
   - Home page: `/`
   - Upload page: `/upload`
   - Results page: `/results`

### Browser Testing

Test in multiple browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on macOS)

### Responsive Testing

Test on different screen sizes:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## CI/CD

GitHub Actions workflows are configured in `.github/workflows/`:

- **ci.yml**: Runs on every push and PR
  - Builds frontend
  - Runs linter
  - Tests Docker build
  - Validates Terraform

- **deploy.yml**: Runs on push to main
  - Builds and pushes Docker images
  - Deploys infrastructure

## Next Steps

1. **Explore the codebase**: Familiarize yourself with the project structure
2. **Read the documentation**: Check the main README and CONTRIBUTING guide
3. **Start contributing**: Pick an issue or feature to work on
4. **Join the community**: Participate in discussions and reviews

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [Terraform Documentation](https://www.terraform.io/docs)

## Getting Help

If you need help:
1. Check this setup guide
2. Read the [FAQ](./FAQ.md) (coming soon)
3. Search existing [GitHub Issues](https://github.com/SonnyAu/OpenATS/issues)
4. Open a new issue if needed

---

Happy coding! 🚀
