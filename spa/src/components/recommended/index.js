import React, { useEffect, useState } from "react";
import { Heading3 } from "ui-components/dist/components/atoms";
import { label } from '../../configs/labels';

const Recommended = () => {
    return (
      <>
        <h3>{label.recommendedForYou}</h3>
      </>
    );
};

export default Recommended;
