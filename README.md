# Concept App Design for Evenbrite

Exercise of redesign and static implementation of a mobile application design concept to apply in Evenbrite.

![Mockup App](/assets/img/MockGit.png)

## Features

- Environment: **NodeJS**
- Compiler: **Babel**
- Bundler: **Parcel**
- Language: **ReactJS**

## Setup

1. Clone the project

`https://github.com/ccs53/Eventbrite.git`

2. Open the project in a code editor, for example **Visual Studio Code**
3. Open the terminal and install the project dependencies

`$ npm install`

4. Start the project

`$ npm start`

5. To see the app version reduce the size of the browser to about 320px.

## Project

The project has been created with some of the latest technologies used today based on a previous design. 

### Git

I have used **Git** as a version control system to store all the versions.

### Sketch

The design was made with [Sketch](https://www.sketch.com/ "Sketch"), a digital design app from Mac where I have made the UI and the SVG icons for the project as well as copy CSS Attributes.

### Babel

[Babel](https://babeljs.io/ "Babel") can convert JSX syntax that is in the proyect and make it compatible with older browsers or environments.

### Parcel

[ParcelJS](https://parceljs.org/ "ParcelJS") has been used as a web application bundler for offering blazing-fast performance.

### React

The code was implemented with the library **React**, where I have divided the parts of the interface in components. 

~~~~
import React from "react"
import Targets from "../Targets"
import Logo from "../Logo"

const App = () => {

    return <div className="bgOrange">
            <Logo />
            <Targets />
        </div>
}
~~~~

### React Responsive Carousel 

The **react-responsive-carousel** library was used to give movement to the tickets in the interface.

`import { Carousel } from 'react-responsive-carousel';`

### Emotion

For writing css styles for the **react-responsive-carousel** I have used **Emotion**, a library designed for writing css styles with JavaScript. 

~~~~
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from 'emotion'

const styledCarousel = css`
{
    .carousel .slide{
        width: 100%
    }
}

const Targets = () => {
    return <Carousel className={styledCarousel}>
}
~~~~

### Framer Motion

For animate the logo I used [Framer Motion](https://www.framer.com/motion/ "Framer Motion"), an open source **React** library to power production-ready animations.

~~~~
import {motion} from 'framer-motion'

const Targets = () => {
    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
}
~~~~

### FlexBox

Finally, I used the **flex** property in **CSS** because is much responsive and mobile friendly. It is easy to positioning child elements and the main container.

~~~~
.mobileContainer{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
~~~~
