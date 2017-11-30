# Cappta code-challenge

This project is the solution to the Cappta code-challenge.

## Installing dependencies

To run this code, you must have ** Node.js> = 8 ** and install the project dependencies with the following command in the application root directory.
```bash
npm install
```

## Running

The code-challenge was solved using 2 concepts, the class-object and the functional.

To run using the class-object concept use the command below in the application root directory:
```bash
node run-with-object.js <input-file>
```

To run using the functional concept use the command below in the application root directory:
```bash
node run-as-functional.js <input-file>
```

The **input-file** must follows the model described in the [code-challenge page](https://gist.github.com/rmterra/31f2b4f589250839550f685d8873d935).

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

## Dockerizing

To run on a Docker container, first build the image:
```bash
docker build -t cappta-code-challenge .
```

Then run the container as class-object with the following command:
```bash
docker run -v /path/to/input/files:/var/input-files cappta-code-challenge node run-with-object.js /var/input-files/input-file-name.txt
```

Or as functional:
```bash
docker run -v /path/to/input/files:/var/input-files cappta-code-challenge node run-as-functional.js /var/input-files/input-file-name.txt
```

## Tests

To run tests:
```bash
npm test
```