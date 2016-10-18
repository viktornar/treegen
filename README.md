# treegen
Simple demo application for creating tree like inputs with buttons and other stuff.
===================

![image](https://raw.githubusercontent.com/viktornar/treegen/master/images/application.png)

The main technologies (frameworks, libraries) that was used in project
-------------
- Bootsrap for application UI (layout, buttons, inputs)
- JQuery for manipulating with DOM elements
- NodeJS for serving static files
- Gulp for building application

> **Note:**
> The main reason why JQuery was chosen - this library is easy to use when you need to write some small piece of code for DOM manipulation and nothing more.
> You can look at https://github.com/viktornar/treegen-react how to achieve the same functionality but in the hard way by using ReactJS.

How to run project
-------------

Clone the project with the following command:

```bash
$ git clone https://github.com/viktornar/treegen
```

Go to the project directory:

```bash
$ cd treegen
```

If you have a python 2.7 just run:

```bash
$ python -m SimpleHTTPServer
```

Application will be available at http://localhost:8000

If you don't have python just build project with gulp (read below).

How to build project
-------------

Go to the project directory:

```bash
$ cd treegen
```

And install all dev dependencies with command:

```bash
$ npm install && npm install -g gulp-cli
```

Run gulp task:

```bash
$ gulp watch
```

Application will be available at http://localhost:3000

> **Note:**
> I have used NodeJS 4 for developing.
> Application was tested on latest Chrome, FF and Edge web bowser. Edge and IE is not supported
