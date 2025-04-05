# Use latest Arch Linux base image
FROM archlinux:latest

# Update system and install Node.js + npm + dev tools
RUN pacman -Syu --noconfirm 

# Add a non-root user
RUN useradd -m nodeuser
USER nodeuser

# Set working directory
WORKDIR /home/nodeuser/app

# Copy project files
COPY --chown=nodeuser . .

# Expose app port
EXPOSE 3000
