# Base image
FROM nginx:alpine

# Copy the built Angular files from `dist/login-mask/browser` to NGINX's HTML directory
COPY ./dist/login-mask/browser /usr/share/nginx/html

EXPOSE 80

# Start the NGINX server
CMD [ "nginx", "-g", "daemon off;" ]