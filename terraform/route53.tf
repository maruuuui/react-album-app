resource "aws_route53_record" "album-app" {
    zone_id = "Z09991593E0A5TCOI6DUX"
    name    = aws_s3_bucket.app_bucket.id
    type    = "A"

    alias {
        evaluate_target_health = true
        name                   = aws_s3_bucket.app_bucket.website_domain
        zone_id                = aws_s3_bucket.app_bucket.hosted_zone_id
    }
}
