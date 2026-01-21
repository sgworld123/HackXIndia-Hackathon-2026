# 🌍 MoveWise — Smart Relocation-Based Place Recommendation System

MoveWise is an intelligent, AI-powered application that helps users seamlessly adapt to a new city by recommending places (gyms, cafes, hospitals, restaurants, etc.) that closely match the places they already trust in their previous city.

The system combines **geospatial distance analysis**, **Google Places data**, and **Gemini AI-based comparison** to deliver accurate, relevant, and personalized recommendations through a clean and intuitive mobile app interface.

---

## 🔗 Important Links

- 📱 **App Demo(Download apk)**  
  https://your-frontend-link.com

- 🎥 **Video Demo (Walkthrough + Explanation)**  
  https://drive.google.com/file/d/1L24Uv981x_W-3gZUd3rcpYDEhkRxjX1h/view?usp=drive_link

- 📦 **GitHub Repository**  
  https://github.com/rishabh1230/HackXIndia-Hackathon-2026

---



---

## 🧠 Project Overview

When users relocate to a new city, they often want places similar to what they used earlier:
- A gym like their old gym
- A cafe with similar ambience
- A hospital with comparable services
- A restaurant with similar quality and reviews

MoveWise solves this by **understanding the user's past behavior** and **replicating that experience** in the new city using data and AI.

---

## ❓ Problem Statement

Traditional map-based search systems:
- Show generic nearby places
- Do not consider what the user liked earlier
- Ignore distance familiarity
- Lack intelligent comparison

As a result, users must manually search, compare, and experiment again.

---

## 💡 Why MoveWise?

MoveWise:
- Learns from the user’s previous city
- Uses trusted places as reference points
- Applies distance-based logic
- Uses AI to compare quality and services
- Delivers ranked recommendations instantly

---

## 🧩 Core Idea

> “If a user liked *this* place in their old city, show them *similar or better* places in the new city.”

---

## 🔄 High-Level Workflow

1. User enters:
   - Previous city
   - Current city
   - One or more source places they trust
2. Backend fetches details of source places
3. Distance from source place to previous city is calculated
4. Same distance radius is applied in current city
5. Similar places are fetched using Google Places API
6. Gemini AI compares old vs new places
7. Best matches are ranked and returned
8. Frontend displays results in a clean UI

---

## ⚙️ Detailed Working (Step-by-Step)

# 🌍 MoveWise — End-to-End Workflow (Step-by-Step Visual Guide)

This document explains the **complete internal working of MoveWise** in a **clear, step-by-step format**.  
Each step is written for **visual explanation**, and after every step there is a **dedicated image placeholder**  
where you can paste screenshots, diagrams, or flow visuals.

> ⚠️ This guide focuses on **logic and flow only** — no raw JSON inputs are shown.

---

## 🧩 STEP 1 — Capture User Relocation Context

### What happens

- The mobile application collects relocation context from the user:
  - The city they are moving **from**
  - The city they are moving **to**
  - One or more **trusted places** from the old city (gym, cafe, hospital, etc.)
- This information defines the **user’s lifestyle reference point**
- Backend validates and stores this context for processing

### Why this step matters

- Recommendations are **personalized**, not generic
- The system understands what the user already likes
- All future comparisons depend on this context

### Backend responsibility

- Validate required fields
- Normalize coordinates
- Prepare data for distance and place analysis

---

### 🖼️ IMAGE PLACEHOLDER — STEP 1  
*(User input / relocation selection screen)*  
<!-- <img src="assets/step1-context.png" width="100%" /> -->

---

## 🧩 STEP 2 — Analyze Source Place & Calculate Travel Radius

### What happens

- Backend fetches detailed information about the user’s trusted place
- The system calculates how far the user previously traveled to reach that place
- This distance becomes the **comfort travel radius**

### Logic used

- Distance is calculated between:
  - Trusted place location
  - Previous city center
- Primary method:
  - Google Distance Matrix API
- Fallback method:
  - Haversine (great-circle) distance

### Why this step matters

- Preserves user’s past behavior
- Avoids recommending places that are too far or unrealistically close
- Makes relocation experience feel familiar

---

### 🖼️ IMAGE PLACEHOLDER — STEP 2  
*(Distance calculation / map radius visualization)*  
<!-- <img src="assets/step2-distance.png" width="100%" /> -->

---

## 🧩 STEP 3 — Discover Similar Places in the New City

### What happens

- Using the calculated travel radius:
  - Backend searches for places near the new city
- Search is restricted to:
  - Same category (gym, cafe, hospital, restaurant, etc.)
- Results are filtered for relevance and quality

### Data fetched

- Place name
- Ratings
- Review count
- Coordinates
- Popularity indicators

### Why this step matters

- Ensures **category-level similarity**
- Prevents irrelevant or random results
- Narrows down to meaningful candidates

---

### 🖼️ IMAGE PLACEHOLDER — STEP 3  
*(Nearby places plotted on map in new city)*  
<!-- <img src="assets/step3-discovery.png" width="100%" /> -->

---

## 🧩 STEP 4 — AI-Based Comparison & Ranking

### What happens

- Each newly discovered place is compared with the original trusted place
- Gemini AI evaluates similarities based on:
  - Distance
  - Rating
  - Review quality
  - Services and amenities
- AI generates:
  - Match score
  - Short reasoning text
- Places are ranked from best to least suitable

### Why AI is used

- Traditional filters cannot judge *experience similarity*
- AI understands nuanced differences
- Produces human-like reasoning for recommendations

---

### 🖼️ IMAGE PLACEHOLDER — STEP 4  
*(AI comparison output / ranked cards UI)*  
<!-- <img src="assets/step4-ai-ranking.png" width="100%" /> -->

---

## 🧩 STEP 5 — Deliver Clean Results to the User

### What happens

- Backend sends ranked recommendations to the app
- Frontend displays:
  - Place cards
  - Distance badges
  - Ratings
  - AI match score
  - Explanation text
- User can confidently choose a place immediately

### Why this step matters

- Reduces decision fatigue
- Improves trust in recommendations
- Enhances user experience

---

### 🖼️ IMAGE PLACEHOLDER — STEP 5  
*(Final app UI showing recommendations)*  
<!-- <img src="assets/step5-ui.png" width="100%" /> -->

---

## ✅ Complete Flow Summary

1. Capture relocation context  
2. Analyze trusted place & calculate distance  
3. Search similar places in new city  
4. Compare using AI & rank results  
5. Present clean recommendations to user  

---

## 🏁 Final Note

**MoveWise** transforms relocation from a frustrating search process into a **smart, personalized experience**  
by combining **geospatial logic**, **real-world data**, and **AI reasoning**.

> Helping users feel at home — wherever they move.



