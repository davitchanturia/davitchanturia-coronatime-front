<h1 style="text-align:center;">Coronatime</h1>

Welcome to the Coronatime web-aplication, it is a place where you can see latest worldwide and certain country statistics in two languages(english and georgian). you can search and filter information as you wish. to see this information you have to register an verify your email.

## Table of Contents

* [Prerequisites](#req)
* [Packages](#packages)
* [Getting Started](#gettingStarted)
* [Resources](#RESOURCES)

#
<h2 id="req">Prerequisites:</h2>


<table>
    <tr>
        <td>*</td>
        <td>npm 6.14.15</td>
    </tr>
        <tr>
        <td>*</td>
        <td>node 14.18.1</td>
    </tr>
</table>

<h2 id="packages">packages:</h2>

<table>
    <tr>
        <td>*</td>
        <td>tailwindcss 3.0.23</td>
    </tr>
    <tr>
        <td>*</td>
        <td>@reduxjs/toolkit 1.8</td>
    </tr>
    <tr>
        <td>*</td>
        <td>react-router-dom 6</td>
    </tr>
    <tr>
        <td>*</td>
        <td>axios</td>
    </tr>
    <tr>
        <td>*</td>
        <td>react-hook-form</td>
    </tr>
    <tr>
        <td>*</td>
        <td>i18next</td>
    </tr>
    <tr>
        <td>*</td>
        <td>react-i18next</td>
    </tr>
    <tr>
        <td>*</td>
        <td>i18next-browser-languagedetector</td>
    </tr>
    <tr>
        <td>*</td>
        <td>18next-http-backend</td>
    </tr>
</table>

<h2 id="gettingStarted">Getting Started</h2>

1\. First of all you need to clone Coronatime repository from github:
```sh
https://github.com/RedberryInternship/davitchanturia-coronatime-front.git

cd davitchanturia-coronatime-front
```
2\. Then navigate into the repository
```sh
cd davitchanturia-coronatime-front
```
3\. create .env from .env example
```sh
cp .env.example .env
```
4\. And now you should provide .env file all the necessary environment variables.
```sh
REACT_APP_BACKEND_ADDRESS=http://localhost:8000/
```

5\. Run the command to install all the dependencies
```sh
npm install
```
6\. Run the command to start the development server
```sh
npm start
```

<h2 id="RESOURCES">Resources</h2>

This is application's frontend side. It uses laravel as backend, so to fully understand concerpts of whole application you can visit backend repository and read swagger documentation of this app.

  1.Backend Repository - https://github.com/RedberryInternship/davitchanturia-coronatime

  2.Swagger Documentation - https://coronatime.chanturia.redberryinternship.ge/swagger