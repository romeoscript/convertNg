// src/components/QuickCard.jsx

import React from 'react';
import { Card, Box, Text } from '@radix-ui/themes';
import Icons from '../utils/Icons';

const QuickCard = ({ title, description, href, maxWidth = "350px" }) => {
  return (
    <Box style={{ maxWidth }}>
      <Card asChild>
        <Icons type="ArrowRight" size={24} className="absolute top-4 right-4" />
        <a href={href} className="block p-4 rounded-lg shadow-lg hover:bg-gray-50 transition duration-300 ease-in-out">
          <Text as="div" size="2" weight="bold" className="mb-2">
            {title}
          </Text>
          <Text as="div" color="gray" size="2">
            {description} 
          </Text>
        </a>
      </Card>
    </Box>
  );
};

export default QuickCard;
