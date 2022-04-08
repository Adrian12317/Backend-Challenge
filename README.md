<div id="top"></div>

## Getting Started

This project provides autocomplete suggestions for large cities in the United States and Canada using an API search and Graphql support.

### Prerequisites

You need to have Node Js installed on your computer.

### Installation

Follow the steps below.

1. Clone the repo
   ```sh
   git clone https://github.com/Adrian12317/Backend-Challenge.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Open a terminal and run the following command to start our Graphql application

   ```sh
   npm start
   ```

   And you got this

   ![npm start](/Assets/MD/nodemon.jpg)

4. Open another terminal an run the following command to start with our local server (API)

   ```sh
   npm run server
   ```

   And you got this

   ![npm run server](/Assets/MD/server.jpg)

## Usage

You have to go to http://localhost:4000/ and you will see this.
and click on "Query your server" button.

![local 1](/Assets/MD/local_1.jpg)

And this sends you to the graphql playground

![local 2](/Assets/MD/local_2.jpg)

### example

In the operation terminal write the follow code

```sh
query($q: String!, $lat: String , $long: String){
    getCity(q: $q, latitude: $lat, longitude: $long) {
        name
        lat
        long
        score
    }
}
```
![operation](/Assets/MD/operation.gif)

Next you have to write the header variables in the variables terminal
(lat and long variables are not required)

```sh
{
  "q": "{City name}",
  "lat": "{latitude}",
  "long": "{longitude}"
}
```
![variables](/Assets/MD/variables.gif)

And executing the query and getting the results (you can also execute the query with "ctrl" + "enter")
![run](/Assets/MD/run.gif)

And that's it, have fun!

## Contact

Linkedin - [adrian-avendano](https://www.linkedin.com/in/adrian-avendano/)   

Github - [Adrian12317](https://github.com/Adrian12317) 

<p align="right">(<a href="#top">back to top</a>)</p>
