# CodeCarnival

A community-driven platform where developers and designers compete by submitting creative projects — from absurd UI/UX designs to funny React components and original experiments. Inspired by the legendary 2017 Reddit "worst design" contest and React Bits.

---

# Vision
CodeCarnival is part hackathon, part meme culture, part portfolio builder.  
We celebrate originality, humor, and creativity — not just technical correctness.

---

## Tech Stack
**Frontend**
- React + TypeScript
- Material UI
- React Router v6
- Axios

**Backend**
- ASP.NET Core Web API
- Entity Framework Core
- PostgreSQL / SQL Server
- JWT Authentication (OAuth via GitHub/Google/Microsoft)

**Deployment**
- Frontend: Vercel / Netlify
- Backend: Azure / AWS
- CI/CD: GitHub Actions

---

## Core Features
- Homepage with featured competitions & past winners
- Competition system (active/past/all filters, countdown timers)
- Submission flow (title, description, repo link, screenshot/GIF)
- Voting system (upvote/downvote, transparent counts)
- Leaderboards (per competition + overall rankings)
- Comments (threads under submissions)
- User profiles (submissions, badges, portfolio links)
- Authentication (OAuth login, JWT sessions)
- Admin dashboard (manage competitions, moderate submissions/comments)

---

## Project Structure
### Frontend
src/
├──components
├──pages/
├──services/
├──types/
├──contexts/
├──utils/
├──theme/
└──App.tsx


### Backend
src/ 
├── Controllers/ # API controllers 
├── Models/ # Entity models 
├── DTOs/ # Data transfer objects 
├── Services/ # Business logic 
├── Data/ # DbContext + migrations 
├── Middleware/ # Auth, error handling 
└── Program.cs


---

## 🛠️ Development Phases
1. Planning & Setup  
2. Backend Foundation  
3. Frontend Foundation  
4. Authentication & Users  
5. Voting & Engagement  
6. Admin Features  
7. Polish & Deployment  

---

## Success Criteria (MVP)
- Users can browse competitions  
- OAuth login works  
- Submissions + voting + comments functional  
- Leaderboards display rankings  
- Admins can manage competitions  
- Responsive + accessible design  
- Deployed and publicly accessible  

---

## Future Enhancements
- Email notifications  
- Advanced search & filters  
---

## Resources
- [Material UI Docs](https://mui.com/)  
- [ASP.NET Core Docs](https://docs.microsoft.com/aspnet/core)  
- [React Router](https://reactrouter.com/)  
- [Entity Framework Core](https://docs.microsoft.com/ef/core)  
- [OAuth Docs](https://docs.github.com/apps/oauth-apps/)  

---

## License
MIT License © 2025 CodeCarnival
