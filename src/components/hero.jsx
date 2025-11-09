import { motion } from 'framer-motion';
import  plant  from '../assets/plant.png'; 

const Hero = () => {
  const productVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.8,
        type: 'spring',
        stiffness: 70,
        damping: 10,
      },
    },
  };

  return (
    <div className="hero-content themed-hero">
      <div className="text-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
          The Plantspire
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
        >
          Bring effortless serenity to your home, by getting inspired by plant decorated houses.
        </motion.p>
      </div>

      <motion.div
        className="product-asset plant-asset"
        variants={productVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={plant} className='plant-img'/>
        <span role="img" aria-label="Aether Planter" style={{ fontSize: '6rem' }}></span>
      </motion.div>
    </div>
  );
};

export default Hero;