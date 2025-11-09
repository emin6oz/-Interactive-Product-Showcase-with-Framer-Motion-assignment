
import { motion } from 'framer-motion';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';



const galleryItemAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.17, 0.55, 0.55, 1]
        }
    },
};

const Gallery = () => {
    const variants = [
        { name: "Bohemian (Boho) style", img: img1, description: "relaxed, eclectic mix of lush greenery, natural textures." },
        { name: "Bohemian (Boho) style", img: img2, description: "layered geometric rugs, a well-worn leather sofa, and an overwhelming saturation of natural light." },
        { name: "Biophilic Design", img: img3, description: "characterized by clean lines, ample natural light, light wood flooring, minimal furniture, and an integrated." },
    ];

    return (
        <div className="gallery-container themed-gallery">
            <h2>Enhance your house with plants</h2>
            <p>Choose the finish that brings your sanctuary to life.</p>

            <div className="variant-grid">
                {variants.map((variant, index) => (
                    <motion.div
                        key={variant.name}
                        className="variant-card plant-card"
                        variants={galleryItemAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <img src={variant.img} alt={variant.name + ' Planter'} className="gallery-img" />
                        <h3>{variant.name}</h3>
                        <p>{variant.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;