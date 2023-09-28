import React from 'react';

function ContentPage({ selectedCardIndex }) {
  const contentData = [
    {
      title: 'Content 1',
      accordions: [
        { title: 'Accordion 1', content: 'Content for Accordion 1' },
        { title: 'Accordion 2', content: 'Content for Accordion 2' },
      ],
    },
    {
      title: 'Content 2',
      accordions: [
        { title: 'Accordion A', content: 'Content for Accordion A' },
        { title: 'Accordion B', content: 'Content for Accordion B' },
      ],
    },
    // Add similar data for other cards
  ];

  // Render content based on the selectedCardIndex
  const selectedContent = contentData[selectedCardIndex];

  return (
    <div>
      <h1>Dusra Page - Content Page</h1>
      {selectedCardIndex !== null ? (
        <div className="content">
          <h2>{selectedContent.title}</h2>
          {selectedContent.accordions.map((accordion, index) => (
            <div key={index} className="accordion">
              <button className="accordion-button" type="button">
                {accordion.title}
              </button>
              <div className="accordion-content">
                <p>{accordion.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Select a card on the first page to view its content.</p>
      )}
    </div>
  );
}

export default ContentPage;
