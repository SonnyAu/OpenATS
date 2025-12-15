# OpenATS Terraform Infrastructure

This directory contains the Terraform configuration for deploying OpenATS to AWS.

## Prerequisites

- Terraform >= 1.0
- AWS CLI configured with appropriate credentials
- AWS account with necessary permissions

## Infrastructure Components (To Be Implemented)

- **VPC**: Virtual Private Cloud with public and private subnets
- **ECS**: Elastic Container Service for running containerized applications
- **ALB**: Application Load Balancer for traffic distribution
- **S3**: Storage for uploaded resumes
- **RDS**: Database for application data (future)
- **CloudWatch**: Monitoring and logging

## Usage

### Initialize Terraform

```bash
cd terraform
terraform init
```

### Plan Infrastructure Changes

```bash
terraform plan -var="environment=dev"
```

### Apply Infrastructure

```bash
terraform apply -var="environment=dev"
```

### Destroy Infrastructure

```bash
terraform destroy -var="environment=dev"
```

## Environment Variables

Configure the following variables in `terraform.tfvars` or pass them via command line:

- `aws_region`: AWS region (default: us-east-1)
- `environment`: Environment name (dev, staging, prod)
- `vpc_cidr`: CIDR block for VPC
- `domain_name`: Custom domain name (optional)

## Module Structure

```
terraform/
├── main.tf           # Main configuration
├── variables.tf      # Input variables
├── outputs.tf        # Output values
├── terraform.tfvars  # Variable values (not in git)
└── modules/          # Reusable modules (to be created)
    ├── vpc/
    ├── ecs/
    ├── alb/
    └── s3/
```

## Backend Configuration

For production, configure remote state storage:

1. Create S3 bucket for state storage
2. Uncomment backend configuration in `main.tf`
3. Run `terraform init`

## Security Considerations

- All infrastructure uses least-privilege IAM policies
- Secrets managed via AWS Secrets Manager
- Network access controlled via Security Groups
- S3 buckets use encryption at rest
- CloudWatch logs for audit trail

## Next Steps

1. Implement VPC module with public/private subnets
2. Configure ECS cluster with Fargate
3. Set up Application Load Balancer
4. Create S3 bucket with proper encryption
5. Configure CloudWatch for monitoring
6. Set up CI/CD pipeline for deployments
