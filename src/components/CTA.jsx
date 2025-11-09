import { motion, useReducedMotion } from 'framer-motion';

const CTA = () => {
  const shouldReduceMotion = useReducedMotion();

  const buttonProps = {
    whileHover: shouldReduceMotion ? { scale: 1.0 } : { scale: 1.05, rotate: 1 },
    whileTap: shouldReduceMotion ? { scale: 1.0 } : { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  };

  return (
    <div className="cta-content">
      <h2>Ready to bring more life to your house?</h2>
      <p>Click below to get more inspired.</p>
      
      <motion.button
        className="main-cta-button"
        {...buttonProps}
      >
        Inspiration
      </motion.button>
    </div>
  );
};

export default CTA;