#!/bin/bash

# Stage all changes
git add -A

# Use $1 as commit message if provided, otherwise fallback
if [ -z "$1" ]; then
    COMMIT_MSG="content imp"
else
    COMMIT_MSG="$1"
fi

# Commit with the message
git commit -m "$COMMIT_MSG"

# Push to origin/master
git push origin master

# Deploy 
npm run ghp:deploy