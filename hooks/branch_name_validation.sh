#!/bin/bash

# The following branch patterns are allowed
#
# feat/*
# feature/*
# fix/*
# chore/*
# refactor/*
# docs/*
# test/*
# style/*
branch_pattern='^(feat|feature|fix|chore|refactor|docs|style|test)\/.+$|(development)'

# Get the current branch name
current_branch=$(git symbolic-ref --short HEAD)

# Check if the branch
if ! [[ $current_branch =~ $branch_pattern ]]; then
  echo "Error: Branch name '$current_branch' does not match the required pattern."
  echo "Please view the CONTRIBUTIONS.md for branch naming conventions."
  exit 1
fi
