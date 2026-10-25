# NOVA Media Agency

A modern digital agency website designed to showcase creative services, digital solutions, and business growth strategies.

## Overview

NOVA Media Agency provides a professional online presence for businesses looking for modern web experiences and digital growth solutions. The website features a clean interface, responsive layouts, and dedicated pages for agency services, projects, and contact inquiries.

## Features

- Responsive and modern user interface
- Home, About, Services, Projects, and Contact pages
- Project showcase and project detail pages
- Contact form integration with Supabase
- Server-side email handling with a Supabase Edge Function
- Reusable React components
- Modern styling with Tailwind CSS

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- Supabase Edge Functions

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/armitajanalizadeh84-sudo/nova-media-agency.git
cd nova-media-agency
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display a local URL where you can preview the website.

## Environment Variables

Configure the required environment variables locally in a `.env` file. Never commit API secrets, private keys, or service-role keys to version control.

Use the variable names expected by the project configuration.

## Project Structure

```text
src/
  components/
  pages/
  lib/
  assets/
public/
supabase/
  functions/
  migrations/
```

## Security

Sensitive credentials should be stored in environment variables or secure server-side secrets. Public repository users should never receive private API keys or service-role credentials.

## License

No license has been specified yet. All rights are reserved by the project owner unless a license is added.
