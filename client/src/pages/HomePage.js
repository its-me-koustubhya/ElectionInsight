import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import indiaImage from "../assets/image.png";
import Analysis from "../assets/Analysis.avif";
import Newspaper from "../assets/newspaper.jpg";
import Invite from "../assets/invite.jpg";
import Data from "../assets/data.jpg";
import Graph from "../assets/graph.jpg";
import Demography from "../assets/demography.jpg";
import "../styles/index.css";

const HomePage = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const selectYearRef = useRef();

  const slides = [
    {
      id: 1,
      image: Graph,
      heading: "Interactive Charts and Graphs",
      description:
        "Explore dynamic and interactive charts that provide a visual representation of election data.",
    },
    {
      id: 2,
      image: Data,
      heading: "Historical Data Analysis",
      description:
        "Dive into historical data to analyze trends and patterns over multiple election cycles.",
    },
    {
      id: 3,
      image: Demography,
      heading: "Demographic Trends",
      description:
        "Explore insights related to demographic shifts and their impact on election outcomes.",
    },
  ];

  const scrollToSelectYear = () => {
    selectYearRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleYearChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedYear(selectedOption);
  };

  useEffect(() => {
    if (selectedYear === "2019") {
      window.location.href = "/ElectionReport";
    }
  }, [selectedYear]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="home-page">
      <div className="hero-content">
        <div className="inner-content">
          <h1>Welcome to Election Insight</h1>
          <p>Empowering Democracy Through Data-driven Insights</p>
          <button onClick={scrollToSelectYear}>Start Here!</button>
        </div>
        <div className="background-image-container">
          <img
            src={indiaImage}
            alt="Background"
            className="hero-background-image"
          />
        </div>
      </div>

      <div className="mission">
        <div className="mission-element mission-image">
          <img src={Newspaper} alt="Mission Img 1" />
        </div>
        <div className="mission-element mission-content">
          <h1>Our Mission</h1>
          <p>
            Our platform is designed to revolutionize the way you engage with
            election reports. We will empower you by providing a comprehensive
            and easily digestible analysis of electoral data. Through the
            strategic use of tables, charts, maps, and images. We believe in{" "}
            <span className="highlight">simplifying the complex</span> offering
            a user-friendly interface that delivers clear insights into election
            results.
          </p>
        </div>
        <div className="mission-element mission-image">
          <img src={Invite} alt="Mission Img 2" />
        </div>
      </div>

      <div className="insights-for-all">
        <div className="insight-content">
          <div className="insight-text-content">
            <h2>Insights for All</h2>
            <p>
              Explore a variety of insights using our interactive platform and
              gain a deeper understanding of the election results.
            </p>
            <div className="spacing"></div>
            <p>Start your journey to informed decision making today!</p>
            <button className="spacing-button" onClick={scrollToSelectYear}>
              Explore Insights
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          speed={1000}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slider-item">
                <img src={slide.image} alt={`Slide ${slide.id}`} />
                <div className="text-content">
                  <h3>{slide.heading}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div ref={selectYearRef} className="select-year-section">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${Analysis})` }}
        >
          <h1>Select Year for Analysis</h1>
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="" disabled>
              Select a Year
            </option>
            <option value="2009">2009</option>
            <option value="2014">2014</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
