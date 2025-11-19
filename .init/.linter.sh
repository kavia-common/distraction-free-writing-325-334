#!/bin/bash
cd /tmp/kavia/workspace/code-generation/distraction-free-writing-325-334/frontend_react
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

