import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { ContainerStep, DivStep, Svg } from '../styled';

const Step = ({ stepSelect }) => {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const data = [
    {
      id: 1,
      text: 'Seus dados'
    },
    {
      id: 2,
      text: 'Endereço'
    },
    {
      id: 3,
      text: 'Seu perfil'
    }
  ];

  return (
    <ContainerStep>

      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {data.map(step => (
          <motion.div key={step.id} className="item" variants={item} >

            <DivStep>
              <Svg icon={stepSelect > step.id ? true : false}>
                {stepSelect > step.id ? <FaCheck /> : step.id}
              </Svg>
              <p>
                {step.text}
              </p>
            </DivStep>

          </motion.div>
        ))}
      </motion.div>

    </ContainerStep>
  );
}

export default Step;
