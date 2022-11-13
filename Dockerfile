FROM nginx

COPY ./dist /var/www/appendoc/dist
COPY nginx.conf /etc/nginx/nginx.conf
