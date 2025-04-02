# Use latest Ubuntu as the base image
FROM ubuntu:latest

# Install basic development tools and Node.js
RUN apt update && apt install -y curl sudo less man-db \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt install -y nodejs

# Ensure default `node` user exists and has sudo access
ARG USERNAME=node
RUN useradd -m -s /bin/bash $USERNAME && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

# Set default user
USER node
