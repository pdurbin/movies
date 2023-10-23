#!/bin/bash
docker run -p 80:80 -v $(pwd):/usr/share/nginx/html -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro nginx
