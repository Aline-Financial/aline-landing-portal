aws cloudformation deploy \
    --stack-name landing-portal-stack \
    --template-file setup-stack.yml \
    --parameter-overrides \
        AppEnv=dev \
        AppName=alinefinancial \
        PortalName=landing \
        AppHostedZoneId=Z09924743TGGGCZV3CFW1 \
    --capabilities CAPABILITY_NAMED_IAM \
    --no-fail-on-empty-changeset