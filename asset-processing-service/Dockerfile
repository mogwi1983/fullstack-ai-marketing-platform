#use an official python runtime as a parent image
FROM python:3.12-slim

#set the working directory in the container
WORKDIR /app

#copy project.toml and poetry.lock first for dependency caching
COPY pyproject.toml poetry.lock* /app/

#install Poetry
RUN pip install poetry \
    && poetry install --no-root

#copy the entire project into the container
COPY . /app

#Run the service when the container launches
CMD ["poetry", "run", "asset-processing-service"]
