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

        stage("Install Node Modules") {
            steps {
                sh "npm i"
            }
        }

        stage("Test") {
            steps {
                sh "npm test"
            }
        }

        stage("Setup Portal Stack") {
            steps {
                echo "Fetching 'setup-stack.yml' CloudFormation template..."
                sh "wget https://raw.githubusercontent.com/${ORGANIZATION}/${PROJECT_NAME}/${APP_ENV}/setup-stack.yml"
                echo "Setting up ${PORTAL_NAME} portal stack..."
                sh '''
                    aws cloudformation deploy \
                    --stack-name landing-portal-stack \
                    --template-file setup-stack.yml \
                    --parameter-overrides \
                        AppEnv=${APP_ENV} \
                        AppName=${APP_NAME} \
                        PortalName=${PORTAL_NAME} \
                    --capabilities CAPABILITY_NAMED_IAM \
                    --no-fail-on-empty-changeset
                '''
            }
        }

        stage("Build Portal") {
            steps {
                sh "npm run build"
            }
        }

        stage("Upload to S3 Bucket") {

        }
    }

    post {
        always {
            sh "rm -rf node_modules"
        }
    }

}
