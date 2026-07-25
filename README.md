# Reel Retriever
## Digging up the videos the algorithm forgot.

Reel Retriever is a web application dedicated to discovering the overlooked corners of YouTube. Instead of recommending popular or trending content, Reel Retriever helps users stumble across videos that have received little attention.

From forgotten home movies and amateur performances to school projects, auditions, and everyday moments captured on camera, Reel Retriever offers a window into the lives and experiences of people around the world.

The goal is to bring back the joy of discovering something unexpected on the internet.

### Features

  - Random Video Discovery: Explore obscure YouTube videos with minimal view counts.

  - Embeddable Video Playback: Watch discovered videos directly within the application.

  - Recent Discoveries: Revisit videos you've encountered during your browsing session.

  - Video Information: View channel names, upload dates, and other available metadata.

  - Retro-Inspired Interface: A playful, nostalgic design inspired by the personality of the early internet.

  - Responsive Layout: Distinct desktop and mobile experiences.

### How It Works

Reel Retriever uses an automated discovery pipeline to identify YouTube videos that have received relatively little exposure.

The backend periodically collects and processes video references, filtering for eligibility and maintaining a database of videos available for discovery.

When a user requests a new video, the application retrieves a candidate from this collection and displays it through YouTube's embedded player.

Reel Retriever does not download, modify, or rehost videos. Videos remain on YouTube, and engagement such as views, likes, and comments continues to support their original creators.

### Tech Stack

  - Frontend

  - React

  - JavaScript

  - HTML / CSS

  - Backend & Infrastructure

  - AWS Lambda

  - AWS Step Functions

  - Amazon DynamoDB

### Serverless architecture

The application separates video discovery and ingestion from the user-facing experience, allowing the video collection to be updated independently of browsing activity.

### Design & Artwork

Reel Retriever draws inspiration from the early days of the internet, when browsing the web often meant discovering strange, charming, and unexpected things.

Its interface features custom illustrations, playful visual elements, and a deliberately nostalgic aesthetic designed to make exploring the internet feel like an adventure again.

### Why I Built It

Modern recommendation algorithms are remarkably good at showing us content we're likely to enjoy, but they can also make the internet feel increasingly predictable.

I wanted to build something that encouraged curiosity without relying on popularity, engagement metrics, or personalized recommendations.

Reel Retriever is an experiment in rediscovering the internet's less-traveled paths and celebrating the ordinary, creative, and occasionally bizarre things people choose to share.

### Disclaimer

Reel Retriever is an independent project and is not affiliated with, endorsed by, or sponsored by YouTube or Google.

All videos remain the property of their respective creators and are accessed through YouTube.

License

All rights reserved unless otherwise specified.