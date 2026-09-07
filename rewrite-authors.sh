#!/bin/bash
export FILTER_BRANCH_SQUELCH_WARNING=1
git filter-branch -f --env-filter '
OLD_NAME="TrevaOStech"
NEW_NAME="Dhanush F G"
NEW_EMAIL="dhanush@coreforgeindia.com"
if [ "$GIT_COMMITTER_NAME" = "$OLD_NAME" ]; then
    export GIT_COMMITTER_NAME="$NEW_NAME"
    export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
fi
if [ "$GIT_AUTHOR_NAME" = "$OLD_NAME" ]; then
    export GIT_AUTHOR_NAME="$NEW_NAME"
    export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
fi
' -- --all
