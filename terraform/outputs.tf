# Terraform outputs for OpenATS infrastructure

# VPC Outputs (to be implemented)
# output "vpc_id" {
#   description = "VPC ID"
#   value       = module.vpc.vpc_id
# }

# ECS Outputs (to be implemented)
# output "ecs_cluster_name" {
#   description = "ECS cluster name"
#   value       = module.ecs.cluster_name
# }

# Load Balancer Outputs (to be implemented)
# output "alb_dns_name" {
#   description = "Application Load Balancer DNS name"
#   value       = module.alb.dns_name
# }

# S3 Outputs (to be implemented)
# output "resume_bucket_name" {
#   description = "S3 bucket name for resume storage"
#   value       = module.s3.bucket_name
# }

output "environment" {
  description = "Environment name"
  value       = var.environment
}

output "aws_region" {
  description = "AWS region"
  value       = var.aws_region
}
