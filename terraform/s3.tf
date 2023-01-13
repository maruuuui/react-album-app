resource "aws_s3_bucket" "app_bucket" {
  bucket = "album-app-mod.maruuuui.tk"
}

resource "aws_s3_bucket_website_configuration" "app_bucket" {
  bucket = aws_s3_bucket.app_bucket.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_acl" "app_bucket" {
  bucket = aws_s3_bucket.app_bucket.id

  acl = "public-read"
}

resource "aws_s3_bucket_policy" "app_bucket" {
  bucket = aws_s3_bucket.app_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          aws_s3_bucket.app_bucket.arn,
          "${aws_s3_bucket.app_bucket.arn}/*",
        ]
      },
    ]
  })
}