# Kubernetes Operator Template

This project is a template for building a Kubernetes operator using TypeScript. It leverages the [Kubernetes Client for JavaScript](https://github.com/kubernetes-client/javascript) to interact with Kubernetes resources.

## Table of Contents

- [Kubernetes Operator Template](#kubernetes-operator-template)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Development](#development)
    - [Building](#building)
    - [Running Locally](#running-locally)
    - [File Structure](#file-structure)
  - [Testing](#testing)
  - [Configuration](#configuration)
  - [Docker](#docker)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

To install the project and its dependencies, clone the repository and use `pnpm` to install the necessary packages:

```bash
git clone https://github.com/parraletz/k8s-operator-template.git
cd k8s-operator-template
pnpm install
```

## Usage

To run the Kubernetes operator, use the following command:

```bash
pnpm start
```

The operator will watch for changes in Custom Resource Definitions (CRDs) specified in `example/example.yaml`.

## Development

### Building

To build the project, run:

```bash
pnpm build
```

### Running Locally

After building, you can start the application using Node:

```bash
node dist/app.js
```

### File Structure

- `src/`: Contains TypeScript source code.
  - `controllers/`: Logic for interacting with Kubernetes.
  - `client/`: Client setup for Kubernetes API interactions.
- `tests/`: Tests for the application.
  - `unit/`: Unit tests for controllers and other modules.

## Testing

To test the application, use Vitest:

```bash
pnpm test
```

Check unit tests in `tests/unit/example.controller.test.ts` which ensure proper functionality and error handling in `example.controller.ts`.

## Configuration

- **Kubernetes Access**: Ensure access to the Kubernetes cluster you intend to operate with. Set up your `kubeconfig` properly.
- **Environment Variables**: Use `.env` files for environment-specific configurations (ensure they are ignored in production using `.dockerignore`).

## Docker

This template includes Docker support. To build and run the Docker image:

1. **Build the Image**:

   ```bash
   docker build -t k8s-operator-template .
   ```

2. **Run the Container**:

   ```bash
   docker run -p 3000:3000 k8s-operator-template
   ```

## Contributing

Contributions are welcome! Please ensure any pull requests are tested thoroughly and align with the project's coding standards.

## License

This project is licensed under the [MIT License](LICENSE).

---

