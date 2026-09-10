import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BooksSlider.css';

const books = [
  {
    id: 1,
    title: 'Mazywood',
    cover: 'https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95dd114588ec2d7b5f3852_earlymazywood.png',
    bg: '#32225f',
    color: '#ffffff',
    desc: 'All the Sinners Bleed meets Erasure in this literary thriller from the award-winning author of The Reformatory following the grandson of a famous Black actress who returns to his grandmother’s cabin retreat in the California mountains only to encounter the legacy of her rage born in Old Hollywood.',
    tags: [
      { text: 'Historical', bg: '#ff9d00', color: 'black' },
      { text: 'Horror', bg: '#000000', color: 'white' },
      { text: 'Includes a Dog', bg: '#e62701', color: 'white' }
    ]
  },
  {
    id: 2,
    title: 'Crone',
    cover: 'https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95de8306c788ece7de135f_crone.png',
    bg: '#6abf4c',
    color: '#000000',
    desc: 'A haunting, fearsome story of a father searching for his missing daughter and finding darkness—both human and not—at every turn, from the “mind-blowingly good” (Stephen King) author of Coffin Moon and Fever House.',
    tags: [
      { text: 'Horror', bg: '#000000', color: 'white' }
    ]
  },
  {
    id: 3,
    title: 'The Secret Dinner',
    cover: 'https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95dfdce3d0286b64aa3e9c_thesecretdinner.png',
    bg: '#000000',
    color: '#ffffff',
    desc: 'Four childhood friends, eager for a taste of city life, swap rural Brazil for an apartment in Copacabana, Rio. But they have no idea of the fate that awaits them there…',
    tags: [
      { text: 'Translated', bg: '#b6beff', color: 'black' },
      { text: 'Horror', bg: '#000000', color: 'white' },
      { text: 'Thriller', bg: '#3d3195', color: 'white' }
    ]
  },
  {
    id: 4,
    title: 'Blacktail',
    cover: 'https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e0dc6d550cec545ea990_blacktail.png',
    bg: '#c13a1f',
    color: '#ffffff',
    desc: 'Two teenage friends on a desperate road trip across the American West find themselves pursued by a terrifying supernatural entity that feeds on their darkest secrets.',
    tags: [
      { text: 'Thriller', bg: '#3d3195', color: 'white' }
    ]
  }
];

const BooksSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="books-section">
      <div className="books-container">
        <div className="books-header">
          <div className="books-header-content">
            <h2 className="books-title">Our Sept books</h2>
            <p className="books-paragraph">We drop new books on the 1st of every month. Call us creatures of habit.</p>
          </div>
          <div className="books-header-handwritten">
            <p className="handwritten-text">Discover hidden gems and buzzy new releases</p>
          </div>
        </div>

        <div className="slider-wrapper">
          <div className="slider-controls">
            <button className="control-btn" onClick={() => scroll('left')} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <button className="control-btn" onClick={() => scroll('right')} aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="slider-track" ref={sliderRef}>
            {books.map((book) => (
              <div key={book.id} className="book-card">
                <div className="book-bg" style={{ backgroundColor: book.bg }}>
                  {/* Decorative ears could go here */}
                  <div className="book-read-more">
                    <button className="btn-secondary" style={{ backgroundColor: 'white', color: 'black' }}>
                      <span>Read more</span>
                    </button>
                  </div>
                </div>
                
                <div className="book-content-container">
                  <div className="book-cover">
                    <img src={book.cover} alt={book.title} />
                  </div>
                  <div className="book-details">
                    <h3 className="book-title" style={{ color: book.color }}>{book.title}</h3>
                    <p className="book-desc" style={{ color: book.color }}>{book.desc}</p>
                    <div className="book-tags">
                      {book.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="tag" 
                          style={{ backgroundColor: tag.bg, color: tag.color }}
                        >
                          {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSlider;
