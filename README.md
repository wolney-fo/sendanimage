# SendAnImage

This project is the back-end API for an image-sharing platform, similar to Imgur. The application allows users to upload and share images easily with others.

The project is built with a focus on scalability and efficiency, ensuring smooth handling of multiple users and their data. It provides robust APIs for seamless interaction with the front-end.

## Table of Contents

- [SendAnImage](#sendanimage)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Stack](#stack)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [License](#license)

## Project Structure

```
$PROJECT_ROOT
├── prisma              # Prisma configs
│   └── migrations      # Database migrations
└── src
    ├── @types          # Typing
    ├── env             # Environment variables validation
    ├── lib
    ├── errors          # Application errors
    ├── http            # Http
    ├── repositories    # Entities repositories
    ├── use-cases       # Application services
    │    └── factories  # Services factories
    └── utils           # Util functions
```

## Stack

- Node.js
- Typescript
- Express
- Morgan
- Mongoose
- Multer
- Zod

## Installation

To install and run the application locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone git@github.com:wolney-fo/sendanimage.git
   ```
2. Navigate to the project directory:
   ```sh
   cd sendanimage
   ```
3. Install the dependencies:
   ```sh
   yarn
   ```
4. Run the application:
   ```sh
   yarn start:dev
   ```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

MIT by [Wolney Oliveira](https://github.com/wolney-fo)
