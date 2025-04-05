# Use latest Arch Linux base image
FROM archlinux:latest

# Update system and install base tools
RUN pacman -Syu --noconfirm && \
    pacman -S --noconfirm sudo curl git nodejs npm \
    lazygit tmux gitui zellij base-devel && \
    pacman -Scc --noconfirm

# Add a non-root user and give sudo access
RUN useradd -m -G wheel nodeuser && \
    echo '%wheel ALL=(ALL:ALL) NOPASSWD: ALL' >> /etc/sudoers

# Switch to non-root user
USER nodeuser

# Set working directory
WORKDIR /home/nodeuser/app

# Copy project files
COPY --chown=nodeuser . .

# Expose app port
EXPOSE 3000

# Keep container alive (for dev)
CMD ["sleep", "infinity"]
