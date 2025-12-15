# Main Terraform configuration for OpenATS AWS deployment

terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Backend configuration for state management
  # backend "s3" {
  #   bucket = "openats-terraform-state"
  #   key    = "prod/terraform.tfstate"
  #   region = "us-east-1"
  # }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "OpenATS"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}

# VPC Module (to be implemented)
# module "vpc" {
#   source = "./modules/vpc"
#   
#   vpc_cidr = var.vpc_cidr
#   environment = var.environment
# }

# ECS Cluster for containerized application
# module "ecs" {
#   source = "./modules/ecs"
#   
#   cluster_name = "openats-${var.environment}"
#   vpc_id = module.vpc.vpc_id
# }

# Application Load Balancer (to be implemented)
# module "alb" {
#   source = "./modules/alb"
#   
#   vpc_id = module.vpc.vpc_id
#   subnets = module.vpc.public_subnets
# }

# S3 bucket for resume storage (to be implemented)
# module "s3" {
#   source = "./modules/s3"
#   
#   bucket_name = "openats-resumes-${var.environment}"
#   environment = var.environment
# }
