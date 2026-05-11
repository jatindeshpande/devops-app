FROM python:3.10-slim

WORKDIR /app

# Install dependencies first (good layer caching - this layer only
# rebuilds when requirements.txt changes, not on every code change)
COPY app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app code
COPY . .

# Create non-root user AND fix ownership in the same RUN layer
# Combining into one RUN avoids creating an extra layer
RUN useradd -m appuser && chown -R appuser:appuser /app

# Switch to non-root user AFTER ownership is set
USER appuser

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:5000/health')" || exit 1

CMD [ "gunicorn", "-b", "0.0.0.0:5000", "app.main:app" ]