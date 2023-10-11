import React, { useState, useEffect } from "react";

const BreakingBadQuote = ({ counterValue }) => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counterValue}`);
      const data = await response.json();
      setQuote(data[0].quote);
      setIsLoading(false);
    };

    fetchData();
  }, [counterValue]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <blockquote>{quote}</blockquote>
      )}
    </div>
  );
};

export default BreakingBadQuote;

