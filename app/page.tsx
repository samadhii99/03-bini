'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaYoutube, FaInstagram} from 'react-icons/fa';
import { SiX } from "react-icons/si"; 

import './mobile.css';
import './mobile-search-modal.css';
import './home.css';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Desktop filters
  const [selectedLocation, setSelectedLocation] = useState("Choose Location");
  const [selectedArea, setSelectedArea] = useState("Entire Area");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [openDropdown, setOpenDropdown] = useState<"location" | "area" | "category" | null>(null);
  const [locationSearch, setLocationSearch] = useState('');
  const [showLocationSearch, setShowLocationSearch] = useState(false);

  // Modal states
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [modalSearchQuery, setModalSearchQuery] = useState('');
  const [modalSelectedLocation, setModalSelectedLocation] = useState("Choose Location");
  const [modalSelectedArea, setModalSelectedArea] = useState("Entire Area");
  const [modalSelectedCategory, setModalSelectedCategory] = useState("All Categories");
  const [modalOpenDropdown, setModalOpenDropdown] = useState<"location" | "area" | "category" | null>(null);
  const [modalLocationSearch, setModalLocationSearch] = useState('');
  const [modalShowLocationSearch, setModalShowLocationSearch] = useState(false);

  // Updated handlers for area and category buttons to close location search
const handleModalAreaClick = () => {
  // Close location search if it's open
  if (modalShowLocationSearch) {
    setModalShowLocationSearch(false);
    setModalLocationSearch('');
  }
  // Toggle area dropdown
  setModalOpenDropdown(modalOpenDropdown === 'area' ? null : 'area');
};

const handleModalCategoryClick = () => {
  // Close location search if it's open
  if (modalShowLocationSearch) {
    setModalShowLocationSearch(false);
    setModalLocationSearch('');
  }
  // Toggle category dropdown
  setModalOpenDropdown(modalOpenDropdown === 'category' ? null : 'category');
};


  // Refs
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Add this locations array (you can expand this list)
  const locations = ['Bandarawela', 'Badulla', 'Balangoda'];

  // Filter locations based on search
  const filteredLocations = locations.filter(loc =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const modalFilteredLocations = locations.filter(loc =>
    loc.toLowerCase().includes(modalLocationSearch.toLowerCase())
  );

  const areas = ['+10 mi', '+20 mi', '+100 mi'];
  const categoryOptions = ['Tech', 'Fashion', 'Beauty'];

  const categories = [
    { image: '/img/tec.png' },
    { image: '/img/home.png' },
    { image: '/img/Beauty.png' },
    { image: '/img/Fashion.png' },
    { image: '/img/Stationery.png' },
    { image: '/img/Kids.png' },
    { image: '/img/Health.png' },
    { image: '/img/Grocery.png' }
  ];

  const quickLinks = ['Tech', 'Home', 'Kids', 'Fashion'];

    // Daily Deals data
  const dailyDeals = [
    {
      image: '/img/Products/deal1.png',
      title: "The Artist's Palette Bouquet With Seven Pink Roses And Three...",
      originalPrice: 'LKR 9200.00',
      salePrice: 'LKR 8200.00',
      rating: 4.8,
      reviews: '800+ Sold'
    },
    {
      image: '/img/Products/deal2.png',
      title: 'GIORDANO ANALOG WATCH FOR MEN GD 1196 05 - Watches',
      originalPrice: 'LKR 28,200.00',
      salePrice: 'LKR 24,000.00',
      rating: 4.8,
      reviews: '28200+ Sold'
    },
    {
      image: '/img/Products/deal3.png',
      title: 'Rose Serenity Luxury Bath And Spa Gift Set.',
      originalPrice: 'LKR 4,200.00',
      salePrice: 'LKR 2,200.00',
      rating: 4.68,
      reviews: '12800+ Sold'
    },
    {
      image: '/img/Products/deal4.png',
      title: 'Red Linen Dress',
      originalPrice: 'LKR 6,000.00',
      salePrice: 'LKR 4,000.00',
      rating: 4.8,
      reviews: '800+ Sold'
    },
    {
      image: '/img/Products/deal5.png',
      title: "Love's Sweet Embrace Box Arranged With 12 Fresh Red Roses And 8...",
      originalPrice: 'LKR 14,000.00',
      salePrice: 'LKR 12,500.00',
      rating: 4.8,
      reviews: '482+ Sold'
    }
  ];

  // Top Sellers data
  const topSellers = [
    {
      image: '/img/Products/deal2.png',
      title: 'GIORDANO ANALOG WATCH FOR MEN GD 1196 05 - Watches',
      originalPrice: 'LKR 28,200.00',
      salePrice: 'LKR 24,000.00',
      rating: 4.8,
      reviews: '1280+ Sold',
      badge: 'Best Seller'
    },
    {
      image: '/img/Products/top1.png',
      title: 'Apple Mac Mini 2018 8GB 16GB 32GB 64GB All Storage Intel i3 i5 i7 - ...',
      originalPrice: 'LKR 280,000.00',
      salePrice: 'LKR 242,000.00',
      rating: 4.8,
      reviews: '1280+ Sold',
      badge: 'Best Seller'
    },
    {
      image: '/img/Products/top2.png',
      title: 'BIOHEAL BOH Probioderm 3D Lifting Cream Essence 100ml Mist Firming...',
      originalPrice: 'LKR 16,000.00',
      salePrice: 'LKR 14,000.00',
      rating: 4.8,
      reviews: '800+ Sold',
      badge: 'Best Seller'
    },
    {
      image: '/img/Products/top3.png',
      title: "adidas Fear Of God X Athletics 86 Hi High Top Men's Beige Sneakers...",
      originalPrice: 'LKR 9,200.00',
      salePrice: 'LKR 8,200.00',
      rating: 4.8,
      reviews: '800+ Sold',
      badge: 'Best Seller'
    },
    {
      image: '/img/Products/top4.png',
      title: 'Extra Large Floor Vase Dried Flower Bottle Home Decoration Vase',
      originalPrice: 'LKR 14,000.00',
      salePrice: 'LKR 12,500.00',
      rating: 4.8,
      reviews: '482+ Sold',
      badge: 'Best Seller'
    }
  ];

  // Check if mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle search input click on mobile
  const handleSearchInputClick = () => {
    if (isMobile) {
      setShowMobileModal(true);
      // Sync current values to modal
      setModalSearchQuery(searchQuery);
      setModalSelectedLocation(selectedLocation);
      setModalSelectedArea(selectedArea);
      setModalSelectedCategory(selectedCategory);
    }
  };

  // Handle modal close
  const handleModalClose = () => {
    setShowMobileModal(false);
    setModalOpenDropdown(null);
    setModalShowLocationSearch(false);
    setModalLocationSearch('');
  };

  // Handle form submission
  const handleModalSubmit = () => {
    // Sync modal values back to main state
    setSearchQuery(modalSearchQuery);
    setSelectedLocation(modalSelectedLocation);
    setSelectedArea(modalSelectedArea);
    setSelectedCategory(modalSelectedCategory);
    
    // Close modal
    handleModalClose();
    
    // Here you can add your search logic
    console.log('Search submitted:', {
      query: modalSearchQuery,
      location: modalSelectedLocation,
      area: modalSelectedArea,
      category: modalSelectedCategory
    });
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        // Check if click is on the backdrop
        if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
          handleModalClose();
        }
      }
    };

    if (showMobileModal) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [showMobileModal]);

  // Handle location dropdown in modal
  const handleModalLocationClick = () => {
    if (!modalShowLocationSearch) {
      setModalShowLocationSearch(true);
      setModalOpenDropdown('location');
      setModalLocationSearch('');
    }
  };

  const handleModalLocationSelect = (location: string) => {
    setModalSelectedLocation(location);
    setModalOpenDropdown(null);
    setModalShowLocationSearch(false);
    setModalLocationSearch('');
  };

  return (
    <div className="min-h-screen bg-peach">
      {/* Header */}
      <div className="fixed-header-container">
        <div className="page-container"></div>
        <header className="bg-red-500 text-white px-6 py-4 header-offset">
          <div className="max-w-7xl mx-2 flex items-center justify-between">
            <div className="custom-title">
              BINI'S
            </div>

            <div className="flex items-center space-x-4">
              {/*Language Dropdown*/}
              <div className="relative">
                <div className="flex items-center space-x-2 language-selector cursor-pointer" onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
                  <span>{selectedLanguage.slice(0, 3)}</span>
                  <img src="/img/eva_arrow-down-fill.png" alt="dropdown" className="w-4 h-4" />
                </div>

                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-28 bg-white rounded-xl shadow-lg z-10">
                    <div className="language-dropdown">
                      <div className="py-2 text-center text-black">
                        <div className="px-4 py-2 hover:bg-orange-100 cursor-pointer" onClick={() => {
                          setSelectedLanguage('English');
                          setShowLanguageDropdown(false);
                        }}>
                          English
                        </div>
                        <div className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                          onClick={() => {
                            setSelectedLanguage('Sinhala');
                            setShowLanguageDropdown(false);
                          }}>
                          Sinhala
                        </div>
                        <div className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                          onClick={() => {
                            setSelectedLanguage('Tamil');
                            setShowLanguageDropdown(false);
                          }}>
                          Tamil
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button className="bg-org-500 hover:bg-red-300 transition-colors login-button">
                Login
              </button>

              <button className="hover:bg-red-700 transition-colors signup-button">
                Sign up
              </button>

              <div className="rounded-full flex items-center justify-center profile-avatar">
                <img src="/img/Ellipse 1.png" alt="user profile" className="rounded-full" />
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-13">
          <h1 className="hero-title">
            Redefining product discovery
          </h1>

          {/* Shop Icons */}
          <div className="flex justify-center items-center mb-14">
            <img src="/img/Shop-removebg-preview.png" alt="Antique shop" className="object-contain shop-image" />
          </div>

          {/* Search Section */}
          <div className="max-w-2x1 mx-auto">
            <div className="relative mb-10 search-container">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="I'm looking for..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={handleSearchInputClick}
                readOnly={isMobile}
                className="focus:outline-none bg-transparent border-none search-input"
              />

              <button className="custom-button-size absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors">
                <img
                  src="/img/majesticons_search-line.png"
                  alt="search"
                  className="w-[32px] h-[32px]"
                />
              </button>
            </div>

            {/* Filter Options - Desktop Only */}
            {!isMobile && (
              <div className="flex justify-center space-x-8 text-gray-700 mb-10 relative z-20">
                {/* Location Filter */}
                <div className="relative">
                  {!showLocationSearch ? (
                    <button
                      className={`filter-button ${openDropdown === 'location' ? 'active' : ''}`}
                      onClick={() => {
                        setShowLocationSearch(true);
                        setOpenDropdown('location');
                        setLocationSearch('');
                      }}
                    >
                      <img src="/img/weui_location-filled.png" alt="location" className="filter-icon" />
                      <span>{selectedLocation}</span>
                      <div className="filter-divider"></div>
                      <img src="/img/fe_arrow-down.png" alt="dropdown" className="filter-arrow" />
                    </button>
                  ) : (
                    <div className="filter-button active">
                      <img src="/img/weui_location-filled.png" alt="location" className="filter-icon" />
                      <input
                        type="text"
                        placeholder="Search location..."
                        value={locationSearch}
                        onChange={(e) => setLocationSearch(e.target.value)}
                        className="search-input"
                        autoFocus
                        onBlur={() => {
                          setTimeout(() => {
                            if (!locationSearch && selectedLocation === "Choose Location") {
                              setShowLocationSearch(false);
                              setOpenDropdown(null);
                            }
                          }, 200);
                        }}
                      />
                      <div className="filter-divider"></div>
                      <button
                        onClick={() => {
                          setShowLocationSearch(false);
                          setOpenDropdown(null);
                          setLocationSearch('');
                        }}
                        className="search-close-button"
                      >
                        <img src="/img/fe_arrow-down.png" alt="close" className="filter-arrow rotate-180" />
                      </button>
                    </div>
                  )}

                  {openDropdown === 'location' && showLocationSearch && (
                    <div className="dropdown-menu">
                      {filteredLocations.length > 0 ? (
                        filteredLocations.map((loc) => (
                          <div
                            key={loc}
                            className={`dropdown-item ${selectedLocation === loc ? 'dropdown-item-selected' : ''}`}
                            onClick={() => {
                              setSelectedLocation(loc);
                              setOpenDropdown(null);
                              setShowLocationSearch(false);
                              setLocationSearch('');
                            }}
                          >
                            <img src="/img/location-drop.png" alt="icon" className="dropdown-icon" />
                            <span>{loc}</span>
                          </div>
                        ))
                      ) : (
                        <div className="dropdown-item text-gray-500">
                          No locations found
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Area Filter */}
                <div className="relative">
                  <button
                    className={`filter-button ${openDropdown === 'area' ? 'active' : ''}`}
                    onClick={() => setOpenDropdown(openDropdown === 'area' ? null : 'area')}
                  >
                    <img src="/img/bxs_area.png" alt="area" className="filter-icon" />
                    <span>{selectedArea}</span>
                    <div className="filter-divider"></div>
                    <img src="/img/fe_arrow-down.png" alt="dropdown" className="filter-arrow" />
                  </button>

                  {openDropdown === 'area' && (
                    <div className="dropdown-menu">
                      {areas.map((area) => (
                        <div
                          key={area}
                          className={`dropdown-item ${selectedArea === area ? 'dropdown-item-selected' : ''}`}
                          onClick={() => {
                            setSelectedArea(area);
                            setOpenDropdown(null);
                          }}
                        >
                          <img src="/img/bxs_area-drop.png" alt="icon" className="dropdown-icon" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <button
                    className={`filter-button ${openDropdown === 'category' ? 'active' : ''}`}
                    onClick={() => setOpenDropdown(openDropdown === 'category' ? null : 'category')}
                  >
                    <img src="/img/bxs_category.png" alt="category" className="filter-icon" />
                    <span>{selectedCategory}</span>
                    <div className="filter-divider"></div>
                    <img src="/img/fe_arrow-down.png" alt="dropdown" className="filter-arrow" />
                  </button>

                  {openDropdown === 'category' && (
                    <div className="dropdown-menu">
                      {categoryOptions.map((cat) => (
                        <div
                          key={cat}
                          className={`dropdown-item ${selectedCategory === cat ? 'dropdown-item-selected' : ''}`}
                          onClick={() => {
                            setSelectedCategory(cat);
                            setOpenDropdown(null);
                          }}
                        >
                          <img src="/img/bxs_category-drop.png" alt="icon" className="dropdown-icon" />
                          <span>{cat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quick Links */}
            <div className="mt-6 flex justify-center items-center space-x-3 text-sm text-gray-600">
              <span className="try-this-label">Try this:</span>
              {quickLinks.map((link, index) => (
                <button key={index} className="quick-link-button">
                  {link}
                </button>
              ))}
              <button className="custom-see-more-button">See more...</button>
            </div>
          </div>
        </div>

<div className='bg-white white-container'>
        {/* Shop by Category */}
        <section className="mt-22">
          <h2 className="shop-by-category-title">Shop by Category</h2>

          <div className="custom-category-container">
            <div className="grid grid-cols-4 gap-10">
              {categories.map((category, index) => (
                <div key={index} className="flex flex-col items-center cursor-pointer group">
                  <img
                    src={category.image}
                    className="w-200 h-200 object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Deals Section */}
        <section className="mt-22">
          <div className="text-center mb-8">
            <h2 className="shop-by-category-title">Daily Deals</h2>
            <button className= 'timmer-button'>
            <div className="flex justify-center items-center space-x-2 text-red-500 mt-4">
              <img src="/img/clock.png" alt="clock" className="w-5 h-5 cl-icon"/>
              <span className="deal-timer">Ends in: 22:08:59</span>
            </div>
            </button>
          </div>

          <div className="deals-container">
            <div className="flex grid-cols-5 gap-6">
              {dailyDeals.map((deal, index) => (
                <div key={index} className="deal-card">
                  <div className="deal-image-container">
                    <img src={deal.image} alt={deal.title} className="deal-image" />
                  </div>
                  <div className="deal-content">
                    <h3 className="deal-title">{deal.title}</h3>
                    <div className="flex gap-4 short-btn">
                    <button className ='stock-btn'>In Stock</button>
                    <button className='tech-btn'>Tech Zone</button>
                    </div>
                    <div className="deal-prices">
                      <span className="deal-sale-price">{deal.salePrice}</span>
                      <span className="deal-original-price">{deal.originalPrice}</span>
                    </div>
                    <div className="deal-rating">
                      <div className="rating-stars">
                        {[...Array(1)].map((_, i) => (
                          <span key={i} className={`star ${i < Math.floor(deal.rating) ? 'filled' : ''}`}>★</span>
                        ))}
                      </div>
                      <span className="rating-text">{deal.rating}</span>
                      <span className="reviews-text">{deal.reviews}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Sellers Section */}
        <section className="mt-22">
          <h2 className="shop-by-category-title">Top Sellers</h2>

          <div className="deals-container">
            <div className="flex gap-6">
              {topSellers.map((seller, index) => (
                <div key={index} className="deal-card">
                  <div className="deal-image-container">
                    <div className="best-seller-badge">{seller.badge}</div>
                    <img src={seller.image} alt={seller.title} className="deal-image" />
                  </div>
                  <div className="deal-content">
                    <h3 className="deal-title">{seller.title}</h3>
                    <div className="flex gap-4 short-btn">
                    <button className ='stock-btn'>In Stock</button>
                    <button className='tech-btn'>Tech Zone</button>
                    </div>
                    <div className="deal-prices">
                      <span className="deal-sale-price">{seller.salePrice}</span>
                    <span className="deal-original-price">{seller.originalPrice}</span>     
                </div>
                    <div className="deal-rating">
                      <div className="rating-stars">
                        {[...Array(1)].map((_, i) => (
                          <span key={i} className={`star ${i < Math.floor(seller.rating) ? 'filled' : ''}`}>★</span>
                        ))}
                      </div>
                      <span className="rating-text">{seller.rating}</span>
                      <span className="reviews-text">{seller.reviews}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer-section">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">BINI'S</div>
              <p className="footer-description">
                Subscribe to our newsletter for the latest news and special offers.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email"
                  className="newsletter-input"
                />
                <button className="newsletter-button">Subscribe</button>
              </div>
              <p className="privacy-text">
                By subscribing, you consent to our Privacy Policy and agree to receive updates.
              </p>
              <div className="footer-copyright">
                © 2025 Bini's. All rights reserved.
              </div>
            </div>
            
            <div className="footer-right">
              <div className="footer-links-section">
                <div className="footer-column">
                  <h4 className="footer-column-title">Categories</h4>
                  <ul className="footer-links">
                    
                    <li><a >Kids</a></li>
                    <li><a >Tech</a></li>
                    <li><a >Health</a></li>
                    <li><a >Beauty</a></li>
                    <li><a >Fashion</a></li>
                    <li><a >Stationery</a></li>
                    <li><a >Home</a></li>
                    <li><a >Grocery</a></li>
                  </ul>
                </div>
                
                <div className="footer-column">
                  <h4 className="footer-column-title">Contact</h4>
                  <ul className="footer-links">
                    <div className="social-links">
  <a href="#" className="social-link">
    <FaFacebook className="w-5 h-5" />
    <span>Facebook</span>
  </a>
  <a href="#" className="social-link">
    <FaYoutube className="w-5 h-5" />
    <span>YouTube</span>
  </a>
  <a href="#" className="social-link">
    <FaInstagram className="w-5 h-5" />
    <span>Instagram</span>
  </a>
  <a href="#" className="social-link">
    <SiX className="w-5 h-5" />
    <span>X</span>
  </a>
</div>
                  </ul>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </footer>
    
      {/* Mobile Search Modal */}
      {showMobileModal && (
        <div className="modal-backdrop fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-start">
          {/* Search Bar - Outside Modal Container */}
          <div className="external-search-container w-full max-w-md px-6 mt-[10vh] mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="I'm looking for..."
                value={modalSearchQuery}
                onChange={(e) => setModalSearchQuery(e.target.value)}
                className="external-search-input w-full px-4 py-3 border-2 border-red-500 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-black"
                autoFocus
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <img src="/img/majesticons_search-line.png" alt="search" className="w-6 h-6" />
              </button>
            </div>
          </div>

           {/* Modal Container - Only Filters */}
          <div 
            ref={modalRef}
            className="mobile-search-modal bg-gray-200 rounded-xl w-full max-w-md mx-6 max-h-[50vh] overflow-y-auto border-3 border-white"
          >
            {/* Modal Header */}
            <div className="modal-header p-6 border-b border-gray-200">
              
            </div>

              {/* Modal Content - Only Filters */}
            <div className="modal-content p-6 space-y-4">
              {/* Modal Filters */}
              <div className="space-y-4">
                {/* Location Filter */}
                <div className="relative">
                  {!modalShowLocationSearch ? (
                    <button
                      onClick={handleModalLocationClick}
                      className={`w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors ${
                        modalOpenDropdown === 'location' ? 'active' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <img src="/img/weui_location-filled.png" alt="location" className="w-5 h-5" />
                        <span className="text-gray-900">{modalSelectedLocation}</span>
                      </div>
                      <img src="/img/fe_arrow-down.png" alt="dropdown" className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className={`w-full flex items-center justify-between px-4 py-3 border-2 border-red-500 rounded-xl bg-red-50 ${
                      modalShowLocationSearch ? 'active' : ''
                    }`}>
                      <div className="flex items-center space-x-3 flex-1">
                        <img src="/img/weui_location-filled.png" alt="location" className="w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Search location..."
                          value={modalLocationSearch}
                          onChange={(e) => setModalLocationSearch(e.target.value)}
                          className="flex-1 bg-transparent border-none outline-none text-gray-900"
                          autoFocus
                        />
                      </div>
                      <button
                        onClick={() => {
                          setModalShowLocationSearch(false);
                          setModalOpenDropdown(null);
                          setModalLocationSearch('');
                        }}
                        className="ml-2"
                      >
                        <img src="/img/fe_arrow-down.png" alt="close" className="w-4 h-4 rotate-180" />
                      </button>
                    </div>
                  )}
                  {modalOpenDropdown === 'location' && modalShowLocationSearch && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                      {modalFilteredLocations.length > 0 ? (
                        modalFilteredLocations.map((loc) => (
                          <div
                            key={loc}
                            className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                              modalSelectedLocation === loc ? 'bg-red-50 text-red-600' : 'text-gray-900'
                            }`}
                            onClick={() => handleModalLocationSelect(loc)}
                          >
                            <img src="/img/location-drop.png" alt="icon" className="w-4 h-4" />
                            <span>{loc}</span>
                          </div>
                        ))
                      ) : (
                        <div className="flex items-center space-x-3 px-4 py-3 text-gray-500">
                          <span>No locations found</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Area Filter */}
                <div className="relative">
                  <button
                    onClick={handleModalAreaClick}
                    className={`w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors ${
                      modalOpenDropdown === 'area' ? 'active' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <img src="/img/bxs_area.png" alt="area" className="w-5 h-5" />
                      <span className="text-gray-900">{modalSelectedArea}</span>
                    </div>
                    <img 
                      src="/img/fe_arrow-down.png" 
                      alt="dropdown" 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        modalOpenDropdown === 'area' ? 'rotate-108' : ''
                      }`} 
                    />
                  </button>

                  {modalOpenDropdown === 'area' && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                      {areas.map((area) => (
                        <div
                          key={area}
                          className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                            modalSelectedArea === area ? 'bg-red-50 text-red-600' : 'text-gray-900'
                          }`}
                          onClick={() => {
                            setModalSelectedArea(area);
                            setModalOpenDropdown(null);
                          }}
                        >
                          <img src="/img/bxs_area-drop.png" alt="icon" className="w-4 h-4" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <button
                    onClick={handleModalCategoryClick}
                    className={`w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors ${
                      modalOpenDropdown === 'category' ? 'active' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <img src="/img/bxs_category.png" alt="category" className="w-5 h-5" />
                      <span className="text-gray-900">{modalSelectedCategory}</span>
                    </div>
                    <img 
                      src="/img/fe_arrow-down.png" 
                      alt="dropdown" 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        modalOpenDropdown === 'category' ? 'rotate-108' : ''
                      }`} 
                    />
                  </button>

                  {modalOpenDropdown === 'category' && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                      {categoryOptions.map((cat) => (
                        <div
                          key={cat}
                          className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                            modalSelectedCategory === cat ? 'bg-red-50 text-red-600' : 'text-gray-900'
                          }`}
                          onClick={() => {
                            setModalSelectedCategory(cat);
                            setModalOpenDropdown(null);
                          }}
                        >
                          <img src="/img/bxs_category-drop.png" alt="icon" className="w-4 h-4" />
                          <span>{cat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
              {/* Go Button - Outside Modal Container */}
          <div className="external-button-container w-full max-w-md px-6 mt-4">
            <button
              onClick={handleModalSubmit}
              className="external-go-button w-full bg-white text-black py-3 rounded-xl hover:bg-gray-100 transition-colors font-semibold border-3 border-white"
            >
              Go
            </button>
            </div>
          </div>
      
      )}
    </div>
  );
};

export default HomePage;