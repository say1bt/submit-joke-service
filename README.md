
# Submit Joke Service

The Submit Joke Service is a microservice designed to handle the submission of new jokes within the Jokes Service architecture. It provides endpoints for users to submit jokes, which are then stored and made available for moderation and retrieval. This service is built using Node.js and Express.js and is integrated with other microservices for comprehensive joke management.

## Features

- **Joke Submission**: Allows users to submit new jokes.
- **Integration**: Interacts with other microservices for seamless joke management.
- **API Documentation**: Swagger is integrated for API documentation.
- **Dockerized**: The service is containerized using Docker.
- **Deployment**: Deployed to Amazon EC2 instances for scalability and reliability.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Endpoints](#api-endpoints)
4. [Docker](#docker)
5. [Deployment](#deployment)
6. [Swagger Documentation](#swagger-documentation)
7. [Contributing](#contributing)
8. [License](#license)
9. [Acknowledgments](#acknowledgments)

## Installation

To get started with the Submit Joke Service, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/say1bt/submit-joke-service.git
   ```

2. Navigate to the project directory:
   ```bash
   cd submit-joke-service
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the Submit Joke Service locally, run:
```bash
npm start
```

The service will be available at `http://localhost:3000`.

## API Endpoints

- `POST /jokes`: Submit a new joke.

## Docker

The service is containerized using Docker. To build and run the Docker container, follow these steps:

1. Build the Docker image:
   ```bash
   docker build -t submit-joke-service .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 submit-joke-service
   ```

## Deployment

The Submit Joke Service is deployed to Amazon EC2 instances for scalability and reliability. The deployment process includes:

1. Pushing the Docker image to Amazon ECR (Elastic Container Registry).
2. Creating and configuring an EC2 instance.
3. Pulling and running the Docker image on the EC2 instance.


## Database

 MongoDB is hosted in MongoDB Atlas.

## Swagger Documentation

Swagger is integrated for API documentation. Once the service is running, you can access the Swagger UI at `http://localhost:3000/api-docs` to explore the available endpoints and their details.

## Contributing

We welcome contributions to improve the Submit Joke Service. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was developed with the assistance of AI tools like ChatGPT, which helped in generating documentation and providing coding suggestions.

---

Feel free to modify this README file as needed to fit your specific project requirements.
