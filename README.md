LIVE at: https://letters-app.vercel.app/

### TODOS:

- [ ] Add authentication system & permit administrative actions to only admins
- [ ] Add random image system for Letter Previews, further: Inside letters (Further improve: Add image upload, allow new images)
- [x] Replace hash tag routing with title routing
- [ ] Define default variables, handle themes with default values
- [ ] Optimize page loading
- [ ] Add skeleton for loading instead of React Spinners

- [ ] Fix updated & deleted letters don't take action in production (in development it's OK, but on live, they don't delete asap (maybe SWR issue))

- [ ] Fix unreacahable paths returns Next.js issues (redirect to / instead)
    - For example: Non-existing letter ids return TypeError: Cannot read properties of undefined (reading 'createdAt') error.
