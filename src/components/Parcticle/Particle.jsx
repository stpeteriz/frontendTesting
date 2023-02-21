import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = (pic) => {
    const particlesInit = useCallback(async engine => {

        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    /*const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    */
    return (
        <Particles className="particles"
            id="tsparticles"
            init={particlesInit}
            // loaded={particlesLoaded}
            options={{
                background: 'transpanent',

                fpsLimit: 90,
                emitters: {
                    startCount: 80,
                    direction: 90,
                    position: { x: 50, y: 50 },
                    size: {
                        width: 150,
                        height: 150,
                    }
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "attract",
                            parallax: {
                                enable: true,
                                force: 150,
                                smooth: 50,
                            }
                        },
                        resize: true,
                    },
                    modes: {
                        attract: {
                            distance: 400,
                            duration: 0.4,
                            factor: 1,
                            maxSpeed: 50,
                            speed: 1,

                        },
                        push: {
                            quantity: 3,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#04aff8",
                    },
                    links: {
                        color: "#EEEEEE",
                        distance: 400,
                        enable: false,
                        opacity: 5,
                        width: 3,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        start: 100,
                        directions: 90,
                        enable: true,
                        outModes: {
                            default: "destroy",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 0,
                    },
                    opacity: {
                        value: 0.9,
                    },
                    shape: {
                        type: "star",
                        options: {
                            "star": {
                              "sides": 6, // the number of sides of the star
                              "inset": 6, // the inset length, 2 is the default and an acceptable value
                        },
                        
                            "image": {
                              // any path or url to your image that will be used as a particle
                              "src": 'snowflake.png',
                              // the pixel width of the image, you can use any value, the image will be scaled
                              "width": 20,
                              // the pixel height of the image, you can use any value, the image will be scaled
                              "height": 20,
                              // if true and the image type is SVG, it will replace all the colors with the particle color
                              "replaceColor": false
                            }
                          
                    },
                      
                    },
                    size: {
                        value: { min: 1, max: 1 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default Particle;