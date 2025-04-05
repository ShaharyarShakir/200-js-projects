# Use Arch Linux as the base image
FROM archlinux:latest

# Update package database and install necessary tools including Neovim and Node.js
RUN pacman -Syu --noconfirm \
    && pacman -S --noconfirm curl sudo less man neovim git tmux bat zellij yazi gitui lazygit  \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && pacman -S --noconfirm nodejs npm \
    && pacman -Scc --noconfirm  # Clean the package cache

# Ensure default `node` user exists and has sudo access
ARG USERNAME=node
RUN useradd -m -s /bin/bash $USERNAME && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

# Set default user
USER $USERNAME

# Set working directory
WORKDIR /workspace

# Expose necessary port (if needed for your project)
# EXPOSE 3000  # Uncomment if using Node.js to serve a web app

# Set a default command to run
CMD ["bash"]
