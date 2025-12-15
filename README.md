# OpenATS - Open-Source ATS Resume Scanner

[![CI](https://github.com/SonnyAu/OpenATS/workflows/CI%20-%20Build%20and%20Test/badge.svg)](https://github.com/SonnyAu/OpenATS/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

OpenATS is an open-source Applicant Tracking System (ATS) scanner that helps job seekers optimize their resumes for better compatibility with ATS software used by recruiters and companies.

## 🚀 Features

- **Resume Parsing**: Automatically extract and analyze key information from resumes
- **Match Score**: Get comprehensive match scores between resume and job descriptions
- **Keyword Analysis**: Identify matched and missing keywords
- **Actionable Insights**: Receive detailed recommendations for improvement
- **Modern UI**: Clean, responsive interface built with Next.js and TailwindCSS

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **UI Components**: Custom React components

### Infrastructure
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **IaC**: Terraform (AWS)
- **CI/CD**: GitHub Actions

### Planned Backend (Not Yet Implemented)
- Resume parsing engine
- NLP for keyword extraction
- Database for user data
- API endpoints

## 📋 Prerequisites

- Node.js 20 or higher
- Docker and Docker Compose
- Terraform (for infrastructure deployment)
- AWS Account (for production deployment)

## 🏃 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/SonnyAu/OpenATS.git
   cd OpenATS
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Using Docker

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Access the application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
OpenATS/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   └── app/
│   │       ├── page.tsx     # Home page
│   │       ├── upload/      # Resume upload page
│   │       └── results/     # Results display page
│   ├── Dockerfile           # Frontend Docker configuration
│   └── package.json
├── terraform/               # Infrastructure as Code
│   ├── main.tf             # Main Terraform configuration
│   ├── variables.tf        # Terraform variables
│   ├── outputs.tf          # Terraform outputs
│   └── README.md
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
│       ├── ci.yml          # Build and test workflow
│       └── deploy.yml      # Deployment workflow
├── docker-compose.yml      # Docker Compose configuration
└── README.md
```

## 🔧 Development

### Available Scripts (Frontend)

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Docker Commands

```bash
# Build images
docker-compose build

# Start services
docker-compose up

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

## 🚀 Deployment

### AWS Deployment with Terraform

1. **Navigate to terraform directory**
   ```bash
   cd terraform
   ```

2. **Initialize Terraform**
   ```bash
   terraform init
   ```

3. **Plan infrastructure changes**
   ```bash
   terraform plan -var="environment=dev"
   ```

4. **Apply infrastructure**
   ```bash
   terraform apply -var="environment=dev"
   ```

See [terraform/README.md](terraform/README.md) for detailed infrastructure documentation.

### CI/CD Pipeline

The project includes GitHub Actions workflows for:

- **CI Pipeline** (`ci.yml`): Runs on every push and PR
  - Frontend build and lint
  - Docker image build test
  - Terraform validation

- **Deployment Pipeline** (`deploy.yml`): Runs on push to main
  - Build and push Docker images to ECR
  - Deploy infrastructure with Terraform
  - Update ECS services

## 🗺️ Roadmap

- [x] Frontend mock-up with Next.js and TailwindCSS
- [x] Docker containerization
- [x] Terraform infrastructure skeleton
- [x] GitHub Actions CI/CD pipeline
- [ ] Backend API development
- [ ] Resume parsing engine
- [ ] Database integration
- [ ] User authentication
- [ ] Advanced ATS analysis algorithms
- [ ] PDF generation for reports
- [ ] Multiple resume format support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sonny Au**

- GitHub: [@SonnyAu](https://github.com/SonnyAu)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- The open-source community

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Note**: This is currently a frontend mock-up. The backend functionality for resume parsing and ATS analysis is not yet implemented.