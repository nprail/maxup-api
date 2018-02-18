require('dotenv').config()

const port = process.env.PORT || 4000
let baseUrl
if (process.env.NODE_ENV === 'development') {
  baseUrl = `http://localhost:${port}`
} else {
  baseUrl = process.env.BASE_URL || 'https://api.s3d.sh'
}

module.exports = {
  port: port,
  dbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/s3d',
  salt: process.env.SALT || 12,
  jwtSecret: process.env.JWT_SECRET,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  baseUrl: baseUrl,
  emailFrom: process.env.EMAIL_FROM || '"s3d" <s3d@filiosoft.email',
  email: {
    host: process.env.EMAIL_HOST || 'smtp.sendgrid.net',
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE || false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  }
}
