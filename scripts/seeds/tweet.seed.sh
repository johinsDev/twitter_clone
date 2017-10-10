#!/bin/bash
CT="Content-Type:application/json"
REQ="curl -i -H$CT -X GET http://localhost:8000/api/seeds/tweets/10"
echo $REQ
RESPONSE=`$REQ`
echo $RESPONSE