import React from 'react';
import { Helmet } from 'react-helmet-async';


const SEO = ({ 
  title = "Villamart India pvt.ltd. | Empowering India's Agri Future",
  description = "VillaMart is a platform that connects farmers directly with consumers, providing fresh produce and a blog with articles on agriculture and healthy living.",
  keywords = "Villa Basket, Franchise Outlets, Farm, B2B Delivery, PFC Centers",
  url = "https://villamart.in",
  siteName = "VillaMart",
  image = "",
  imageAlt = "Villamart",
  imageWidth = "992",
  imageHeight = "340",
  publishedTime = "2024-07-29T19:22:07+04:00",
  modifiedTime = "2025-04-25T16:40:11+04:00",
  twitterImage = "",
  twitterTitle = "",
  twitterDescription = "",
  readTime = "1 minute"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <link rel="canonical" href={url} />

      {/* Favicon Links */}
      <link rel="android-chrome-512x512" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
      <link rel="android-chrome-192x192" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      {/* Open Graph Meta Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:updated_time" content={modifiedTime} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="992" />
      <meta property="og:image:height" content="340" />
      <meta property="og:image:alt" content="VillaMart" />
      <meta property="og:image:type" content="image/png" />

      {/* Article Meta Tags */}
      <meta property="article:published_time" content="2024-07-29T19:22:07+04:00" />
      <meta property="article:modified_time" content="2025-04-25T16:40:11+04:00" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || image} />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="VillaMart" />
      <meta name="twitter:label2" content="Time to read" />
      <meta name="twitter:data2" content="1 minute" />
    </Helmet>
  );
};

export default SEO;