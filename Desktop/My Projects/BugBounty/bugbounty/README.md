Features:
- Unlock Profile, Open Bounties, and Closed Bounties when logged in/lock when logged out []
- Smart Contract Logic to payout bounty when confirmed complete by author []

Need to Add:
- Logout Page for Auth0 endpoint [x]
- PostgreSQL - Relational DB     []    
- Auth0 - User Authorization     []
- Smart Contract                 []
    - Bounty Logic               []

Notes:
- Ditched Token Login due to needing a relational DB for posts, reputation system, and comments

Login -> Auth0 -> PostgreSQL DB -> Front End -> PostgreSQL...