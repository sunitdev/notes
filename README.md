[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<p align="center">
    <a href="https://github.com/sunitdev/notes">
    <img src="docs/images/logo.png" alt="Logo" width="250" height="80">
  </a>

  <p align="center">
    Repository of personal notes.
    <br />
    <a href="https://sunitdev.github.io/notes/">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Project Structure](#project-structure)
- [Creating Notes](#creating-notes%c2%b6)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Building Static site.](#building-static-site)
- [Contact](#contact)


<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://sunitdev.github.io/)


Notes is a static site generator created using [Jupyter Notebook](https://jupyter.org/). The projects aimed to provide an easy way to digitalize my notes and to make it easily accessible.

The main starting point of the project is [main.ipynb](make.ipynb) file. The file is explanatory and after running the file it creates a ready to host  independent website in the [dist/](dist) folder and an index.html file in the root folder.


### Built With

Following Frameworks, Libraries and tools are used in building this website.

* [Jupyter Notebook](https://jupyter.org/)
* [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
* [SOS Notebook](https://vatlab.github.io/sos-docs/)
* [Jinja](https://jinja.palletsprojects.com/en/2.10.x/)
* [Bootstrap](https://getbootstrap.com/)



## Project Structure
- dist - Auto generated folder, contains the final HTML version of notes.
- notes - All the notes must be stored in this folder.
- static - Static assets of the project like images, stylesheet, javascripts etc.
- template - HTML template for index and notes page as well has template for HTML converter must be stored here.
- index.html - Auto generate index page of the website.


## Creating Notes

Notes must be created under notes directory. Under notes directory any folder structure can be followed. The final HTML file to be generate will be created with same parents folder. So the folder structure must match the URL pattern that is expected for the note. The code below will find any `.ipynb` file and use it as a candidate to convert to HTML.

Each note must contain the following metadata which will be used in the final conversion process.

```js
{
    "notes_info": {
        "title": "Title of the note",
        "description": "Description of the note",
        "image": "Image of the note to shown",
        "slug": "(Optional) Slug of the note to be used as HTML filename"
    }
}
```


<!-- GETTING STARTED -->
## Getting Started

Conda is needed to be installed before setting up this project.

### Installation

1. Clone the repo
```sh
git clone git@github.com:sunitdev/notes.git
```
2. Create environment and install dependencies
```sh
conda create --name <some_name> --file=environment.yml
```
3. Start jupyter notebook
```JS
jupyter notebook
```

### Building Static site.

To build the static site run every cell in `main.ipynb`.

<!-- CONTACT -->
## Contact

Project Link: [https://github.com/sunitdev/notes](https://github.com/sunitdev/notes)


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sunitdeshpande/
[product-screenshot]: docs/images/screenshot_landing_page.png
