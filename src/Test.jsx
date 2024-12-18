import React from 'react';
import { delay, motion } from 'framer-motion';

const Test = () => {
  const items = ['item1', 'item2', 'item3', 'item4'];

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      //   transition: { type: 'spring', stiffness: 100, damping: 100 },
      transition: {
        delay: i * 0.3,
        type: 'spring',
        stiffness: 100,
        damping: 100,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li key={item} variants={variants} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
