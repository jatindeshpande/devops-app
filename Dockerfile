FROM python:3.10-slim

WORKDIR /app

# Install dependencies first
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app code
COPY . .

# Create a non-root user
RUN useradd -m appuser
USER appuser

CMD [ "gunicorn", "-b", "0.0.0.0:5000", "app.main:app" ]