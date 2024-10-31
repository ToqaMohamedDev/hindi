export const imageAnimation = {
    initial: {
        y: 50,
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: `0em`,
        transition: {
            delay: 6,
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
}

export const bodyAnimation = {
    initial: {
        y: `1em`,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: `0em`,
        transition: {
            delay:5.5,
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
}


export const rizeWidthFade = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
}


export const staggerChildren = {
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren:0.1,
            durationChildren: 0.4,
        }
    }
}



export const wordAnimation = {
    initial: {
        y: 150,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay:1,
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
}

export const wordAnimation2 = {
    initial: {
        y: 150,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
}


/*
git init
git add .
git commit -m "first"
git branch -M main
git remote add origin https://github.com/ToqaMohamedDev/hindi.git
git push -u origin main
*/