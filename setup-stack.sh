aws cloudformation deploy \
    --stack-name landing-portal-stack \
    --template-file setup-stack.yml \
    --parameter-overrides \
        AppEnv=dev \
        AppName=alinefinancial \
        PortalName=landing \
    --capabilities CAPABILITY_NAMED_IAM \
    --no-fail-on-empty-changeset