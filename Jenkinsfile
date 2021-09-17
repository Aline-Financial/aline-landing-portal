// Landing Portal Pipeline

pipeline {

    agent any
    environment {
        COMMIT_HASH = "${sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()}"
        AWS_ID = credentials('AWS_ID')
        PORTAL_NAME = 'landing'
        REGION = 'us-east-2'
        APP_NAME = 'alinefinancial'
        APP_ENV = 'dev'
        ORGANIZATION = 'Aline-Financial'
        PROJECT_NAME = 'aline-landing-portal'
    }

    stages {

        stage("Test") {

            steps {
                sh "npm test"
            }

        }

        stage("Build")

    }

}
